---
title: "BioRehab Group - Research/SMOOTHNESS"
layout: textlay
excerpt: "Research @ BioRehab Group"
sitemap: false
permalink: /research/smoothness
---

## [Research]({{ site.url }}{{ site.baseurl }}/research/)/Movement Smoothness


#### **Motivation**
Movement smoothness is an important movement quality measure that is often used in motor control and neurorehabilitation applications to infer learning/recovery. The concept of a smooth movement is intuitive, but a quantitative measure of movement smoothness has been elusive. We proposed a novel method for quantifying smoothness in 2012 [1], prior to which several measures had been proposed but most were adhoc methods that lacked a rigorous foundation.

<!-- <div markdown="0" id="carousel" class="carousel slide" data-ride="carousel" data-interval="2500" data-pause="hover" >

    <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
        <li data-target="#carousel" data-slide-to="3"></li>
        <li data-target="#carousel" data-slide-to="4"></li>
        <li data-target="#carousel" data-slide-to="5"></li>
        <li data-target="#carousel" data-slide-to="6"></li>
    </ol>

    <div class="carousel-inner" markdown="0">
        <div class="item active">
            <img src="{{ site.url }}{{ site.baseurl }}/images/pluto/pluto-icon.png" alt="Slide 1" />
        </div>
        <div class="item">
            <img src="{{ site.url }}{{ site.baseurl }}/images/pluto/pluto-icon.png" alt="Slide 2" />
        </div>
        <div class="item">
            <img src="{{ site.url }}{{ site.baseurl }}/images/pluto/pluto-icon.png" alt="Slide 3" />
        </div>
        <div class="item">
            <img src="{{ site.url }}{{ site.baseurl }}/images/pluto/pluto-icon.png" alt="Slide 4" />
        </div>
        <div class="item">
            <img src="{{ site.url }}{{ site.baseurl }}/images/pluto/pluto-icon.png" alt="Slide 5" />
        </div>
        <div class="item">
            <img src="{{ site.url }}{{ site.baseurl }}/images/pluto/pluto-icon.png" alt="Slide 6" />
        </div>       
         <div class="item">
            <img src="{{ site.url }}{{ site.baseurl }}/images/pluto/pluto-icon.png" alt="Slide 7" />
        </div>
    </div>
  <a class="left carousel-control" href="#carousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>  -->

<br />

#### **SPARC - SPectral ARC length**
The SPARC takes a radically different approach to the smoothness quantification problem. The most popular approach prior to the SPARC was the jerk metric, where the smoothness of a movement was quantified using the normalized squared jerk of a movement. The SPARC, on the other hand, looks at the Fourier magnitude spectrum of a movement's speed profile to quantify movement smoothness. Changes in movement smoothness are reflected as changes in the complexity of the magnitude spectrum, which is quantified by calculating the length of the magnitude spectrum curve.

We recently presented work [2] on quantifying the smoothness of rhythmic movements and showed that smoothness is task-dependent and one cannot simply the smoothness of two different movements.

Our most recent work [3] has been the investigation of appropriate methods for quantifying movement smoothness using data from inertial measurement units (IMU). 

##### **References**
[1] Balasubramanian S*, Melendez-Calderon A*, Burdet E. <a href="https://ieeexplore.ieee.org/abstract/document/6104119/">A robust and sensitive metric for quantifying movement smoothness</a>. IIEEE Trans Biomed Eng. 2012 Aug;59(8):2126-36. ['*' shared first authorship].<br>
[2] Balasubramanian S, Melendez-Calderon A, Roby-Brami A, Burdet E. <a href="https://jneuroengrehab.biomedcentral.com/articles/10.1186/s12984-015-0090-9">On the analysis of movement smoothness. Journal of neuroengineering and rehabilitation</a>. 2015 Dec;12(1):112.<br>
[3] Melendez-Calderon, Alejandro, Camila Shirota, and Sivakumar Balasubramanian.  <a href="https://www.biorxiv.org/content/10.1101/2020.04.30.069930v1.abstract">Estimating Movement Smoothness from Inertial Measurement Units</a>. bioRxiv (2020).
</p>

#### **Team**
<sup>(1: Dept. of Bioengineering, CMC Vellore, 2: Biomedical Engineering Group, School of Information Technology and Electrical
Engineering, The University of Queensland, St. Lucia, QLD, Australia, 3: The Hopkins Centre, Menzies Health Institute Queensland, Griffith University,
Nathan, QLD, Australia, 4: Dept. of Bioengineering, Imperial College London, UK, 5: ISIR, UPMC, CNRS, Paris France, .)</sup>
  - Alejandro Melendez<sup>2</sup>, Camila Shirota<sup>3</sup>, Etienne Brudet<sup>3</sup>, Agnes Robi-Bramy<sup>5</sup>, Sivakumar Balasubramanian<sup>1</sup>

