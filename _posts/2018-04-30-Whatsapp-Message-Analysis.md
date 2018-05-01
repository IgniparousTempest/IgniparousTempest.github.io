---
layout: post
title: Whatsapp Message Analysis
subtitle: Data is beautiful.
image: /images/title_whatsapp.jpg
og_image: /images/og_whatsapp.jpg
categories:
- software
- tools
include:
- canvasjs
- jquery
- jquery-ui
- moment-js
---

This tool processes your conversation log from WhatsApp to give you some interesting insights, see the [bottom](#how-to-use-this-tool) of the page for help. It is all preocessed locally in JavaScript, so your messages are perfectly safe :) That said, JavaScript is a bit slow, so it may take a while. You may examine the source code [here]({{ site.baseurl }}/assets/js/whatsapp-processor.js), be kind it is poorly optimised.

<script type="text/javascript" src="{{ site.baseurl }}/assets/js/whatsapp-processor.js"></script>

<script>
  $( function() {
    $( "#tabs" ).tabs();
  } );
</script>

<div id="tabs">
  <ul>
    <li><a href="#tabs-1">Individual</a></li>
    <li><a href="#tabs-2">Group</a></li>
  </ul>
  <div id="tabs-1">
    <p>Uses this for insights into a conversation with an indicidual.</p>

	<input type="file" id="individual-file-input" />

	<table>
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
	</table>

	<div id="weekVis" style="width: 100%; height: 300px;"></div>

	<div id="hourVis" style="width: 100%; height: 300px;"></div>
  </div>
  <div id="tabs-2">
    <p>Uses this for insights into a conversation with a group.</p>
    
    <input type="file" id="group-file-input" />
    
    <div id="groupMessagesVis" style="width: 100%; height: 300px;"></div>
  </div>
</div>

## How to Use This Tool

Open up WhatsApp, press the breadcrumbs button in the action bar, select more, then email conversation. Email the chat log to yourself, then download the *.txt file and open it with this tool.

<script type="text/javascript">
var weekChart = new CanvasJS.Chart("weekVis", {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "Message Distribution Over Days of the Week"
	},
	axisY: {
		title: "Messages"
	},
	data: [{        
		type: "column", 
		showInLegend: true,
		name: "Person1",
		dataPoints: [
			{ y: 0, label: "Monday" },
			{ y: 0,  label: "Tuesday" },
			{ y: 0,  label: "Wednesday" },
			{ y: 0,  label: "Thurday" },
			{ y: 0,  label: "Friday" },
			{ y: 0, label: "Saturday" },
			{ y: 0,  label: "Sunday" }
		]
	},
	{        
		type: "column", 
		showInLegend: true,
		name: "Person2",
		dataPoints: [
			{ y: 0, label: "Monday" },
			{ y: 0,  label: "Tuesday" },
			{ y: 0,  label: "Wednesday" },
			{ y: 0,  label: "Thurday" },
			{ y: 0,  label: "Friday" },
			{ y: 0, label: "Saturday" },
			{ y: 0,  label: "Sunday" }
		]
	}]
});
weekChart.render();

var hourChart = new CanvasJS.Chart("hourVis", {
	theme:"light2",
	animationEnabled: true,
	title:{
		text: "Message Distribution Over Hours of the Day"
	},
	axisY :{
		includeZero: false,
		title: "Number of Messages"
	},
	toolTip: {
		shared: "true"
	},
	legend:{
		cursor:"pointer"
	},
	data: [{
		type: "spline",
		showInLegend: true,
		name: "Person1",
		dataPoints: [
			{ label: "0:00", y: 0 },
			{ label: "1:00", y: 0 },
			{ label: "2:00", y: 0 },
			{ label: "3:00", y: 0 },
			{ label: "4:00", y: 0 },
			{ label: "5:00", y: 0 },
			{ label: "6:00", y: 0 },
			{ label: "7:00", y: 0 },
			{ label: "8:00", y: 0 },
			{ label: "9:00", y: 0 },
			{ label: "10:00", y: 0 },
			{ label: "11:00", y: 0 },
			{ label: "12:00", y: 0 },
			{ label: "13:00", y: 0 },
			{ label: "14:00", y: 0 },
			{ label: "15:00", y: 0 },
			{ label: "16:00", y: 0 },
			{ label: "17:00", y: 0 },
			{ label: "18:00", y: 0 },
			{ label: "19:00", y: 0 },
			{ label: "20:00", y: 0 },
			{ label: "21:00", y: 0 },
			{ label: "22:00", y: 0 },
			{ label: "23:00", y: 0 }
		]
	},
	{
		type: "spline", 
		showInLegend: true,
		name: "Person2",
		dataPoints: [
			{ label: "0:00", y: 0 },
			{ label: "1:00", y: 0 },
			{ label: "2:00", y: 0 },
			{ label: "3:00", y: 0 },
			{ label: "4:00", y: 0 },
			{ label: "5:00", y: 0 },
			{ label: "6:00", y: 0 },
			{ label: "7:00", y: 0 },
			{ label: "8:00", y: 0 },
			{ label: "9:00", y: 0 },
			{ label: "10:00", y: 0 },
			{ label: "11:00", y: 0 },
			{ label: "12:00", y: 0 },
			{ label: "13:00", y: 0 },
			{ label: "14:00", y: 0 },
			{ label: "15:00", y: 0 },
			{ label: "16:00", y: 0 },
			{ label: "17:00", y: 0 },
			{ label: "18:00", y: 0 },
			{ label: "19:00", y: 0 },
			{ label: "20:00", y: 0 },
			{ label: "21:00", y: 0 },
			{ label: "22:00", y: 0 },
			{ label: "23:00", y: 0 }
		]
	}]
});
hourChart.render();
var groupMessagesChart = new CanvasJS.Chart("groupMessagesVis", {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "Messages Sent by Each Member"
	},
	axisY: {
		title: "Messages"
	},
	data: [{        
		type: "column", 
		dataPoints: []
	}]
});
groupMessagesChart.render();

