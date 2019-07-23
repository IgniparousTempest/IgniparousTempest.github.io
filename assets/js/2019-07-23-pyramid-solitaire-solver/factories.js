function changeRankAndSuit(card, rank, suit) {
    const colour = (suit === 'H' || suit === 'D') ? 'red' : 'black';
    card.find('#cardRank')[0].text(rank);
    card.find('#cardRank')[0].fill(colour);
    card.find('#cardSuit')[0].text(suit);
    card.find('#cardSuit')[0].fill(colour);
}

function cardString(card) {
    const rank = card.find('#cardRank')[0].text();
    const suit = card.find('#cardSuit')[0].text();
    return rank + suit;
}

function card_factory(x, y, suit, rank) {
    let group = new Konva.Group({
        x: x,
        y: y,
        draggable: false
    });

    // add cursor styling
    group.on('mouseover', function() {
        document.body.style.cursor = 'pointer';
    });
    group.on('mouseout', function() {
        document.body.style.cursor = 'default';
    });

    let back = new Konva.Rect({
        id: 'cardBackground',
        x: 0,
        y: 0,
        width: Constants.card_width,
        height: Constants.card_height,
        fill: Constants.card_colour,
        stroke: 'black',
        strokeWidth: 1,
        cornerRadius: 10,
        shadowColor: 'black',
        shadowBlur: 4,
        shadowOffset: { x: 4, y: 4 },
        shadowOpacity: 0.5
    });

    // Rank
    let rankText = new Konva.Text({
        id: 'cardRank',
        x: 7,
        y: 7,
        text: rank === 'T' ? '10' : rank,
        fontSize: 20,
        fontFamily: 'Calibri',
        fill: (suit === 'H' || suit === 'D') ? 'red' : 'black'
    });

    // Suit
    let suitText = new Konva.Text({
        id: 'cardSuit',
        y: Constants.card_height / 2 - 20,
        width: Constants.card_width,
        align: 'center',
        text: suit,
        fontSize: 40,
        fontFamily: 'Calibri',
        fill: (suit === 'H' || suit === 'D') ? 'red' : 'black'
    });

    group.add(back);
    group.add(rankText);
    group.add(suitText);

    return group
}

function pyramid_factory(windowWidth) {
    let pyramid = [];

    const startX = windowWidth / 2 - Constants.card_width / 2;
    const startY = 20;
    const offsetY = Constants.card_height * 0.4;
    const gapX = 5;

    for (let y = 0; y < Constants.pyramid_height; y++) {
        let firstX = y % 2 === 0 ? startX : startX - Constants.card_width / 2 - gapX / 2;
        firstX -= Math.floor(y / 2) * Constants.card_width;
        for (let x = 0; x < y + 1; x++) {
            pyramid.push(card_factory(firstX + x * (Constants.card_width + gapX), startY + offsetY * y, '', ''));
        }
    }

    return pyramid;
}

function deck_factory(windowWidth) {
    let deck = [];

    const deckSize = (13 * 4) - pyramid.length;
    const y = pyramid[pyramid.length - 1].y() + Constants.card_height + 50;
    const offsetX = Math.min((windowWidth - 20 * 2 - Constants.card_width) / deckSize, Constants.card_width);
    const startX = 20;

    for (let i = 0; i < deckSize; i++) {
        deck.push(card_factory(startX + i * offsetX, y, '', ''));
    }

    return deck;
}