function processMessages(text) {
    const regex = /^(\d{4}\/\d{2}\/\d{2}), (\d{2}:\d{2}) - (([^\n]*?): )?(.+?(?=(\d{4}\/\d{2}\/\d{2}, \d{2}:\d{2} - )|(?!.)))/gusm;

    let messages = [];
    while (true) {
        const match = regex.exec(text);
        if (match === null)
            break;
        messages.push({date: match[1], time: match[2], name: match[4], message: match[5]});
    }

    return messages;
}

/// Counts the number of messages sent by each participant.
function messageFrequency(messages) {
    let frequency = {};
    for (let i = 0; i < messages.length; i++) {
        if (typeof messages[i].name !== "undefined") {
            if (messages[i].name in frequency)
                frequency[messages[i].name] += 1;
            else
                frequency[messages[i].name] = 1;
        }
    }
    return frequency;
}

// Gets the names of the two participants in the conversation.
function getCorrespondentsNames(frequency) {
    let names = Object.keys(frequency).map(function(key) {return key;});
    if (names.length === 2)
        return names;
    else if (names.length >= 2)
        throw "There were too many participants in the conversation log (expected 2, got "+names.length+")?";
    else
        throw "There were too few participants in the conversation log (expected 2, got "+names.length+")?";
}

// Constructs a dictionary with the names of the participants as keys, and 0 as the values.
function countDictionary(name1, name2) {
    let dict = {};
    dict[name1] = 0;
    dict[name2] = 0;
    return dict;
}

// Gets the number of messages sent by each participant.
function messageCount(messages, name1, name2) {
    let numMessages = countDictionary(name1, name2);

    for (let i = 0; i < messages.length; i++) {
        if (messages[i].name === name1 || messages[i].name === name2)
            numMessages[messages[i].name]++;
    }

    return numMessages;
}

// Counts the number of words sent by each participant.
function wordCount(messages, name1, name2) {
    let numWords = countDictionary(name1, name2);

    for (let i = 0; i < messages.length; i++) {
        if ((messages[i].name === name1 || messages[i].name === name2) && !isMedia(messages[i].message) && !isLocation(messages[i].message))
            numWords[messages[i].name] += messages[i].message.split(' ').length;
    }

    return numWords;
}

// Counts the number of words sent by each participant.
function longestMessage(messages, name1, name2) {
    let longestMessage = countDictionary(name1, name2);

    for (let i = 0; i < messages.length; i++) {
        if (messages[i].name === name1 || messages[i].name === name2)
            if (longestMessage[messages[i].name] < messages[i].message.split(' ').length)
                longestMessage[messages[i].name] = messages[i].message.split(' ').length;
    }

    return longestMessage;
}

// Counts the number of words sent by each participant.
function wordsPerMessage(numMessages, numWords, name1, name2) {
    let wpm = {};
    wpm[name1] = numWords[name1] / numMessages[name1];
    wpm[name2] = numWords[name2] / numMessages[name2];
    return wpm;
}

// Counts the longest message streak for each participant.
function messageStreak(messages, name1, name2) {
    let streak = countDictionary(name1, name2);
    let current = countDictionary(name1, name2);
    let previous = null;

    for (let i = 0; i < messages.length; i++) {
        if (messages[i].name === name1 || messages[i].name === name2) {
            if (previous === messages[i].name)
                current[messages[i].name] += 1;
            else {
                current[messages[i].name] = 1;
                if (previous !== null && current[previous] > streak[previous])
                    streak[previous] = current[previous];
                previous = messages[i].name;
            }
        }
    }

    return streak;
}

// The number of messages on each day of the week.
function messageDayOfWeek(messages, name1, name2) {
    let week = {};
    week[name1] = [0, 0, 0, 0, 0, 0, 0];
    week[name2] = [0, 0, 0, 0, 0, 0, 0];

    for (let i = 0; i < messages.length; i++) {
        if (messages[i].name === name1 || messages[i].name === name2)
            week[messages[i].name][new Date(Date.parse(messages[i].date)).getDay()] += 1;
    }

    let data = {};
    data[name1] = {monday: week[name1][1], tuesday: week[name1][2], wednesday: week[name1][3], thursday: week[name1][4], friday: week[name1][5], saturday: week[name1][6], sunday: week[name1][0]};
    data[name2] = {monday: week[name2][1], tuesday: week[name2][2], wednesday: week[name2][3], thursday: week[name2][4], friday: week[name2][5], saturday: week[name2][6], sunday: week[name2][0]};
    return data;
}

// The number of messages per 15 minute interval.
// Add up every 2 elements in the array to get 30 minute intervals, and so on.
function messageTime(messages, name1, name2) {
    let times = {};
    times[name1] = Array.from({length: 24 * 4}, (v, i) => 0);
    times[name2] = Array.from({length: 24 * 4}, (v, i) => 0);

    for (let i = 0; i < messages.length; i++) {
        if ((messages[i].name === name1 || messages[i].name === name2)) {
            let time = moment("1970-01-01T00:00:00Z");
            for (let j = 0; j < 24 * 4; j++) {
                time.add(15, 'minutes').calendar();
                if (moment('1970-01-01T'+messages[i].time+':00Z').isBefore(time)) {
                    times[messages[i].name][j] += 1;
                    break;
                }
            }
        }
    }

    return times;
}

// Counts the number of emojis sent by each participant.
function emojiCount(messages, name1, name2) {
    let numEmojis = countDictionary(name1, name2);
    let regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;

    for (let i = 0; i < messages.length; i++) {
        if ((messages[i].name === name1 || messages[i].name === name2))
            while (true) {
                const match = regex.exec(messages[i].message);
                if (match === null)
                    break;
                // Ignore the fitzpatrick modifiers.
                if (match[0] === '🏻' || match[0] === '🏼' || match[0] === '🏽' || match[0] === '🏾' || match[0] === '🏿')
                    continue;
                numEmojis[messages[i].name] += 1;
            }
    }

    return numEmojis;
}

// Calculates the number of media messages sent by each participant.
function mediaMessageCount(messages, name1, name2) {
    let numMedia = countDictionary(name1, name2);

    for (let i = 0; i < messages.length; i++) {
        if ((messages[i].name === name1 || messages[i].name === name2) && isMedia(messages[i].message))
            numMedia[messages[i].name] += 1;
    }

    return numMedia;
}

// Calculates the number of locations sent by each participant.
function locationMessageCount(messages, name1, name2) {
    let numLocation = countDictionary(name1, name2);

    for (let i = 0; i < messages.length; i++) {
        if ((messages[i].name === name1 || messages[i].name === name2) && isLocation(messages[i].message))
            numLocation[messages[i].name] += 1;
    }

    return numLocation;
}

function isMedia(message) {
    return message === "<Media omitted>\n";
}

function isLocation(message) {
    return message.includes("location: https://maps.google.com");
}