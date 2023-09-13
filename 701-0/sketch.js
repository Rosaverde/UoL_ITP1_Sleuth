/*

CaseNum: 701-0

Case 701 - Probable pick pocket - stage 1

There has been a spate of pickpocketing downtown and we’ve been asked to lend a hand down at the precinct.
They’ve managed to collect a witness statement from an unsuspecting tourist lakesha broadview and also rounded up a bunch of the usual suspects.
We need you to unravel this mess and work out who is the guilty one.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchSuspectProperties(suspectObj){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. It was so scary! I remember they had a sword tattoo. I distinctly remember that they were wearing a orange socks, 
I remember thinking that was quite unusual. I'm not quite sure. They were carrying a orange tote bag. That's all I know officer. 

*/

var suspectsArray = [
	{ 
		"name": "SUMMER MYRLE",
		"accessory": "orange tote bag",
		"tattoo": "sword",
		"item": "orange socks"
	},
	{ 
		"name": "TU SYMMES",
		"accessory": "black duffle bag",
		"tattoo": "anchor",
		"item": "red necktie"
	},
	{ 
		"name": "PIERRE MONKSFORD",
		"accessory": "orange plastic bag",
		"tattoo": "dark black",
		"item": "fur vest"
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
function matchSuspectProperties(suspectObj)
{
		// It all started when I was exiting the store. That's when I noticed them. It was so scary! I remember they had a sword tattoo. I distinctly remember that they were wearing a orange socks, 
	// I remember thinking that was quite unusual. I'm not quite sure. They were carrying a orange tote bag. That's all I know officer. 
	if(suspectObj.tattoo == 'sword' && suspectObj.accessory == 'orange tote bag' && suspectObj.item == 'orange socks')
	{
		return true;
	}
	return false;
}


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < suspectsArray.length; i++){
    if(matchSuspectProperties(suspectsArray[i]) == true){
      fill(255,0,0);
      text(suspectsArray[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(suspectsArray[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
