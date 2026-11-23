---
title: Research
type: landing
cms_exclude: true

design:
  spacing: '4rem'

sections:
  - block: collection
    content:
      title: Publications
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
    content:
      title: Working Papers
      count: 0
      filters:
        folders:
          - publication
        publication_type: article
      sort_by: Weight
      sort_ascending: true
    design:
      view: citation
---
