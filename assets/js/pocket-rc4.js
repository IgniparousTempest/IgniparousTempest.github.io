var value_for_letter = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26, ' ': 27};
var letter_for_value = {};
for (var key in value_for_letter) {
	letter_for_value[value_for_letter[key]] = key;
};

function Card(card) {
	return {
		full_card: card, 
		rank: card_rank(card), 
		suit: card_suit(card), 
		colour: card_colour(card), 
		value:card_value(card)
	}
}

function card_colour(card) {
	if ("HDR".indexOf(card_suit(card)) > -1)
		return "red";
	else
		return "black";
}

function card_suit(card) {
	return card.slice(-1);
}

function card_rank(card) {
	return card.slice(0, -1);
}

function card_value(card) {
	offset = ("DC".indexOf(card_suit(card)) > -1) ? 13 : 0;
	rank = card_rank(card);

	if (rank == 'A')
		value = 1;
	else if (rank == 'J')
		value = 11;
	else if (rank == 'Q')
		value = 12;
	else if (rank == 'K')
		value = 13;
	else if (rank == 'JO')
		value = 27;
	else
		value = parseInt(rank);

	return value + offset;
}

function deck_string_to_array(string_deck) {
	var deck_list = [];
	
	for (let card of string_deck.split(new RegExp(" |, |,", 'g')))
		deck_list.push(card.toUpperCase());
		
	return deck_list;
}

function create_deck(string_deck) {
	var deck_list = [];
	
	for (let card of deck_string_to_array(string_deck))
		deck_list.push(Card(card.toUpperCase()));
		
	return deck_list;
}

function card_index(deck, value, colour) {
	var card;
	for (var i = 0; i < deck.length; i++) {
		card = deck[i]
		if (card.value == value && card.colour == colour)
			return i;
		}
	return -1;
}

function interleave_key_deck(key_deck) {
	var red_cards = [];
	var black_cards = [];
	var interleaved_deck = [];

	for (let card of key_deck)
		if (card.colour == "red")
			red_cards.push(card);
		else
			black_cards.push(card);

	for (var i = 0; i < red_cards.length; i++)
		interleaved_deck.push(red_cards[i], black_cards[i]);

	return interleaved_deck;
}

function prepare_deck(deck_in, initialisation_vector) {
	var deck = $.extend([], deck_in);
	
	var black_index, temp, c;
	for (var i = 0; i < initialisation_vector.length; i++) {
		c = initialisation_vector[i].toLowerCase();
		black_index = card_index(deck, value_for_letter[c], "black");
		temp = deck[0];
		deck[0] = deck[black_index - 1];
		deck[black_index - 1] = temp;
		deck = deck.slice(0, black_index - 1) .concat(deck.slice(black_index + 1).concat(deck.slice(black_index - 1, black_index + 1)));
		deck = deck.slice(2).concat(deck.slice(0, 2));
	}
	return deck;
}

function mod(n, m) {
	return ((n % m) + m) % m;
}

function crypt(deck_in, in_text, is_encrypting){
	var textstream = ""
	var deck = $.extend([], deck_in);

	var c, j, k, black_j, temp;
	for (var i = 0; i < in_text.length; i++) {
		c = in_text[i].toLowerCase();
		
		j = deck[deck.length-2].value;

		j += deck[0].value;
		j = (j -1) % 27 + 1;

		black_j = card_index(deck, j, "black");

		k = deck[black_j - 1].value + deck[0].value;
		k = (k - 1) % 27 + 1;

		if (is_encrypting)
			k = value_for_letter[c] + k;
		else
			k = value_for_letter[c] - k;
		k = mod(k - 1, 27) + 1; //js doesn't mod negative numbers in a God fearing manner.
		textstream += letter_for_value[k]

		temp = deck[0];
		deck[0] = deck[black_j - 1];
		deck[black_j - 1] = temp;

		deck = deck.slice(2).concat(deck.slice(0, 2));
	};

	return textstream;
}

function encrypt(deck_in, plaintext) {
	return crypt(deck_in, plaintext, true);
}

function decrypt(deck_in, ciphertext) {
	return crypt(deck_in, ciphertext, false);
}

