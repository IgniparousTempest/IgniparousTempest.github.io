function changeRankAndSuit(card, rank, suit) {
    const colour = (suit === 'H' || suit === 'D') ? 'red' : 'black';
    card.find('#cardRank')[0].text(rank);
    card.find('#cardRank')[0].fill(colour);
    card.find('#cardSuit')[0].text(suit);
    card.find('#cardSuit')[0].fill(colour);
    card.find('#cardSuit')[0].hide();

    // Update suit image
    const suitImage = card.find('#cardSuitImage')[0];
    if (suitImage) suitImage.destroy();
    if (suit !== '' && "HDCS".includes(suit)) {
        let src = '';
        if (suit === 'H')
            src = '/images/suit_heart.svg';
        else if (suit === 'D')
            src = '/images/suit_diamond.svg';
        else if (suit === 'C')
            src = '/images/suit_club.svg';
        else
            src = '/images/suit_spade.svg';
        Konva.Image.fromURL(src, function (image) {
            image.setAttrs({
                id: 'cardSuitImage',
                x: Constants.card_width / 2 - 25,
                y: Constants.card_height / 2 - 25 + 5,
                width: 50,
                height: 50
            });
            card.add(image);
            layer.batchDraw(); // TODO: This needs to be passed as a parameter.
        });
    }
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

    const offsetY = Constants.card_height * 0.4;
    const gapX = 5;
    const startX = windowWidth / 2 - (Constants.card_width * 11) / 2;
    const startY = 20;

    for (let y = 0; y < 4; y++) {
        const firstX = startX + (Constants.card_width / 2) * (3 - y);
        for (let x = 0; x < [3, 6, 9, 10][y]; x++) {
            let xOffset = x * (Constants.card_width + gapX);
            if (y === 0)
                xOffset += (Constants.card_width + gapX) * x * 2;
            else if (y === 1)
                xOffset += (Constants.card_width + gapX) * Math.floor(x / 2);
            pyramid.push(card_factory(firstX + xOffset, startY + offsetY * y, '', ''));
        }
    }

    return pyramid;
}

function deck_factory(windowWidth) {
    let deck = [];

    const deckSize =  24;
    const y = pyramid[pyramid.length - 1].y() + Constants.card_height + 50;
    const offsetX = Math.min((windowWidth - 20 * 2 - Constants.card_width) / deckSize, Constants.card_width);
    const startX = 20;

    for (let i = 0; i < deckSize; i++) {
        deck.push(card_factory(startX + i * offsetX, y, '', ''));
    }

    return deck;
}