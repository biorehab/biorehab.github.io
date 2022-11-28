---
title: "BioRehab Group - Publications"
layout: gridlay
excerpt: "Publications @ BioRehab Group"
sitemap: false
permalink: /publications/
---


## Publications

{% for publi in site.data.publist %}

 <b> {{ publi.title }} </b> <br />
  <em>{{ publi.authors }} </em><br /><a href="{{ publi.link.url }}">{{ publi.link.display }}</a> 
  

{% endfor %}