---
layout: page
title: Develop
permalink: /develop/
topnav: true
---

This page contains a range of resources to help you create a new mod or maintain an existing mod.

### Getting started

* Use the online [template mod generator](./template/).

* An up-to date template mod can be found on [github](https://github.com/FabricMC/fabric-example-mod).

* Install the [command line tools](./cli/), if you wish to.

### Latest Versions

<noscript style="color:red">You need Javascript to show the latest Versions</noscript>
<div class="fabric-component" data-component="Versions"></div>

{% assign cacheBust = site.time | date:'?v=%s' %}
<script type="text/javascript" src="{{ "/scripts/main.js" | relative_url | append: cacheBust }}"></script>
<link href="{{ "/scripts/style.css" | relative_url | append: cacheBust }}" rel="stylesheet">
