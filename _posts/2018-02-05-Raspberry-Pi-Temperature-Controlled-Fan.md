---
layout: post
title: Raspberry Pi Temperature Controlled Fan
subtitle: Icy Berry.
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

The circuit uses an NPN transistor as a switch. The transistor allows the fan to draw a high current from the 5V pin, and lets us control it from another pin.

![Circuit Schematic](https://rawgithub.com/IgniparousTempest/rpi-fan-controller/master/.images/diagram.png "Circuit Schematic"){: .center-image width="80%" }

I also built a circuit board to fit on the pi:

![PCB](/images/rpifan_circuit.jpg "PCB"){: width="40%" } ![PCB installed](/images/rpifan_installed.jpg "PCB installed-2"){: width="40%" }

Once you have built this circuit, we need to install the software.

## Software

Open a terminal and run the following commands:

{% highlight bash %}
git clone https://github.com/IgniparousTempest/rpi-fan-controller
cd rpi-fan-controller
chmod u+x ./install.sh
./install.sh
cd ..
rm -rf rpi-fan-controller
{% endhighlight %}
    
This will install the rpifan tool and remove the installation files.

The tool will now run with the default settings, which means it will check the temperature every 10 minutes and turn on the fan if the CPU is hotter than 40 °C.

The tool will be run periodically but you can run it at anytime by typing `rpifan` into the console.

## Configuring

### Temperature Threshold and Trigger Pin

We can optionally configure the temperature threshold and the trigger pin of the rpifan program, to do that run this:

{% highlight bash %}
sudo nano /ur/share/rpifan/config.cfg
{% endhighlight %}
    
You should see the following lines:

{% highlight bash %}
gpio_pin = 1
temperature_threshold = 40.0
{% endhighlight %}
    
The GPIO pin is the GEN pin number, so GEN1 would be GPIO 18.

The temperature is in degrees Celsius, so adjust accordingly if [you live in a country that has a tendency to lose French scientists to pirates](https://www.npr.org/sections/thetwo-way/2017/12/28/574044232/how-pirates-of-the-caribbean-hijacked-americas-metric-system).

### Frequency

We can also change the frequency of which the tool is run by typing `crontab -e` into the terminal. You should see the following lines:

{% highlight bash %}
# RPI Fan controller
*/10 * * * * /usr/bin/rpifan
{% endhighlight %}
    
The `*/10` signifies the tool will be run every 10 minutes, this could be changed to `*/5` for example to run it every 5 minutes.