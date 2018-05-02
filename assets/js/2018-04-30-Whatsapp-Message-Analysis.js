let weekChart = new CanvasJS.Chart("weekVis", {
    animationEnabled: true,
    theme: "light2",
    title:{
        text: "Message Distribution Over Days of the Week"
    },
    axisY: {
        title: "Messages"
    },
    toolTip: {
        shared: true
    },
    data: []
});
weekChart.render();

let hourChart = new CanvasJS.Chart("hourVis", {
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
    data: []
});
hourChart.render();

let messagesChart = new CanvasJS.Chart("messagesVis", {
    animationEnabled: true,
    theme: "light2",
    title:{
        text: "Messages Sent by Each Member"
    },
    axisY: {
        title: "Messages"
    },
    data: []
});
messagesChart.render();

var emojiChart1 = new CanvasJS.Chart("emojiVis1", {
    animationEnabled: true,
    title: {
        text: "Emoji Distribution for Person1"
    },
    data: [{
        type: "pie",
        yValueFormatString: "##0.0\"%\"",
        indexLabel: "{label} {y}",    indexLabelFontSize: 26,
        dataPoints: []
    }]
});
emojiChart1.render();

var emojiChart2 = new CanvasJS.Chart("emojiVis2", {
    animationEnabled: true,
    title: {
        text: "Emoji Distribution for Person2"
    },
    data: [{
        type: "pie",
        yValueFormatString: "##0.0\"%\"",
        indexLabel: "{label} {y}",
        indexLabelFontSize: 26,
        dataPoints: []
    }]
});
emojiChart2.render();

// Opens the chat log
function readMessageFile(e) {
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

function processMessagesFile(text) {
    let messages = processMessages(text);
    let frequency = messageFrequency(messages);
    let names = getCorrespondentsNames(frequency, true);
    let weekMessages = messageDayOfWeek(messages, names);
    let timeMessages = messageTime(messages, names);

    // Conversation with individual
    if (names.length === 2) {
        let numMessages = messageCount(messages, names);
        let numWords = wordCount(messages, names);
        let longestMsg = longestMessage(messages, names);
        let wpm = wordsPerMessage(numMessages, numWords, names);
        let longestStreak = messageStreak(messages, names);
        let numMedia = mediaMessageCount(messages, names);
        let numLocations = locationMessageCount(messages, names);
        let emojis = emojiCount(messages, names);
        let numEmoji = emojiTotal(emojis, names);
        let avgHappiness = emojiAverageHappiness(emojis, names);
        let colour = skinColour(messages, names);

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
        $('#happiness_1').html((avgHappiness[names[0]] * 100).toFixed(0) + '%');
        $('#happiness_2').html((avgHappiness[names[1]] * 100).toFixed(0) + '%');
        $('#skin_1').html(colour[names[0]].colour);
        $('#skin_2').html(colour[names[1]].colour);

        $( "#individualStats" ).show();
        $( "#messagesVis" ).hide();
        $( "#emojiVis1" ).show();
        $( "#emojiVis2" ).show();
	
        emojiChartUpdate(names, emojis, numEmoji);
    }
    // Conversation with group
    else {
        $( "#individualStats" ).hide();
        $( "#messagesVis" ).show();
        $( "#emojiVis1" ).hide();
        $( "#emojiVis2" ).hide();

        messagesChartUpdate(frequency);
    }

    weekChartUpdate(names, weekMessages);
    hourChartUpdate(names, timeMessages);
    updateDateRange(messages);
}

function weekChartUpdate(names, data) {
    weekChart.options.data = [];
    for (let i = 0; i < names.length; i++) {
        weekChart.options.data.push({
            type: "column",
            showInLegend: true,
            name: names[i],
            dataPoints: []
        });
        weekChart.options.data[i].dataPoints.push({ label: "Monday", y: data[names[i]].monday });
        weekChart.options.data[i].dataPoints.push({ label: "Tuesday", y: data[names[i]].tuesday });
        weekChart.options.data[i].dataPoints.push({ label: "Wednesday", y: data[names[i]].wednesday });
        weekChart.options.data[i].dataPoints.push({ label: "Thursday", y: data[names[i]].thursday });
        weekChart.options.data[i].dataPoints.push({ label: "Friday", y: data[names[i]].friday });
        weekChart.options.data[i].dataPoints.push({ label: "Saturday", y: data[names[i]].saturday });
        weekChart.options.data[i].dataPoints.push({ label: "Sunday", y: data[names[i]].sunday });
    }
    weekChart.render();
}

function hourChartUpdate(names, data) {
    hourChart.options.data = [];
    for (let i = 0; i < names.length; i++) {
        hourChart.options.data.push({
            type: "spline",
            showInLegend: true,
            name: names[i],
            dataPoints: []
        });
        for (let j = 0; j < 24; j++) {
            hourChart.options.data[i].dataPoints.push({
                label: j+":00",
                y: data[names[i]][j*4] + data[names[i]][j*4+1] + data[names[i]][j*4+2] + data[names[i]][j*4+3]
            });
        }
    }
    hourChart.render();
}

function messagesChartUpdate(frequency) {
    let keys = Object.keys(frequency);
    messagesChart.options.data = [{
        type: "column",
        dataPoints: []
    }];
    for (let i = 0; i < keys.length; i++)
        messagesChart.options.data[0].dataPoints.push({ label: keys[i], y: frequency[keys[i]] });
    messagesChart.render();
}

function emojiChartUpdate(names, emoji, numEmoji) {
    emojiChart1.options.data = [{
	type: "pie",
	yValueFormatString: "##0.0\"%\"",
	indexLabel: "{label} {y}",
        indexLabelFontSize: 26,
	dataPoints: []
    }];
    emojiChart2.options.data = [{
	type: "pie",
	yValueFormatString: "##0.0\"%\"",
	indexLabel: "{label} {y}",
        indexLabelFontSize: 26,
	dataPoints: []
    }];
    
    emojiChart1.options.title.text = "Emoji Distribution for " + names[0];
    emojiChart2.options.title.text = "Emoji Distribution for " + names[1];
    
    for (var e in emoji[names[0]]) {
        console.log([e, emoji[names[0]][e]]);
        emojiChart1.options.data[0].dataPoints.push({ label: e, y: emoji[names[0]][e] / numEmoji[names[0]] * 100});
    }
    for (var e in emoji[names[1]])
        emojiChart2.options.data[0].dataPoints.push({ label: e, y: emoji[names[1]][e]  / numEmoji[names[1]] * 100});
    emojiChart1.render();
    emojiChart2.render();
}

function updateDateRange(messages) {
    let i = 0;
    while (true) {
        if (typeof messages[i].name !== "undefined") {
            $('#message-date-range').text("For the range, " + messages[i].date + " to " + messages[messages.length - 1].date + ":");
            break;
        }
        if (i === messages.length - 1) {
            $('#message-date-range').text("For an unknown range:");
            break;
        }
        i++;
    }
}

// Initialise widgets
weekChartUpdate(['Person1', 'Person2'], {
    Person1: {monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0, saturday: 0, sunday: 0},
    Person2: {monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0, saturday: 0, sunday: 0}
});
hourChartUpdate(['Person1', 'Person2'], {
    Person1: new Array(24*4).fill(0),
    Person2: new Array(24*4).fill(0)
});
messagesChartUpdate({Person1: 0, Person2: 0});

// Bind event handlers
$( "#file-input" ).on( "change", readMessageFile );
