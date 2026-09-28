---
layout: about
title: About
permalink: /
subtitle: PhD researcher · UAV robotics · Visual-Inertial Odometry

profile:
  align: right
  image: portrait.jpg
  image_circular: false
  
selected_papers: false
social: true

announcements:
  enabled: false
latest_posts:
  enabled: false
---

## About Me

Hi! I'm **Šimon Prokop**, a PhD researcher at **Brno University of Technology**, currently working in the areas of **autonomous robotics, UAVs, computer vision, and Visual-Inertial Odometry**.

My research focuses mainly on reliable state estimation and autonomous navigation for small aerial robots operating in **GNSS-denied environments**.

I am currently interested in combining classical geometric methods such as **Visual-Inertial Odometry / SLAM** with **adaptive and continual-learning approaches**.

<br>

## 🔬 Research Interests

- Visual-Inertial Odometry
- Visual Odometry
- Autonomous UAV Navigation
- Computer Vision
- State Estimation
- ROS / ROS 2
- Embedded Robotics

<br>

## 🚀 Current Research
---
### Adaptive Visual-Inertial Odometry for UAVs

My current research investigates **robust Visual-Inertial Odometry for small multirotor UAVs** operating indoors and in GNSS-denied environments.

The goal is to develop and evaluate a real-time VIO pipeline capable of handling:

- fast UAV motion,
- rapid rotations,
- low-texture environments,
- motion blur,
- changing illumination,
- dynamic objects,
- limited onboard computational resources.

The system is primarily built around **OpenVINS**, ROS 2, synchronized camera + IMU measurements, and onboard embedded computing.

**Technologies:**  
`OpenVINS` `ROS 2` `C++` `Python` `OpenCV` `Eigen` `Jetson`

[GitHub](#) · [Project Page](#) · [Results](#)

---

### 🌿 UAV Tracking of Dynamic Objects

Another research direction explores autonomous UAV tracking of **moving and deformable objects**, such as tree branches affected by wind.

The project combines:

- VIO-based drone state estimation,
- visual object tracking,
- relative target pose estimation,
- adaptive control,
- continual learning.

The objective is to enable the drone to continuously adapt its motion while following a dynamically moving target.

**Technologies:**  
`OpenVINS` `Computer Vision` `Continual Learning` `UAV Control`

[Project Page](#) · [GitHub](#)

---

### 📊 VIO Evaluation & Benchmarking Toolkit

I am also developing tools for evaluating Visual-Inertial Odometry algorithms using datasets such as **EuRoC MAV**.

The evaluation pipeline includes:

- Absolute Trajectory Error (ATE),
- Relative Pose Error (RPE),
- trajectory alignment,
- tracking success rate,
- runtime measurements,
- visualization,
- automatic experiment logging.

The goal is to create a simple and reproducible framework for comparing multiple VIO configurations and algorithms.

**Technologies:**  
`Python` `ROS 2` `OpenVINS` `EuRoC` `NumPy` `OpenCV`

[GitHub](#)

<br>

## 📰 News
---

**2026-09**  
Visiting research stay at the **University of Bristol**.

**2026-07**  
Started research on adaptive UAV tracking using Visual-Inertial Odometry and continual learning.

**2026-06**  
Started development of a UAV VIO dataset and evaluation pipeline.

**2026-06**  
Development of real-time Visual-Inertial Odometry experiments for embedded UAV platforms.


<br>

## 🛠 Selected Projects
---

### ROS 2 Camera + IMU Dataset Recorder

A ROS 2 based recording pipeline designed for synchronized camera and IMU data collection.

Target platforms include:

- Raspberry Pi 5,
- NVIDIA Jetson,
- global-shutter cameras,
- MAVLink / flight-controller IMUs.

Recorded datasets can be used directly for VIO evaluation and algorithm development.

[View Project](#)

---

### Real-Time Stereo Visual Odometry

Experimental stereo Visual Odometry pipeline based on:

1. stereo rectification,
2. feature detection,
3. feature tracking,
4. stereo triangulation,
5. PnP motion estimation,
6. trajectory evaluation.

[View Project](#)

<br>

## 📚 Publications
---
_Work in progress._

<!-- Example:

**Title of Publication**  
Šimon Prokop, Author Two, Author Three  
*Conference / Journal, 2026*  

[Paper](#) · [Code](#) · [Dataset](#)

-->

<br>

## 🎓 Education & Research
---
### Brno University of Technology

**PhD Researcher**

Research areas:

- robotics,
- autonomous systems,
- computer vision,
- aerial robotics,
- Visual-Inertial Odometry.

---

### University of Bristol

**Visiting PhD Researcher — 2026**

Research collaboration focused on autonomous UAV navigation, Visual-Inertial Odometry and adaptive robotic systems.

<br>

## 💻 Technical Skills
---
**Programming**

`C++` `Python` `Bash` `MATLAB`

**Robotics**

`ROS` `ROS 2` `MAVROS` `ArduPilot`

**Computer Vision**

`OpenCV` `OpenVINS` `ORB-SLAM` `VINS`

**Embedded**

`NVIDIA Jetson` `Raspberry Pi` `Flight Controllers`

**Tools**

`Git` `Docker` `CMake` `Linux`

<br>

## 📈 Research Goals
---
My long-term research goal is to develop autonomous robotic systems that can operate reliably in complex environments without depending on external positioning infrastructure.

I am particularly interested in combining:

> **geometric robotics + state estimation**

<br>

## 📬 Contact
---
Feel free to contact me regarding research collaboration, robotics projects, Visual-Inertial Odometry or UAV research.

**Email:** 221488@vut.cz  
**GitHub:** [Github](https://github.com/Xismoos)  
**LinkedIn:** [LinkedIn](https://www.linkedin.com/in/simon-prokop/)  

<br>

---

_Last updated: September 2026_

See my [projects]({{ '/projects/' | relative_url }}) or get in touch by email.
