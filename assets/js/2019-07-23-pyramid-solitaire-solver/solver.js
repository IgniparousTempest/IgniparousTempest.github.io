class Card {
    constructor(cardString) {
        this.rank = cardString[0];
        this.suit = cardString[1];
    }

    get isKing() {
        return this.rank === 'K';
    }

    get integerValue() {
        return "A23456789TJQK".indexOf(this.rank) + 1;
    }

    /**
     * Returns true if the other card makes a 13 complement with this card.
     * @param card Another card.
     * @returns {boolean} True if complement, false otherwise.
     */
    isComplement(card) {
        return (this.integerValue + card.integerValue) === 13;
    }

    get toString() {
        return this.rank + this.suit;
    }
}

class Pyramid {
    constructor(pyramidArray) {
        this.array = pyramidArray;
    }

    get isCleared() {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] !== 0)
                return false;
        }
        return true;
    }

    get freeCardIndices() {
        let freeIndices = [];
        for (let i = this.array.length - 1; i >= 0; i--) {
            if (this.array[i] === 0)
                continue;
            let row = Pyramid.triangularNumberRow(i);
            // This is the last row
            if (Pyramid.triangularNumber(row) === this.array.length)
                freeIndices.push(i);
            else if (row < 7 && this.array[i + row] === 0 && this.array[i + row + 1] === 0)
                freeIndices.push(i);
        }
        return freeIndices;
    }

    static triangularNumberRow(number) {
        let triangularNumbers = [1, 3, 6, 10, 15, 21, 28];
        for (let i = 0; i < triangularNumbers.length; i++) {
            if (number < triangularNumbers[i])
                return i + 1;
        }
        throw "Pyramid is too big";
    }

    static triangularNumber(n) {
        return (n * (n + 1)) / 2;
    }
}

class MoveString {
    static gameWon() {return "You have won.";}
    static gameLost(reason) {return "You have lost. " + reason;}
    static removeFromStock(card) {return "Remove " + card + " from the top of the stock.";}
    static removeFromPyramid(card) {return "Remove " + card + " from the pyramid.";}
    static match(cardA, cardB) {return "Match " + cardA + " with " + cardB + ".";}
    static matchStock(cardA, cardB) {return "Match top of stock (" + cardA + ") to previous card in stock(" + cardB + ").";}
    static flipStock() {return "Discard top card on stock.";}
    static resetStock() {return "Reset stock.";}
}

const GameStates = Object.freeze({"won": 1, "lost": 2, "inProgress": 3});

function solve(pyramidArray, stockArray, stockIndex, remainingStocks, moveArray) {
    let newMoveArray = JSON.parse(JSON.stringify(moveArray));
    let pyramid = new Pyramid(pyramidArray);

    // We cleared the pyramid
    if (pyramid.isCleared) {
        newMoveArray.push(MoveString.gameWon());
        return [GameStates.won, newMoveArray];
    }

    // We have overflowed the stock
    if (stockIndex >= stockArray.length) {
        if (remainingStocks === 0) {
            newMoveArray.push(MoveString.gameLost("Stock is emptied."));
            return [GameStates.lost, newMoveArray];
        }
        else {
            newMoveArray.push(MoveString.resetStock());
            return solve(pyramidArray, stockArray, 0, remainingStocks - 1, newMoveArray)
        }
    }

    const topStock = new Card(stockArray[stockIndex]);

    // The top card in the stock is a king
    if (topStock.isKing) {
        newMoveArray.push(MoveString.removeFromStock(stockArray[stockIndex]));
        let newStock = JSON.parse(JSON.stringify(stockArray));
        newStock.splice(stockIndex, 1);
        if (stockIndex > 0 && stockIndex >= newStock.length)
            stockIndex--;
        return solve(pyramidArray, newStock, stockIndex, remainingStocks, newMoveArray)
    }

    // The free cards are kings
    let freeCardsIndices = pyramid.freeCardIndices;
    for (let i = 0; i < freeCardsIndices.length; i++) {
        let cardA = new Card(pyramidArray[freeCardsIndices[i]]);
        if (cardA.isKing) {
            newMoveArray.push(MoveString.removeFromPyramid(cardA.toString));
            let newPyramidArray = JSON.parse(JSON.stringify(pyramidArray));
            newPyramidArray[freeCardsIndices[i]] = 0;
            return solve(newPyramidArray, stockArray, stockIndex, remainingStocks, newMoveArray)
        }
    }

    // match free card with another free card
    freeCardsIndices = pyramid.freeCardIndices;
    for (let i = 0; i < Math.ceil(freeCardsIndices.length / 2); i++) {
        for (let j = 0; j < freeCardsIndices.length; j++) {
            if (i === j)
                continue;
            let cardA = new Card(pyramidArray[freeCardsIndices[i]]);
            let cardB = new Card(pyramidArray[freeCardsIndices[j]]);
            if (cardA.isComplement(cardB)) {
                newMoveArray = JSON.parse(JSON.stringify(moveArray));
                newMoveArray.push(MoveString.match(cardA.toString, cardB.toString));

                let newPyramidArray = JSON.parse(JSON.stringify(pyramidArray));
                newPyramidArray[freeCardsIndices[i]] = 0;
                newPyramidArray[freeCardsIndices[j]] = 0;

                let result = solve(newPyramidArray, stockArray, stockIndex, remainingStocks, newMoveArray);
                if (result[0] === GameStates.won)
                    return result;
            }
        }
    }

    freeCardsIndices = pyramid.freeCardIndices;
    // match free cards with stock
    for (let i = 0; i < freeCardsIndices.length; i++) {
        let cardA = new Card(pyramidArray[freeCardsIndices[i]]);
        if (!cardA.isComplement(topStock))
            continue;
        let newStock = JSON.parse(JSON.stringify(stockArray));
        newStock.splice(stockIndex, 1);
        if (stockIndex > 0 && stockIndex >= newStock.length)
            stockIndex--;

        newMoveArray = JSON.parse(JSON.stringify(moveArray));
        newMoveArray.push(MoveString.match(topStock.toString, cardA.toString));

        let newPyramidArray = JSON.parse(JSON.stringify(pyramidArray));
        newPyramidArray[freeCardsIndices[i]] = 0;

        let result = solve(newPyramidArray, newStock, stockIndex, remainingStocks, newMoveArray);
        if (result[0] === GameStates.won)
            return result;
    }

    // Flip over a new card
    newMoveArray = JSON.parse(JSON.stringify(moveArray));
    newMoveArray.push(MoveString.flipStock());
    let result = solve(pyramidArray, stockArray, stockIndex + 1, remainingStocks, newMoveArray);
    if (result[0] === GameStates.won)
        return result;

    // match top stock card with previous one
    if (stockIndex > 0) {
        const previousStock = new Card(stockArray[stockIndex - 1]);
        if (topStock.isComplement(previousStock)) {
            let newStock = JSON.parse(JSON.stringify(stockArray));
            newStock.splice(stockIndex, 1);
            newStock.splice(stockIndex - 1, 1);

            newMoveArray = JSON.parse(JSON.stringify(moveArray));
            newMoveArray.push(MoveString.matchStock(topStock.toString, previousStock.toString));

            let result = solve(pyramidArray, newStock, stockIndex - 1, remainingStocks, newMoveArray);
            if (result[0] === GameStates.won)
                return result;
        }
    }

    // This node was useless
    return [GameStates.inProgress, moveArray];
}