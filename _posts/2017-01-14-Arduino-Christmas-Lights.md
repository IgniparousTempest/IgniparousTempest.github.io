---
layout: post
title: Morse Code Christmas Lights Powered by an Arduino
subtitle: Christmas Lights for the Kidnapped Tree.
image: /images/title_LED.svg
og_image: /images/og_led.png
categories:
- electronics
- arduino
include:
- mathjax
- prism c
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

The led chain is made up of a single LED colour, otherwise only the colour with the lowest voltage drop will be lit brightly. More chains can be added with a different colour each and the resistor values will need to be calculated accordingly. Many beginner tutorials suggest arranging LEDs in parallel to overcome the voltage drop in series, but this can cause [diode current hogging](https://electronics.stackexchange.com/q/22291/134776). 

<img width="80%" style="display: block; margin-left: auto; margin-right: auto;"  title="Circuit Schematic" src="https://rawgithub.com/IgniparousTempest/arduino-christmas-lights/master/christmas_lights_schematic.svg"/>

## Code

Here is code use to control the lights, it is explained in the comments.

<pre  class="language-c line-numbers" data-src="https://raw.githubusercontent.com/IgniparousTempest/arduino-christmas-lights/master/christmas_lights.ino"></pre>

## Math

The following shows the process of calculating the values for the resistors used in the low side switch.

<img width="30%" style="display: block; margin-left: auto; margin-right: auto;"  title="NPN Low Side Switch Schematic" src="{{ site.baseurl }}/images/npn-low-switch.svg"/>

<div style="line-height: 150%;">
	We want:<br>
	\(I_{L}=40mA\), the current will be the same in all LEDs in series.<br>
	<br>

	We Know:<br>
	\(V_{in}=12V\)<br>
	\(V_{CE}=0.2V\), transistor voltage drop when the transistor is saturated.<br>
	\(V_{L}=1.8V\), LED voltage drop.<br>
	\(I_{B}\ge\frac{I_{C}}{10}\), percent of current at base to cause saturation.<br>
	\(V_{pin 9}=5V\), Voltage from Arduino I/0 pin.<br>
	\(V_{BE}=0.7V\), Voltage drop over PN junction of transistor.<br>
	<br>

	To find \(R_{B}\):<br>
	<div class="flex-container">
		\(I_{B}=\frac{I_{C}}{10}\)\(=\frac{40mA}{10}=4mA\)
	</div>
	<div class="flex-container">
		\(R_{B}=\frac{V_{R_{B}}}{I_{B}}\)\(=\frac{V_{pin 9}-V_{BE}}{I_{B}}=\frac{5-0.7}{4mA}\)\(=1075\Omega\approx1k\Omega\)
	</div>
	<br>

	To find \(n\), number of resistors in series:<br>
	<div class="flex-container">
		\(n=\lfloor\frac{V_{in}-V_{CE}}{V_{L}}\rfloor\)\(=\lfloor\frac{12-0.2}{1.8}\rfloor=\lfloor6.\dot{5}\rfloor=6\)
	</div>
	<br>

	To find \(R_{C}\):<br>
	<div class="flex-container">
		\(R_{C}=\frac{V_{in}-V_{CE}-V_{L}\times n}{I_{R_{C}}}\)\(=\frac{12-0.2-1.8\times6}{40mA}=\frac{1}{0.04}\)\(=25\Omega\approx27\Omega\)
	</div>
	<br>
</div>
