---
layout: post
title: Raspberry Pi Mini Marquee
subtitle: A marquee for ants.
image: /images/title_rpi_mini_marquee.jpg
og_image: /images/og_rpi_mini_marquee.jpg
categories:
- electronics
- raspberrypi
- hidden
---

My Raspberry Pi is feeling too standard, so a really cool mod that could be done for under $5 is adding a mini marquee. The marquee can be configured to display what game you are running or what system you are playing on. We'll be using [rpi-mini-marquee](https://github.com/IgniparousTempest/rpi-mini-marquee) for this task.

<iframe class="center-image" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/M7lc1UVf-VE" frameborder="0"></iframe>

## Bill of Materials

1x 128x32 OLED Screen ([Available at Banggood](https://www.banggood.com/0_91-Inch-128x32-IIC-I2C-Blue-OLED-LCD-Display-DIY-Oled-Module-SSD1306-Driver-IC-DC-3_3V-5V-p-1140506.html?rmmds=myorder "Or from somewhere else"))

## Circuit

The circuit is super simple, connect the four pins of the screen to the Pi as follows:

![Circuit Schematic](/images/rpi-mini-marquee-circuit.png "Circuit Schematic"){: .center-image width="80%" }

## Software

Open a terminal and run the following commands:

{% highlight bash %}
git clone https://github.com/IgniparousTempest/rpi-mini-marquee
cd rpi-mini-marquee
chmod +x install.sh
./install.sh
{% endhighlight %}
    
This will install the `rpi-mini-marquee` tool and the necessary scripts to change the marquee when a game starts, a game ends, the system starts up, and the shuts down.

The installation files can now be removed by running these commands in the same window:

{% highlight bash %}
cd ..
rm -rf rpi-mini-marquee
{% endhighlight %}

The tool will be run automatically, but you can also access it by typing `rpi-mini-marquee` of the command line.

You are now done.

## Configuring

By default the screen will display the system when the game stars, and switch off when the Pi goes off. These can be altered. 

### Keep screen on when Pi is off

We can make the screen display something, e.g. retopie logo, when the Pi is off:

{% highlight bash %}
sudo nano /etc/init.d/rpimm.sh
{% endhighlight %}
    
You should see the following lines:

{% highlight bash %}
stop () {
    /usr/bin/rpi-mini-marquee clear
    return
}
{% endhighlight %}

To make it display the retropie logo when we switch off the pi, change it to:

{% highlight bash %}
stop () {
    /usr/bin/rpi-mini-marquee retropie
    return
}
{% endhighlight %}

Once you are done editing, run the following to reload the service:

{% highlight bash %}
restart service
{% endhighlight %}

### Display game logo instead of system

We can make the screen display the game logo, instead of the system logo, when a game is launched. This would require you to create your own game marquees and put them in `\usr\share\rpi-mini-marquee\marquees\black_white`.

{% highlight bash %}
sudo nano /opt/retropie/configs/all/runcommand-onstart.sh
{% endhighlight %}

Change the line `/usr/bin/rpi-mini-marquee -f $1` to:

{% highlight bash %}
/usr/bin/rpi-mini-marquee -f $(basename $3)
{% endhighlight %}

Name your game marquees accordingly.