---
title: "BioRehab Group - Team"
layout: gridlay
excerpt: "Team @ BioRehab Group"
sitemap: false
permalink: /team_main/
has_children: true
---

## Team

{: style="text-align: center;"}
![Team review](/images/teampic/24_year_review.jpg){: style="width: 100%; max-width: 800px; height: auto; border-radius: 8px;"}

--- 

<div style="display:flex; flex-wrap: wrap; text-align: center; box-sizing: border-box;">
{% for member in site.data.members %}
   <div style="margin: 20px; text-align: center; width: 201px;">
  <a href="{{ site.url }}{{ site.baseurl }}/{{ member.link }}" style="text-decoration: none; color: inherit;">
        <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" 
             style="width: 150px; height: 200px; object-fit: cover; border: 1px solid #D0D0D0; padding: 11px; border-radius: 5px;">
        <br>
        <strong>{{ member.name }}</strong><br>
        <span>{{ member.position }}</span>
      </a>    
  </div> 
{% endfor %}
</div>

<style>
a:hover img {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, box-shadow 0.2s;
}
</style>

### Alumni
<div class="row">


<div class="col-sm-6 clearfix">
<h4>Master students</h4>
{% for member in site.data.alumni_master %}
{{ member.name }} 
<i>{%if member.info %}<br> {{member.info}} {%endif %}</i> 
{% if member.url_present %}<br> <i>URL: <a href="{{ member.url }}">{{ member.url_display }}</a></i> 
{% endif %}
{% endfor %}
</div>

<div class="col-sm-6 clearfix">
<h4>PhD students</h4>
{% for member in site.data.alumni_phd %}
{{ member.name }} <br> 
<i>{{member.info}} </i><br>
{% if member.url_present %} <i>URL: <a href="{{ member.url }}">{{ member.url_display }}</a></i> 
{% endif %}
{% endfor %}


</div>







