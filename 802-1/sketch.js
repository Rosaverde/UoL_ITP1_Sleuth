/*
802 - The case of Monte Carlo
Stage 2 - King of Cards

CaseNum: 802-1

You aren’t going to look like much of a Poker player unless you can do a good shuffle. 
We’ll need to be able to do this with one hand tied behind our back if we are going to pose as pros at the big game.

- Write a function called shuffleSeed.
- Declare an empty array in the function.
- Using a for loop, fill the array with 52 random integers between 10 and 68.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- At the end of the function, return the array 
- Call shuffleSeed in setup.
- Call Shuffle deck using the return value from shuffleSeed as the argument.

*/

var deck = [ { card_suit: 'Spades', v: 'A'} , { card_suit: 'Spades', v: '2'} , { card_suit: 'Spades', v: '3'} , { card_suit: 'Spades', v: '4'} , { card_suit: 'Spades', v: '5'} , { card_suit: 'Spades', v: '6'} , { card_suit: 'Spades', v: '7'} , { card_suit: 'Spades', v: '8'} , { card_suit: 'Spades', v: '9'} , { card_suit: 'Spades', v: '10'} , { card_suit: 'Spades', v: 'J'} , { card_suit: 'Spades', v: 'Q'} , { card_suit: 'Spades', v: 'K'} , { card_suit: 'Clubs', v: 'A'} , { card_suit: 'Clubs', v: '2'} , { card_suit: 'Clubs', v: '3'} , { card_suit: 'Clubs', v: '4'} , { card_suit: 'Clubs', v: '5'} , { card_suit: 'Clubs', v: '6'} , { card_suit: 'Clubs', v: '7'} , { card_suit: 'Clubs', v: '8'} , { card_suit: 'Clubs', v: '9'} , { card_suit: 'Clubs', v: '10'} , { card_suit: 'Clubs', v: 'J'} , { card_suit: 'Clubs', v: 'Q'} , { card_suit: 'Clubs', v: 'K'} , { card_suit: 'Hearts', v: 'A'} , { card_suit: 'Hearts', v: '2'} , { card_suit: 'Hearts', v: '3'} , { card_suit: 'Hearts', v: '4'} , { card_suit: 'Hearts', v: '5'} , { card_suit: 'Hearts', v: '6'} , { card_suit: 'Hearts', v: '7'} , { card_suit: 'Hearts', v: '8'} , { card_suit: 'Hearts', v: '9'} , { card_suit: 'Hearts', v: '10'} , { card_suit: 'Hearts', v: 'J'} , { card_suit: 'Hearts', v: 'Q'} , { card_suit: 'Hearts', v: 'K'} , { card_suit: 'Diamonds', v: 'A'} , { card_suit: 'Diamonds', v: '2'} , { card_suit: 'Diamonds', v: '3'} , { card_suit: 'Diamonds', v: '4'} , { card_suit: 'Diamonds', v: '5'} , { card_suit: 'Diamonds', v: '6'} , { card_suit: 'Diamonds', v: '7'} , { card_suit: 'Diamonds', v: '8'} , { card_suit: 'Diamonds', v: '9'} , { card_suit: 'Diamonds', v: '10'} , { card_suit: 'Diamonds', v: 'J'} , { card_suit: 'Diamonds', v: 'Q'} , { card_suit: 'Diamonds', v: 'K'}  ];
var deck_img;
var table_img;
var drawCounter = 0;

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your shuffleSeed function here. Followed by a call to shuffleDeck with the return value of shuffleSeed as an argument.
	var g = shuffleSeed();
	shuffleDeck(g);

}

//write your shuffleSeed function here
	function shuffleSeed()
	{
		var c = []
		for(var i = 0; i< 52; i++)
		{
			var v  = round(random(10, 68))
			c.push(v)
		}
		return c;
	}


/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed)
{
		//shuffle the deck by rotating the cards location with the values in
		//shuffleSeed. Repeat this a random number of times between 20 and 50
    var shuffleIterations = parseInt(random(20, 50));
    for(var i = 0; i < shuffleIterations; i++)
    {
	   for (var j = 0; j < deck.length; j++)
	   {
		  var tempCard = deck.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          deck.splice(newLoc, 0, tempCard[0]);
	   }
    }
}

function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 52)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if (deck[i].marked)
		{
			drawCard(deck[i], 400 + i * 18, 230);
		}
		else
		{
			drawCard(deck[i], 400 + i * 18, 250);
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
			if (card.v == values[j] && card.card_suit == suits[i])
			{
			        //img,  sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				//There is wrong order in orginal case shoud be changed
				//image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				image(deck_img,x, y, 100, 150, j * 200, i * 300,200, 300);
				break;
			}
		}
	}
}
