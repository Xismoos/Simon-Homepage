---
layout: page
title: Projects
permalink: /projects/
description: Research and engineering projects in aerial robotics.
nav: true
nav_order: 1
---

{% assign sorted_projects = site.projects | sort: "importance" %}
<div class="projects"><div class="row row-cols-1 row-cols-md-2">
{% for project in sorted_projects %}
  {% include projects.liquid %}
{% endfor %}
</div></div>
