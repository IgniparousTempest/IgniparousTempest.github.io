---
layout: post
title: Adruino Function Generator
subtitle: Thunderstruck
image: /images/title_lightning.svg
og_image: /images/og_lightning.png
categories:
- electronics
- arduino
include:
- mathjax
---

Capable of producing sine, square, triangular, and sawtooth waves in continuous and pulse modes.

A function generator is a piece of equipment that is capable of generating different types of waveforms at varying frequencies.

### The Final Product

### Waveforms Produced

<img width="100%" title="Bridge rectifier" src="{{ page.baseurl }}/images/waveforms.svg"/>

### Ensure Accuracy

The problem is that there is a single core, trying to operate buttons and other input, while trying to produce a time dependent output, will result in an incorrect wave. The solution is to use a [timer interrupt](http://playground.arduino.cc/Code/Timer1)