// Opens the individual chat log
function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    processMessagesFile(contents);
  };
  reader.readAsText(file);
}

// Opens the group chat log
function readGroupFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    processGroupMessagesFile(contents);
  };
  reader.readAsText(file);
}

function processMessagesFile(text) {
	let messages = processMessages(text);
	let frequency = messageFrequency(messages);
	let names = getCorrespondentsNames(frequency);
	let numMessages = messageCount(messages, names);
	let numWords = wordCount(messages, names);
	let longestMsg = longestMessage(messages, names);
	let wpm = wordsPerMessage(numMessages, numWords, names);
	let longestStreak = messageStreak(messages, names);
	let numMedia = mediaMessageCount(messages, names);
	let numLocations = locationMessageCount(messages, names);
	let numEmoji = emojiCount(messages, names);
	let weekMessages = messageDayOfWeek(messages, names);
	let timeMessages = messageTime(messages, names);

	$('#name1').html(names[0]);
	$('#name2').html(names[1]);
	$('#messages_1').html(numMessages[names[0]]);
	$('#messages_2').html(numMessages[names[1]]);
	$('#words_1').html(numWords[names[0]]);
	$('#words_2').html(numWords[names[1]]);
	$('#longest_1').html(longestMsg[names[0]]);
	$('#longest_2').html(longestMsg[names[1]]);
	$('#average_1').html(+wpm[names[0]].toFixed(2));
	$('#average_2').html(+wpm[names[1]].toFixed(2));
	$('#streak_1').html(longestStreak[names[0]]);
	$('#streak_2').html(longestStreak[names[1]]);
	$('#media_1').html(numMedia[names[0]]);
	$('#media_2').html(numMedia[names[1]]);
	$('#location_1').html(numLocations[names[0]]);
	$('#location_2').html(numLocations[names[1]]);
	$('#emoji_1').html(numEmoji[names[0]]);
	$('#emoji_2').html(numEmoji[names[1]]);
	
	weekChartUpdate(names, weekMessages);
	hourChartUpdate(names, timeMessages);
}

function weekChartUpdate(names, data) {
	for (let i=0; i<2; i++) {
		weekChart.options.data[i].name = names[i];
		weekChart.options.data[i].dataPoints[0].y = data[names[i]].monday;
		weekChart.options.data[i].dataPoints[1].y = data[names[i]].tuesday;
		weekChart.options.data[i].dataPoints[2].y = data[names[i]].wednesday;
		weekChart.options.data[i].dataPoints[3].y = data[names[i]].thursday;
		weekChart.options.data[i].dataPoints[4].y = data[names[i]].friday;
		weekChart.options.data[i].dataPoints[5].y = data[names[i]].saturday;
		weekChart.options.data[i].dataPoints[6].y = data[names[i]].sunday;
	}
	weekChart.render();
}

function hourChartUpdate(names, data) {
	for (let i=0; i<2; i++) {
		hourChart.options.data[i].name = names[i];
		for (let j=0; j<24; j++) {
			hourChart.options.data[i].dataPoints[j].y = data[names[i]][j*4] + data[names[i]][j*4+1] + data[names[i]][j*4+2] + data[names[i]][j*4+3];
		}
	}
	hourChart.render();
}

function processGroupMessagesFile(text) {
	let messages = processMessages(text);
	let frequency = messageFrequency(messages, true);
	
	let keys = Object.keys(frequency);
	groupMessagesChart.options.data[0].dataPoints = [];
	for (let i=0; i<keys.length; i++)
		groupMessagesChart.options.data[0].dataPoints.push({ label: keys[i], y: frequency[keys[i]] });
	groupMessagesChart.render();
}

document.getElementById('individual-file-input').addEventListener('change', readSingleFile, false);
document.getElementById('group-file-input').addEventListener('change', readGroupFile, false);
</script>