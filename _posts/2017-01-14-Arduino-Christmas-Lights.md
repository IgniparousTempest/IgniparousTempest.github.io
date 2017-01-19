---
layout: post
title: Morse Code Christmas Lights Powered by an Arduino
---

This is a rather simple project, that uses an arduino to flash and pulse lights, the pattern of flashes and pulses can be used to signal Morse code messages.

In the days leading up to Christmas, while I was sitting in one of the camping chairs that make up the sole furnishings of my living room, I decided I needed a tree. Luckily I spied a wooden tree through the hole in one of my neighbour's windows, I decided to borrow it. Getting into his house is quite easy, since he drove his car though his prefab wall one night when he came home drunk.

## Bill of Materials

1x Arduino ([Available at Sparkfun](https://www.sparkfun.com/products/11021 "Or from somewhere else"))<br>
20x Red LED ([Available at Sparkfun](https://www.sparkfun.com/products/9590 "Or from somewhere else"))<br>
1x 100Ω resistor ([Available at Sparkfun](https://www.sparkfun.com/products/13761 "Or from somewhere else"))<br>
1x NPN transistor ([Available at Sparkfun](https://www.sparkfun.com/products/521 "Or from somewhere else"))<br>
1x 1kΩ resistor ([Available at Sparkfun](https://www.sparkfun.com/products/13760 "Or from somewhere else"))

## Circuit

The ciruit uses a NPN transistor as a low side switch. The transistor allows the arduino to provide more current and voltage. The Vin pin of the arduino can provide up to 1A, as opposed to the 40mA of the I/O pins. The Vin pin provides the same voltage as the Arduino is powered by, in this case it is using a 12V power supply.

<img width="80%" style="display: block; margin-left: auto; margin-right: auto;"  title="Breadboard" src="https://rawgithub.com/IgniparousTempest/arduino-christmas-lights/master/christmas_lights_breadboard.svg"/>

The led chain is made up of a single LED colour, otherwise only the colour with the lowest voltage drop will be lit brightly. More chains can be added with a different colour each, but the resistor values will need to be recalculated very carefully, to avoid diode current hogging.

<img width="80%" style="display: block; margin-left: auto; margin-right: auto;"  title="Circuit Schematic" src="https://rawgithub.com/IgniparousTempest/arduino-christmas-lights/master/christmas_lights_schematic.svg"/>

## Code

Here is code use to control the lights, it is explained in the comments.

## Math

The following shows the process of calculating the values for the resistors used in the low side switch.

<img width="30%" style="display: block; margin-left: auto; margin-right: auto;"  title="NPN Low Side Switch Schematic" src="http://igniparoustempest.github.io/images/NPN_low_switch.svg"/>