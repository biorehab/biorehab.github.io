---
title: "BioRehab Group - Research/PLUTO"
layout: textlay
excerpt: "Research @ BioRehab Group"
sitemap: false
permalink: /research/arebo
---

## [Research]({{ site.url }}{{ site.baseurl }}/research/)/AREBO


#### **Motivation**
Current evidence indicates that individual joint training with robotic devices can be as effective as multi-joint training for the arm. This makes a case for developing simpler and more compact robots for training individual joints of the arm. Such robots have the highest potential for clinical translation. The was the motivation behind this project, where we explored an endeffector-based robot for training individual joints (shoulder and elbow) of the arm. 

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

#### **System architecture**
In its current form AREBO is a serial 6 _dof_ robot with 3 actuated and 3 non-actuated self-aligning _dofs_. The self-aligning joints of robot provide: (a) some freedom in allowing a patient to sit with respect to the robot, unlike most exoskeleton robots, and (b) safe interaction between the robot and the human limb minimizing unwanted forces and torques on the later. The three actuated _dofs_ allow the robot to apply forces on the human limb in any arbitrary direction for enforcing movements in upto two _dofs_. 

The work on the design and optmization of the kinematic structure of the robot can be found [here](https://www.biorxiv.org/content/10.1101/2020.07.09.195073v1). 

Because there are numerous positions and orientations a subject can sit with respect to AREBO, the robot must know the position of the human joint and the length of the human limb to impose the desired movements to the human joint. This information can be obtained through a simple online calibration procedure that allows the robot to keep track of the human joint's position. Refer to the [this](https://www.biorxiv.org/content/10.1101/2020.07.09.195073v1) for details.  

<br />

#### **Clinical evaluation**
In the pipeline.

<br />

#### **Team**
<sup>(1: Dept. of Bioengineering, CMC Vellore, 2: Dept. of Mechanical Engineering, IIT Madras.)</sup>
  - Samuel Elias<sup>1</sup>, Magesh Kumar<sup>1</sup>, Sivakumar Balasubramanian<sup>1</sup>
  - Prem Kumar<sup>2</sup>, Javed Shaikh Mohammed<sup>2</sup>, Sujatha Srinivasan<sup>2</sup> 
