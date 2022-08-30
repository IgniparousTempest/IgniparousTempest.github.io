---
layout: post
title: Wolfenstein 3D ray cast renderer
subtitle: A bit of gaming history
image: /images/title_raycaster.jpg
og_image: /images/og_raycaster.png
comments: true
categories:
- software
include:
- jquery
---

A ray casting renderer inspired by Wolfenstein 3D.

Listening to John Carmack on the Lex Friedman podcast inspired me to attempt to write my own renderer. I have wanted to write one for many years, and these games were a big part of my childhood. It is written in Typescript and is fully interactive, take a look below:

### Interactive demo

This was designed to run on a computer, not a cellphone/tablet.

{% include_relative _fragments/2022-08-30-raycast-renderer/raycaster-demo.md %}

### How it works

This game level is rendered without any 3D maths. This is accomplished by the following:

1. for every pixel in the width of the player's screen:
   1. cast a ray from the player's position, at an angle relative to the player's field view (90° in this case), along the 2D map.
   2. if the ray hits a block on the 2d map:
      1. draw a horizontally centred vertical line on the screen at the x screen coordinate.
      2. the line's height is determined by the distance from the player.

This produces the following:

![Solid](/images/2022-08-30-raycast-renderer/demo_solid.jpg "Solid"){: .center-image width="80%" }

Colouring the vertical line based on this distance (further away is darker), gives us this:

![Shaded](/images/2022-08-30-raycast-renderer/demo_shaded.jpg "Shaded"){: .center-image width="80%" }

Finally, we can texture the walls by using the collision point on the 2D map to read a column of pixels from an image and scale them up or down. The way I implemented this in JavaScript is really slow, so that could be optimised at a future point.

![Textured](/images/2022-08-30-raycast-renderer/demo_textured.jpg "Textured"){: .center-image width="80%" }

The source code for this can be found on my [github repo](https://github.com/IgniparousTempest/typescript-ray-casting-renderer-wolfenstein-3d).
