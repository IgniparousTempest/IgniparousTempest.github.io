let weekChart = new CanvasJS.Chart("weekVis", {
    animationEnabled: true,
    theme: "light2",
    title:{
        text: "Message Distribution Over Days of the Week"
    },
    axisY: {
        title: "Messages"
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

// Opens the chat log
function readMessageFile(e, processor) {
    var file = e.target.files[0];
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
        processor(contents);
    };
    reader.readAsText(file);
}
function readIndividualMessageFile(e) {
    readMessageFile(e, processIndividualMessagesFile);
}
function readGroupMessageFile(e) {
    readMessageFile(e, processGroupMessagesFile);
}

function processIndividualMessagesFile(text) {
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
    updateDateRange(messages[0].date, messages[messages.length - 1].date);
}

function processGroupMessagesFile(text) {
    let messages = processMessages(text);
    let frequency = messageFrequency(messages, true);
    let names = getCorrespondentsNames(frequency, true);
    let weekMessages = messageDayOfWeek(messages, names);
    let timeMessages = messageTime(messages, names);

    weekChartUpdate(names, weekMessages);
    hourChartUpdate(names, timeMessages);
    messagesChartUpdate(frequency);
    updateDateRange(messages[0].date, messages[messages.length - 1].date);
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

function updateDateRange(from, to) {
    $('#message-date-range').text("For the range, "+from+" to "+to+":");
}

function updateLogType(saveData = true) {
    let fileInput = $( "#file-input" );
    if($('input[name=radio-log-type]:checked').attr('id') === "radio-1") {
        fileInput.on( "change", readIndividualMessageFile );
        fileInput.off( "change", readGroupMessageFile );
        $( "#individualStats" ).show();
        $( "#messagesVis" ).hide();
        $( '#tooltip' ).text('Use this for insights into a conversation with an individual.');
        if (saveData) {
            dataStore.group.weekData = weekChart.options.data;
            dataStore.group.hourData = hourChart.options.data;
            dataStore.group.rangeText = $('#message-date-range').text();
            weekChart.options.data = dataStore.individual.weekData;
            hourChart.options.data = dataStore.individual.hourData;
            $('#message-date-range').text(dataStore.individual.rangeText);
        }
    }
    else {
        fileInput.on( "change", readGroupMessageFile );
        fileInput.off( "change", readIndividualMessageFile );
        $( "#individualStats" ).hide();
        $( "#messagesVis" ).show();
        $( '#tooltip' ).text('Use this for insights into a conversation with a group.');
        if (saveData) {
            dataStore.individual.weekData = weekChart.options.data;
            dataStore.individual.hourData = hourChart.options.data;
            dataStore.individual.rangeText = $('#message-date-range').text();
            weekChart.options.data = dataStore.group.weekData;
            hourChart.options.data = dataStore.group.hourData;
            $('#message-date-range').text(dataStore.group.rangeText);
        }
    }
    weekChart.render();
    hourChart.render();
}

// Data backup
let dataStore = {
    individual: {
        weekData: [],
        hourData: [],
        rangeText: ""
    },
    group: {
        weekData: [],
        hourData: [],
        rangeText: ""
    }
};

// Initialise widgets
$( "input[name='radio-log-type']" ).checkboxradio();
$( "#log-type-group" ).controlgroup();

weekChartUpdate(['Person1', 'Person2'], {
    Person1: {monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0, saturday: 0, sunday: 0},
    Person2: {monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0, saturday: 0, sunday: 0}
});
hourChartUpdate(['Person1', 'Person2'], {
    Person1: new Array(24*4).fill(0),
    Person2: new Array(24*4).fill(0)
});
dataStore.group.weekData = dataStore.individual.weekData;
dataStore.group.hourData = dataStore.individual.hourData;
messagesChartUpdate({Person1: 0, Person2: 0});
updateLogType(false);

// Bind event handlers
$( "#file-input" ).on( "change", readIndividualMessageFile );
$( "input[name='radio-log-type']" ).on( "change", updateLogType );