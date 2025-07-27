---
title: "BioRehab Group - Patents"
layout: gridlay
excerpt: "Patents @ BioRehab Group"
sitemap: false
permalink: /patents/
---

## Patents 
---

### Granted 
<font style="font-size: 4pt"><br></font>
<ul style="list-style-type:none;">
{% for pat in site.data.grantpat %}

<li>
 <b> {{ pat.title }} </b> <br/>
 Indian Patent No: {{pat.number}} 
 Granted on {{pat.date}} 
 <em>({{ pat.authors }})</em> <br/>  
</li> <br/>
{% endfor %}
</ul>

---

### Pending 
<font style="font-size: 4pt"><br></font>
<ul style="list-style-type:none;">
{% for pat in site.data.pendpat %}

<li>
 <b> {{ pat.title }} </b> <br/>
 Indian Provisional Application No: {{pat.number}} 
 <i> filed on {{pat.date}} </i> <br/>  
 <em>({{ pat.authors }})</em> <br/>  
</li> <br/>
{% endfor %}
</ul>