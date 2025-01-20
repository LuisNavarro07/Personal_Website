# Clean INEGI EFIPEM Data 
# Code by: Luis Navarro 
# Update: January 2025 

rm(list = ls())
library(pacman)
p_load(tidyverse, here, rio, janitor)

# Folder Structure
path = here('/Users/luisenriquenavarro/Library/CloudStorage/OneDrive-IndianaUniversity/Research/Public_Finance_Data/Mexico')
raw_data_path = here(path,'raw_data')
clean_data_path = here(path,'clean_data')
#-------------------------------------------------------------------------------
# Functions to Clean INEGI Data 

# Clean State Level Data
clean_inegi_estatal <- function(year){
  
  file_name = paste('efipem_estatal_anual_tr_cifra_', as.character(year), '.csv', sep = '')
  data_path = here(raw_data_path, 'public_finance', 'efipem_estatal_csv', 'conjunto_de_datos', file_name)
  data <- rio::import(file = data_path) %>% 
    clean_names() %>% 
    rename(year = anio) %>% 
    select(-c(prod_est, cobertura, estatus))
  
  return(data)
}

# Clean Municipal Level Data 
clean_inegi_municipal <- function(year){
  
  file_name = paste('efipem_municipal_anual_tr_cifra_', as.character(year), '.csv', sep = '')
  data_path = here(raw_data_path, 'public_finance', 'efipem_municipal_csv', 'conjunto_de_datos', file_name)
  data <- rio::import(file = data_path) %>% 
    clean_names() %>% 
    rename(year = anio) %>% 
    select(-c(prod_est, cobertura, estatus))
  
  return(data)
}

#-------------------------------------------------------------------------------

# Get state and municipalities names and geo id. 
estados_list <- rio::import(
  file = here(raw_data_path, 'public_finance', 'efipem_municipal_csv', 'catalogos', 'tc_entidad.csv')
) %>% clean_names()

municipios_list <- rio::import(
  file = here(raw_data_path, 'public_finance', 'efipem_municipal_csv', 'catalogos', 'tc_municipio.csv')
) %>% clean_names()

# Read state data 
finance_data_estatal <- map_df(1990:2022, clean_inegi_estatal) %>% 
  left_join(estados_list, by = "id_entidad", relationship = "many-to-one") %>% 
  mutate(id_municipio = 0, 
         nom_municipio = "Gobierno del Estado")

# Read municipal data 
finance_data_municipal <- map_df(1990:2022, clean_inegi_municipal) %>% 
  left_join(estados_list, by = "id_entidad", relationship = "many-to-one") %>% 
  left_join(municipios_list, by = c("id_entidad", "id_municipio"), relationship = "many-to-one")  

# Append both data 
finance_data_state_municipal <- bind_rows(finance_data_estatal, finance_data_municipal) %>% 
  relocate(id_entidad, id_municipio, nom_entidad, nom_municipio, year)

# Export the clean data 
rio::export(x = finance_data_state_municipal, 
            file = here(clean_data_path, 'finance_data_state_municipal.csv'))

# End Script
#-------------------------------------------------------------------------------