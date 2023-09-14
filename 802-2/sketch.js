/*
802 - The case of Monte Carlo
Stage 3 - Counting Cards

CaseNum: 802-2

These sharks don’t mess about. One hand, winner takes all. What kind of chief would I be if I let you go in alone! 
I’ve counted the cards and I know what you need to win. Make sure you deal yourself the hand in hand_to_win from the deck and store it in the hand array.

- Write a function called setWinningHand and call it from setup.
- The function should take each card in hand_to_win and seacrh for a match in playingCards.
- Matching cards should be added to the hand array
- You'll need to use a nested for loop and break statement in the inner loop to stop searching once you've found a match.

- You also need to write a shuffleSeed() function. 
- This needs to return an array of 52 random integers between 5 and 99.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().


*/

var playingCards = [ { card_suit: 'Spades', value: 'A'} , { card_suit: 'Spades', value: '2'} , { card_suit: 'Spades', value: '3'} , { card_suit: 'Spades', value: '4'} , { card_suit: 'Spades', value: '5'} , { card_suit: 'Spades', value: '6'} , { card_suit: 'Spades', value: '7'} , { card_suit: 'Spades', value: '8'} , { card_suit: 'Spades', value: '9'} , { card_suit: 'Spades', value: '10'} , { card_suit: 'Spades', value: 'J'} , { card_suit: 'Spades', value: 'Q'} , { card_suit: 'Spades', value: 'K'} , { card_suit: 'Clubs', value: 'A'} , { card_suit: 'Clubs', value: '2'} , { card_suit: 'Clubs', value: '3'} , { card_suit: 'Clubs', value: '4'} , { card_suit: 'Clubs', value: '5'} , { card_suit: 'Clubs', value: '6'} , { card_suit: 'Clubs', value: '7'} , { card_suit: 'Clubs', value: '8'} , { card_suit: 'Clubs', value: '9'} , { card_suit: 'Clubs', value: '10'} , { card_suit: 'Clubs', value: 'J'} , { card_suit: 'Clubs', value: 'Q'} , { card_suit: 'Clubs', value: 'K'} , { card_suit: 'Hearts', value: 'A'} , { card_suit: 'Hearts', value: '2'} , { card_suit: 'Hearts', value: '3'} , { card_suit: 'Hearts', value: '4'} , { card_suit: 'Hearts', value: '5'} , { card_suit: 'Hearts', value: '6'} , { card_suit: 'Hearts', value: '7'} , { card_suit: 'Hearts', value: '8'} , { card_suit: 'Hearts', value: '9'} , { card_suit: 'Hearts', value: '10'} , { card_suit: 'Hearts', value: 'J'} , { card_suit: 'Hearts', value: 'Q'} , { card_suit: 'Hearts', value: 'K'} , { card_suit: 'Diamonds', value: 'A'} , { card_suit: 'Diamonds', value: '2'} , { card_suit: 'Diamonds', value: '3'} , { card_suit: 'Diamonds', value: '4'} , { card_suit: 'Diamonds', value: '5'} , { card_suit: 'Diamonds', value: '6'} , { card_suit: 'Diamonds', value: '7'} , { card_suit: 'Diamonds', value: '8'} , { card_suit: 'Diamonds', value: '9'} , { card_suit: 'Diamonds', value: '10'} , { card_suit: 'Diamonds', value: 'J'} , { card_suit: 'Diamonds', value: 'Q'} , { card_suit: 'Diamonds', value: 'K'}  ];
var deck_img;
var table_img;
var drawCounter = 0;

var hand_to_win = [ { suit: 'Diamonds', n: 'Q'} , { suit: 'Diamonds', n: 'J'} , { suit: 'Hearts', n: 'K'} , { suit: 'Spades', n: 'J'} , { suit: 'Clubs', n: 'Q'}  ];
var hand =[];

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your shuffleSeed() function here. Followed by a call to shuffleDeck with the return value of shuffleSeed() as an argument.
	var t = shuffleSeed()
	shuffleDeck(t);
	//call your setWinningHand function here
	setWinningHand();

}

//write your setWinningHand function here
function setWinningHand()
{
	for(var i = 0; i< hand_to_win.length; i++)
	{
		for(var j =0; j < playingCards.length; j++)
		{
			if(hand_to_win[i].suit == playingCards[j].card_suit && hand_to_win[i].n == playingCards[j].value)
			{
				hand.push(playingCards[j]);
				break;
			}
		}
	}
}

//write your shuffleSeed() function here.

function shuffleSeed()
{
	var g = [];
	for(var i =0; i< 52; i++)
	{
		var f = round(random(5,99));
		g.push(f);
	}
	return g;
}

/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed)
{
		//shuffle the deck by rotating the cards location with the values in
		//shuffleSeed. Repeat this a random number of times between 20 and 50
    var shuffleIterations = parseInt(random(20, 50));
    for(var i = 0; i < shuffleIterations; i++)
    {
	   for (var j = 0; j < playingCards.length; j++)
	   {
		  var tempCard = playingCards.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          playingCards.splice(newLoc, 0, tempCard[0]);
	   }
    }
}

function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 5)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if( i < hand.length)
		{
			drawCard(hand[i], 880 + i * 18, 750);
		}
	}


}


function drawCard(card, x, y)
{

	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

	for (var i = 0; i < suits.length; i++)
	{
		for (var j = 0; j < values.length; j++)
		{
			if (card.value == values[j] && card.card_suit == suits[i])
			{
				//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				//image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				//There is wrong order in orginal case shoud be changed
				image(deck_img, x, y, 100, 150, j * 200, i * 300, 200, 300);
				break;
			}
		}
	}
}
