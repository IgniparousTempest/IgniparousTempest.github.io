<script type="text/javascript" src="{{ site.baseurl }}/assets/js/2019-07-27-tri-peaks-solitaire-solver/constants.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/2019-07-27-tri-peaks-solitaire-solver/factories.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/2019-07-27-tri-peaks-solitaire-solver/helpers.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/2019-07-27-tri-peaks-solitaire-solver/input_manager.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/2019-07-27-tri-peaks-solitaire-solver/solver.js"></script>

<script>
    const width = $('#container').width();
    const height = window.innerHeight;

    const stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height
    });

    const container = stage.container();
    container.tabIndex = 1;
    container.focus();

    const layer = new Konva.Layer();

    // Create Pyramid
    let pyramid = pyramid_factory(width);
    pyramid.forEach(x => layer.add(x));

    // Create Deck
    let deck = deck_factory(width);
    deck.forEach(x => layer.add(x));

    // Input Manager
    let inputManager = new InputManager(layer, pyramid, deck);

    stage.on('click', function(e) {
        // Checks if the clicked object is a child of a card group
        function filterChildren(card) {
            return card.getChildren(function f(child) {
                return child === e.target;
            });
        }

        for (let i = 0; i < pyramid.length; i++)
            if (filterChildren(pyramid[i]).length > 0) {
                console.log('clicked on pyramid card', i);
                inputManager.indexPyramid = i;
                cardString(inputManager.selectedCard);
                layer.draw();
                break;
            }

        for (let i = 0; i < deck.length; i++)
            if (filterChildren(deck[i]).length > 0) {
                console.log('clicked on deck card', i);
                inputManager.indexDeck = i;
                layer.draw();
                break;
            }
    });

    function updateMissingCards() {
        const missingCards = inputManager.missingCards();
        if (missingCards.length === 0)
            $('#remainingCards').text("Missing Cards: None");
        else
            $('#remainingCards').text("Missing Cards: " + missingCards.join(', '));
    }

    container.addEventListener('keydown', function(e) {
        inputManager.type(e.key);

        // Calculate missing cards;
        updateMissingCards();
    });

    stage.add(layer);
</script>
<script>
    $(document).ready(function() {
        $("#btnSolve").click(function(){
            const isValid = inputManager.validateCards();
            layer.draw();
            if (isValid) {
                let solution = solve(inputManager.pyramidCards(), inputManager.stockArray(), 0, 2, []);
                console.log(solution);
                const movesList = $("#movesList");
                movesList.empty();

                let items = [];
                $.each(solution[1], function(i, item) {
                    items.push('<li>' + item + '</li>');
                });
                movesList.append(items.join(''));
            }
        });
        $("#btnImport").click(function(){
            const cardString = $('#txtEncoded').val().replace(/\s+/g, " ").trim();
            const cards = cardString === "" ? [] : cardString.split(" ");
            const length = Math.min(inputManager.numberOfCards, cards.length);

            for (let i = 0; i < inputManager.numberOfCards; i++) {
                const rank = i < length ? cards[i][0].toUpperCase() : '';
                const suit = i < length ? cards[i][1].toUpperCase() : '';
                if (i < length && "A23456789TJQK".includes(rank) && "HDCS".includes(suit))
                    changeRankAndSuit(inputManager.atIndex(i), rank, suit);
                else
                    changeRankAndSuit(inputManager.atIndex(i), '', '');
            }
            inputManager.validateCards(true);
            layer.draw();

            updateMissingCards();
        });
        $("#btnExport").click(function(){
            let array = [];
            for (let i = 0; i < inputManager.numberOfCards; i++) {
                array.push(cardString(inputManager.atIndex(i)));
            }
            $('#txtEncoded').val(array.join(" "));
        });
});
</script>