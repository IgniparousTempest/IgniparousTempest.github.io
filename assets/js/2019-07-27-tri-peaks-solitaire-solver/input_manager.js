class InputManager {
    constructor(layer, pyramid, deck) {
        this.layer = layer;
        this.pyramid = pyramid;
        this.deck = deck;
        this.buffer = '';
        this._index = -1;
    }

    type(letter) {
        // Don't accept input if a card isn't selected.
        if (this._index === -1)
            return;

        // Rank
        if (this.buffer.length === 0 && "A23456789TJQK".includes(letter.toUpperCase())) {
            this.buffer = letter.toUpperCase();
            const card = this.atIndex(this._index);
            changeRankAndSuit(card, this.buffer[0], '');
            this.layer.draw();
        }
        else if (this.buffer.length === 1 && "HDCS".includes(letter.toUpperCase())) {
            this.buffer += letter.toUpperCase();
            console.log('Setting card', this._index, 'to', this.buffer);
            const card = this.atIndex(this._index);
            changeRankAndSuit(card, this.buffer[0], this.buffer[1]);
            this.currentIndex = this._index + 1;
            this.buffer = '';
            this.validateCards(true);
            this.layer.draw();
        }
    }

    stockArray() {
        let array = [];
        this.deck.forEach(x => array.push(cardString(x)));
        return array;
    }

    missingCards() {
        let expectedCards = [];
        const ranks = "A23456789TJQK";
        const suits = "HDCS";
        for (let s = 0; s < suits.length; s++)
            for (let r = 0; r < ranks.length; r++)
                expectedCards.push(ranks[r] + suits[s]);

        // Find missing cards
        for (let i = 0; i < this.numberOfCards; i++) {
            let rank = this.atIndex(i).find('#cardRank')[0].text();
            let suit = this.atIndex(i).find('#cardSuit')[0].text();
            const index = expectedCards.indexOf(rank + suit);
            if (index > -1) {
                expectedCards.splice(index, 1);
            }
        }
        return expectedCards;
    }

    pyramidCards() {
        let array = [];
        this.pyramid.forEach(x => array.push(cardString(x)));
        return array;
    }

    validateCards(ignoreEmptyCards=false) {
        let isValid = true;
        const stock = this.stockArray();
        const pyramid = this.pyramidCards();
        const cardStringsArray = [...pyramid, ...stock];
        let searchArray = cardStringsArray.removeByValue('');

        let badCards = searchArray.getDuplicates();
        if (!ignoreEmptyCards)
            badCards.push('');

        for (let i = 0; i < cardStringsArray.length; i++) {
            if (badCards.includes(cardStringsArray[i])) {
                this.atIndex(i).find('#cardBackground')[0].fill(Constants.card_error_colour);
                isValid = false;
            }
            else if (i === this._index)
                this.atIndex(i).find('#cardBackground')[0].fill(Constants.card_highlighted_colour);
            else
                this.atIndex(i).find('#cardBackground')[0].fill(Constants.card_colour);
        }

        return isValid;
    }

    atIndex(index) {
        if (index < this.pyramid.length)
            return this.pyramid[index];
        else
            return this.deck[index - this.pyramid.length];
    }

    get numberOfCards() {
        return this.pyramid.length + this.deck.length;
    }

    get selectedCard() {
        return this.atIndex(this._index);
    }

    set currentIndex(index) {
        // Reset previous card
        if (this._index !== -1) {
            this.buffer = '';
            const previousCard = this.atIndex(this._index);
            previousCard.find('#cardBackground')[0].fill(Constants.card_colour);
        }

        if (index >= 0 && index < 13 * 4) {
            this._index = index;
            const card = this.atIndex(this._index);
            card.find('#cardBackground')[0].fill(Constants.card_highlighted_colour);
        }
        else {
            this._index = -1;
        }
    }

    set indexPyramid(index) {
        this.currentIndex = index;
    }

    set indexDeck(index) {
        this.currentIndex = this.pyramid.length + index;
    }
}