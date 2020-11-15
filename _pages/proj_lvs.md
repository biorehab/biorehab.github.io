---
title: "BioRehab Group - Research/PLUTO"
layout: textlay
excerpt: "Research @ BioRehab Group"
sitemap: false
permalink: /research/lvs
---

## [Research]({{ site.url }}{{ site.baseurl }}/research/)/LVS


#### **Motivation**
The recent developments of computer vision have been tremendous. One of the most interesting developments in computer vision with several potential applications in sensorimotor neurorehabilitation are the opse tracking algorithms such as [OpenPose](https://github.com/CMU-Perceptual-Computing-Lab/openpose). It is highly likely that the coming years will see an increasing use of vision technologies for neurorehabilitation. The aim of this project is to develop a vision based upper-limb and tunk movement tracking system for observing a wide range of tasks and movements trained as part of physical and occupational therapy. The ultimate aim of this project to have this system trainable through demonstration of the various tasks by healthy subjects. These demonstrations are used to build a representation of the task, which is then used for evaluating new movement kinematic data collected for this task.

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
The current versio of the system consists of a single RGBD camera (Kinect V2), which collects RGB and depth data at 10Hz. Pose estimation is carried out on the RGB data to identify key points on the human body in the RGB image coordinates. These positions are then transformed to 3D positions measured with respect to the Kinect's camera space coordiantes. The current system has been developed to track the trunk and the upper-limbs which are well suited for tracking common table top tasks performed during  therapyu.

Our first step towards the development of this system is to evaluate the accuracy and reliability of the kinematics measurements obtained by applying the OpenPose algorithm on the Kinect RGBD data. This validation is being carried out using a set of complex tasks related to activities of daily living, involving interaction with various physical objects.

<br />

#### **Clinical evaluation**
In the pipeline.

<br />

#### **Team**
<sup>(1: Dept. of Physiology, CMC Vellore; 2: Dept. of PMR, CMC Vellore; 3: Dept. of Bioengineering, CMC Vellore.)</sup>
  - Timoth Dev<sup>1</sup>, Reethajanetsurekha<sup>2</sup>, Samuelkamalehskumar S<sup>2</sup>Henry Prakash<sup>2</sup>Sivakumar Balasubramanian<sup>3</sup>
