---
# Leave the homepage title empty to use the site title
title: "Luis Navarro"
date: 2026-11-23
type: pages

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/cv_len.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          # Add your image background to `assets/media/`.
          filename: background2.jpg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false

  - block: markdown
    content:
      title: 'About Me'
      subtitle: ''
      text: |-
        I am an Assistant Professor of Public Finance and Financial Management at the [Evans School of Public Policy and Governance](https://evans.uw.edu/) at the University of Washington. My research lies at the intersection of fiscal federalism, local tax policy, public financial management, and municipal debt. I study how interactions between different levels of government shape state and local policies and economic outcomes, how institutional design affects borrowing costs in the municipal bond market, and how tax policy influences the development of new markets.

        I teach public budgeting, financial management, and quantitative methods at the Evans School. I received my PhD in Public Affairs (Public Finance and Policy Analysis) from the O'Neill School of Public and Environmental Affairs at Indiana University, Bloomington.
    design:
      columns: '1'

  - block: collection
    id: publications
    content:
      title: Publications
      text: ""
      count: 0
      filters:
        folders:
          - publication
        exclude_publication_type: article
      sort_by: Date
      sort_ascending: false
    design:
      view: citation

  - block: collection
    id: working-papers
    content:
      title: Working Papers
      text: ""
      count: 0
      filters:
        folders:
          - publication
        publication_type: article
      sort_by: Weight
      sort_ascending: true
    design:
      view: citation

  - block: collection
    id: teaching
    content:
      title: Teaching
      count: 0
      filters:
        folders:
          - teaching
      sort_by: Weight
      sort_ascending: true
    design:
      view: article-grid
      columns: 3

  - block: collection
    id: talks
    content:
      title: Recent Talks
      filters:
        folders:
          - event
    design:
      view: article-grid
      columns: 2

  - block: markdown
    id: news
    content:
      title: 'In the News'
      text: |
        - **2026:** "Liquidity and volatility in the municipal bond market" (with Felipe Lozano-Rojas) published in the [*International Review of Economics & Finance*](https://doi.org/10.1016/j.iref.2026.105212).
        - **2026:** "State Revolving Fund Collateralized Debt Obligations (SRF CDOs)" conditionally accepted at the *Journal of Public Budgeting, Accounting & Financial Management*.
        - **2025:** Joined the Evans School of Public Policy and Governance, University of Washington, as Assistant Professor.
        - **2025:** "The role of charitable food assistance during times of crisis" (with Denvil Duncan and Shellye Suttles) published in the [*Journal of the Agricultural and Applied Economics Association*](https://doi.org/10.1002/jaa2.70006).
        - **2024:** My paper [Federal Assistance and Municipal Borrowing](/publication/caresact/) received the [Michael Curro Award](https://abfm.org/2024-annual-award-recipients/) for best graduate student paper in public budgeting or finance from the Association for Budgeting and Financial Management, and was covered by [The Bond Buyer](https://www.bondbuyer.com/news/coronavirus-aid-lowered-borrowing-costs-credit-quality-study).
    design:
      columns: '1'
---

