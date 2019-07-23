---
layout: post
title: Whatsapp Message Analysis
subtitle: Data is beautiful.
image: /images/title_whatsapp.jpg
og_image: /images/og_whatsapp.jpg
comments: true
categories:
- software
- tools
include:
- canvasjs
- jquery
---

This tool processes your conversation log from WhatsApp to give you some interesting insights, see the [bottom](#how-to-use-this-tool) of the page for help. It is all processed locally in JavaScript, so your messages are perfectly safe :) That said, JavaScript is a bit slow, so it may take a while. You may examine the source code [here]({{ site.baseurl }}/assets/js/whatsapp-processor.js){:target="_blank"}, be kind it is poorly optimised.

This supports a conversation log with an individual or a group.

<input type="file" id="file-input" />

<h4 id="message-date-range"></h4>

<table id="individualStats">
  <tr>
    <th></th>
    <th id="name1" style="padding-right: 10px; padding-left:  10px;"></th>
    <th id="name2"></th>
  </tr>
  <tr>
    <td><b>Messages Sent:</b></td>
    <td id="messages_1" align="center"></td>
    <td id="messages_2" align="center"></td>
  </tr>
  <tr>
    <td><b>Total Words:</b></td>
    <td id="words_1" align="center"></td>
    <td id="words_2" align="center"></td>
  </tr>
  <tr>
    <td><b>Longest Message:</b></td>
    <td id="longest_1" align="center"></td>
    <td id="longest_2" align="center"></td>
  </tr>
  <tr>
    <td><b>Average Message Length:</b></td>
    <td id="average_1" align="center"></td>
    <td id="average_2" align="center"></td>
  </tr>
  <tr>
    <td><b>Longest Message Streak:</b></td>
    <td id="streak_1" align="center"></td>
    <td id="streak_2" align="center"></td>
  </tr>
  <tr>
    <td><b>Media Messages Sent:</b></td>
    <td id="media_1" align="center"></td>
    <td id="media_2" align="center"></td>
  </tr>
  <tr>
    <td><b>Location Messages Sent:</b></td>
    <td id="location_1" align="center"></td>
    <td id="location_2" align="center"></td>
  </tr>
  <tr>
    <td><b>Emoji Sent:</b></td>
    <td id="emoji_1" align="center"></td>
    <td id="emoji_2" align="center"></td>
  </tr>
  <tr>
    <td><b>Happy Emojis:</b></td>
    <td id="happiness_1" align="center"></td>
    <td id="happiness_2" align="center"></td>
  </tr>
  <tr>
    <td><b>Assumed Skin Colour:</b></td>
    <td id="skin_1" align="center"></td>
    <td id="skin_2" align="center"></td>
  </tr>
</table>

<div id="messagesVis" style="width: 100%; height: 300px;"></div>

<div id="weekVis" style="width: 100%; height: 300px;"></div>

<div id="hourVis" style="width: 100%; height: 300px;"></div>

<div style="width: 100%; display: table;">
    <div style="display: table-row">
        <div id="emojiVis1" style="width: 50%; height: 300px; display: table-cell;"></div>
	<div id="emojiVis2" style="width: 50%; height: 300px; display: table-cell;"></div>
    </div>
</div>

<div id="emojiGroupVis" style="width: 100%; height: 300px;"></div>

## How to Use This Tool

Open up WhatsApp, press the breadcrumbs button in the action bar, select "More", "Email chat", and then "Without Media". Email the chat log to yourself, then download the *.txt file and open it with this tool.

<script type="text/javascript" src="{{ site.baseurl }}/assets/js/whatsapp-processor.js"></script>

<script type="text/javascript" src="{{ site.baseurl }}/assets/js/2018-04-30-Whatsapp-Message-Analysis.js"></script>
