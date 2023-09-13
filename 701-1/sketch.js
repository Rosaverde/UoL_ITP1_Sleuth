/*

CaseNum: 701-1

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchSuspect(suspectObj){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. They were carrying a plastic box. 
I think they were more than 158 cm tall. It's so hard to remember right now. The person I saw was male. 
I distinctly remember that they were wearing a red necktie, I remember thinking that was quite unusual. 
They were quite big, they probably weigh more than 59 Kg. I'll never forget their pale eyes. It was so scary! That's all I can remember about them. 

*/

var suspectList = [
	{ 
		"name": "LESLEY WILLMAR",
		"gender": "female",
		"item": "pink scarf",
		"eyes": "brown",
		"weight": 71,
		"height": 182
	},
	{ 
		"name": "BRIDGET BROADVIEW",
		"gender": "female",
		"item": "pair of leather trousers",
		"eyes": "brown",
		"weight": 64,
		"height": 192
	},
	{ 
		"name": "DARBY GOODBURY",
		"gender": "female",
		"item": "purple hat",
		"eyes": "green",
		"weight": 68,
		"height": 175
	},
	{ 
		"name": "JENIFFER CASIMERE",
		"gender": "male",
		"item": "net weave shirt",
		"eyes": "grey",
		"weight": 73,
		"height": 205
	},
	{ 
		"name": "KITTY PORTOS",
		"gender": "male",
		"item": "red necktie",
		"eyes": "pale",
		"weight": 69,
		"height": 160
	}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
	textFont(myFont);
}

// Declare your function here
function matchSuspect(suspectObj)
{
		// 	It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. They were carrying a plastic box. 
		// I think they were more than 158 cm tall. It's so hard to remember right now. The person I saw was male. 
		// I distinctly remember that they were wearing a red necktie, I remember thinking that was quite unusual. 
		// They were quite big, they probably weigh more than 59 Kg. I'll never forget their pale eyes. It was so scary! That's all I can remember about them. 

		if( suspectObj.gender == 'male' && suspectObj.item == 'red necktie' && suspectObj.eyes == 'pale' && suspectObj.weight > 59 && suspectObj.height > 158)
		{
			return true;
		}

		return false;

	
}


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < suspectList.length; i++){
    if(matchSuspect(suspectList[i]) == true){
      fill(255,0,0);
      text(suspectList[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(suspectList[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
