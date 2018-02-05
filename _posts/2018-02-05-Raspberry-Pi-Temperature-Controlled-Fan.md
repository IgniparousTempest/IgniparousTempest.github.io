---
layout: post
title: Morse Code Christmas Lights Powered by an Arduino
subtitle: Christmas Lights for the Kidnapped Tree.
image: /images/title_rpi_fan.jpg
og_image: /images/og_rpi_fan.jpg
categories:
- electronics
- raspberrypi
---

So my Raspberry Pi has a fan that runs constantly and it annoys me, time to fix that. I am going to show you how to make a fan that only turns on when the raspberry pi is on and the CPU is above a certain temperature threshold. We'll be using [rpi-fan-controller](https://github.com/IgniparousTempest/rpi-fan-controller) for this task.

## Bill of Materials

1x Raspberry Pi ([Available at Sparkfun](https://www.sparkfun.com/products/13825 "Or from somewhere else"))<br>
1x 1kΩ resistor ([Available at Sparkfun](https://www.sparkfun.com/products/13760 "Or from somewhere else"))<br>
1x NPN transistor ([Available at Sparkfun](https://www.sparkfun.com/products/521 "Or from somewhere else"))

## Circuit

The ciruit uses a transistor as a switch, this is an NPN. The transistor allows the fan to draw a high current from the 5V pin, and lets us control it from another pin.

<img width="80%" style="display: block; margin-left: auto; margin-right: auto;"  title="Circuit Schematic" src="https://rawgithub.com/IgniparousTempest/rpi-fan-controller/master/.images/diagram.png"/>

I built a circuit board to fit on the pi:

<img width="40%" style="display: block; margin-left: auto; margin-right: auto;"  title="Circuit" src="/images/rpifan_circuit.jpg"/>
<img width="40%" style="display: block; margin-left: auto; margin-right: auto;"  title="Circuit" src="/images/rpifan_installed.jpg"/>

## Configuring

We can optionally configure the temperature threshold and the trigger pin of the rpifan program, to do that run this:

    sudo nano /ur/share/rpifan/config.cfg
    
The temperature is in degrees Celsius, so adjust accordingly if [you live in a country that has a tendency to lose French scientists to pirates](https://www.npr.org/sections/thetwo-way/2017/12/28/574044232/how-pirates-of-the-caribbean-hijacked-americas-metric-system).