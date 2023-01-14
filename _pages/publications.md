---
title: "BioRehab Group - Publications"
layout: gridlay
excerpt: "Publications @ BioRehab Group"
sitemap: false
permalink: /publications/
---


## Publications
<font style="font-size: 4pt"><br></font>
<ul style="list-style-type:none;">
{% for publi in site.data.publist %}

<li>
 <b> {{ publi.title }} </b> <br />
  <em>{{ publi.authors }}</em> <br/> <a href="{{ publi.link.url }}">{{ publi.link.display }}</a> 

  <br>
  
  {% if publi.number_tags == 1 %}
  <a href="{{ publi.tag.url1}}" class="btn btn-info btn-xs">{{ publi.tag.display1 }}</a> 
  {% endif %}

  {% if publi.number_tags == 2 %}
  <a href="{{ publi.tag.url1 }}" class="btn btn-tag btn-xs">{{ publi.tag.display1 }}</a> &emsp; 
  <a href="{{ publi.tag.url2 }}" class="btn btn-tag btn-xs">{{ publi.tag.display2 }}</a> 
  {% endif %}

  {% if publi.number_tags == 3 %}
  <a href="{{ publi.tag.url1 }}" class="btn btn-tag btn-xs">{{ publi.tag.display1 }}</a> &emsp; 
  <a href="{{ publi.tag.url2 }}" class="btn btn-tag btn-xs">{{ publi.tag.display2 }}</a> &emsp; 
  <a href="{{ publi.tag.url3 }}" class="btn btn-tag btn-xs">{{ publi.tag.display3 }}</a> 
  {% endif %}

{% if publi.number_tags == 4 %}
  <a href="{{ publi.tag.url1 }}" class="btn btn-tag btn-xs">{{ publi.tag.display1 }}</a> &emsp; 
  <a href="{{ publi.tag.url2 }}" class="btn btn-tag btn-xs">{{ publi.tag.display2 }}</a> &emsp; 
  <a href="{{ publi.tag.url3 }}" class="btn btn-tag btn-xs">{{ publi.tag.display3 }}</a> &emsp; 
  <a href="{{ publi.tag.url4 }}" class="btn btn-tag btn-xs">{{ publi.tag.display4 }}</a>
  {% endif %}

  {% if publi.number_tags == 5 %}
  <a href="{{ publi.tag.url1 }}" class="btn btn-tag btn-xs">{{ publi.tag.display1 }}</a> &emsp; 
  <a href="{{ publi.tag.url2 }}" class="btn btn-tag btn-xs">{{ publi.tag.display2 }}</a> &emsp;
  <a href="{{ publi.tag.url3 }}" class="btn btn-tag btn-xs">{{ publi.tag.display3 }}</a> &emsp; 
  <a href="{{ publi.tag.url4 }}" class="btn btn-tag btn-xs">{{ publi.tag.display4 }}</a> &emsp; 
  <a href="{{ publi.tag.url5 }}" class="btn btn-tag btn-xs">{{ publi.tag.display5 }}</a> 
  {% endif %}   

</li>

<font style="font-size: 4pt"><br></font>

{% endfor %}

</ul>