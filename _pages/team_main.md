---
title: "BioRehab Group - Team"
layout: gridlay
excerpt: "Team @ BioRehab Group"
sitemap: false
permalink: /team_main/
has_children: true
---

## Team
<div style="width: 100%; height: 400px; ">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/group_pic.jpg" 
       style="width: 100%; height: 400px; display: block;">
</div>
<br>
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







