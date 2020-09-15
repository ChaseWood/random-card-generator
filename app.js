if (typeof $ == 'undefined') {
	console.log('oops! I still have to link my jQuery properly!');
} else {
	console.log('I did it! I linked jQuery and this js file properly!');
}

const cards = [
	'https://www.trustedtarot.com/img/cards/the-fool.png',
	'https://www.trustedtarot.com/img/cards/the-magician.png',
	'https://www.trustedtarot.com/img/cards/the-high-priestess.png',
	'https://www.trustedtarot.com/img/cards/the-empress.png',
	'https://www.trustedtarot.com/img/cards/the-emperor.png',
	'https://www.trustedtarot.com/img/cards/the-heirophant.png',
	'https://www.trustedtarot.com/img/cards/the-chariot.png',
	'https://www.trustedtarot.com/img/cards/strength.png',
	'https://www.trustedtarot.com/img/cards/the-hermit.png',
	'https://www.trustedtarot.com/img/cards/wheel-of-fortune.png',
	'https://www.trustedtarot.com/img/cards/justice.png',
	'https://www.trustedtarot.com/img/cards/the-hanged-man.png',
	'https://www.trustedtarot.com/img/cards/death.png',
	'https://www.trustedtarot.com/img/cards/temperance.png',
	'https://www.trustedtarot.com/img/cards/the-tower.png',
	'https://www.trustedtarot.com/img/cards/the-moon.png',
];

/// I tried to have everything done outside of the addCard function but it wouldn't work and Allyson helped me to understand that it needs to be inside but we couldn't really understand why. Could you explain why it wouldnt work outside of the function?

///random card generator
// const randomPic = (pics) => {
//     return pics[Math.floor(Math.random() * pics.length)];
// }

// let randomCard = Math.floor(Math.random() * cards.length)
// console.log(cards[randomCard]);

//added div for button

//added image
// let $image = $('<img>');
// $image.attr('src', cards[randomCard]);
// $('body').append($image);

const $div = $('<div>Add a Card</div>');
$('body').append($div);
$div.addClass('black');

//on click div adds card
const addCard = () => {
	let randomCard = Math.floor(Math.random() * cards.length);

	let $image = $('<img>');
	$image.attr('src', cards[randomCard]);

	$('body').append($image);
};

$div.on('click', addCard);