key_deck = "AD AC 2D 2C 3D 3C 4D 4C 5D 5C 6D 6C 7D 7C 8D 8C 9D 9C 10D 10C JD JC QD QC KD KC AH AS 2H 2S 3H 3S 4H 4S 5H 5S 6H 6S 7H 7S 8H 8S 9H 9S 10H 10S JH JS QH QS KH KS JOR JOB";
initialisation_vector = "MagicDoesRuleMugglesDoDrool";
plaintext = "The trick is to use two aces";

key_deck = create_deck(key_deck);
key_deck = interleave_key_deck(key_deck);
key_deck = prepare_deck(key_deck, initialisation_vector);
ciphertext = encrypt(key_deck, plaintext);
plaintext_output = decrypt(key_deck, ciphertext);
console.log("Original text:", plaintext);
console.log("Ciphertext:   ", ciphertext);
console.log("Plaintext:    ", plaintext_output);

function validate_text(text, name) {
	var result = text.match(/^[A-Za-z ]*$/);
	if (!result)
		alert(name + " should contain letters and spaces only.");
	return result;
}

function validate_deck(deck) {
	deck = deck_string_to_array(deck);
	var i,
	      len=deck.length,
	      obj={};
	      
	// Wrong number of cards
	if (len != 54) {
		var name = (len < 54) ? "few" : "many";
		alert(name + "The key deck has too " + name + " cards. Expected 54, got: " + len);
		return false;
	}
	
	// Incorrect cards
	var acceptable_cards = "AD AC 2D 2C 3D 3C 4D 4C 5D 5C 6D 6C 7D 7C 8D 8C 9D 9C 10D 10C JD JC QD QC KD KC AH AS 2H 2S 3H 3S 4H 4S 5H 5S 6H 6S 7H 7S 8H 8S 9H 9S 10H 10S JH JS QH QS KH KS JOR JOB".split(' ');
	
	for (let card of deck)
		if (acceptable_cards.indexOf(card) < 0) {
			alert("The key deck contains an unexpected card: " + card);
			return false;
		}

	// Duplicates
	for (i=0;i<len;i++) {
		if (obj[deck[i]] != 1)
			obj[deck[i]] = 1
		else {
			alert("The key deck has duplicates of the following card: " + deck[i]);
			return false;
		}
	}
	
	return true;
}
	
function encrypt_on_click() {
	var initialisation_vector = $('#initialisation_vector').val();
	var plaintext = $('#plaintext').val();
	var key_deck = $('#key_deck').val();
	
	//Validation
	if (!validate_deck(key_deck))
		return;
	if (!validate_text(initialisation_vector, "Initialisation Vector"))
		return;
	if (!validate_text(plaintext, "Plaintext"))
		return;
	
	key_deck = create_deck(key_deck);
	key_deck = interleave_key_deck(key_deck);
	key_deck = prepare_deck(key_deck, initialisation_vector);
	
	var ciphertext = encrypt(key_deck, plaintext);
	$('#ciphertext').val(ciphertext);
}
	
function decrypt_on_click() {
	var initialisation_vector = $('#initialisation_vector').val();
	var ciphertext = $('#ciphertext').val();
	var key_deck = $('#key_deck').val();
	
	//Validation
	if (!validate_deck(key_deck))
		return;
	if (!validate_text(initialisation_vector, "Initialisation Vector"))
		return;
	if (!validate_text(ciphertext, "Ciphertext"))
		return;
	
	key_deck = create_deck(key_deck);
	key_deck = interleave_key_deck(key_deck);
	key_deck = prepare_deck(key_deck, initialisation_vector);
	
	var plaintext = decrypt(key_deck, ciphertext);
	$('#plaintext').val(plaintext);
}

function load_example_on_click() {
	$('#key_deck').val("AD AC 2D 2C 3D 3C 4D 4C 5D 5C 6D 6C 7D 7C 8D 8C 9D 9C 10D 10C JD JC QD QC KD KC AH AS 2H 2S 3H 3S 4H 4S 5H 5S 6H 6S 7H 7S 8H 8S 9H 9S 10H 10S JH JS QH QS KH KS JOR JOB");
	$('#initialisation_vector').val("MagicDoesRuleMugglesDoDrool");
	$('#plaintext').val("The trick is to use two aces");
}