/*

CaseNum: 701-2

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from tu jacquelin. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchProperties(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. It was so scary! The person I saw was male. Their expression seemed menacing. 
I'm not quite sure. They were fairly tall, I think between a height of 152 and 181 cm. They seemed to be between the age of 18 and 58 years old. 
They were carrying a big black envelope. They were wearing a blue overcoat. I'll never forget their pale eyes. 
They brobably weigh between 68 and 81 kg. Can I go home now Sir? 

*/

var suspectsArray = [
	{ 
		"name": "RANDEE BROADVIEW",
		"coat": "yellow poncho",
		"accessory": "black duffle bag",
		"gender": "male",
		"expression": "menacing",
		"age": 42,
		"weight": 84,
		"height": 163
	},
	{ 
		"name": "NICOLE ASHELY",
		"coat": "black hoodie",
		"accessory": "glass bottle",
		"gender": "female",
		"expression": "nerveous",
		"age": 54,
		"weight": 75,
		"height": 161
	},
	{ 
		"name": "DEEDEE SYMMES",
		"coat": "black overcoat",
		"accessory": "brown paper bag",
		"gender": "female",
		"expression": "depressed",
		"age": 26,
		"weight": 72,
		"height": 202
	},
	{ 
		"name": "GAYLA ADVERSANE",
		"coat": "red parka",
		"accessory": "plastic box",
		"gender": "female",
		"expression": "empty",
		"age": 43,
		"weight": 62,
		"height": 176
	},
	{ 
		"name": "JULIANA OORIN",
		"coat": "green jacket",
		"accessory": "laptop bag",
		"gender": "male",
		"expression": "confused",
		"age": 38,
		"weight": 72,
		"height": 170
	},
	{ 
		"name": "LAKESHA COURTWOOD",
		"coat": "white fur coat",
		"accessory": "orange plastic bag",
		"gender": "male",
		"expression": "blank",
		"age": 34,
		"weight": 78,
		"height": 177
	},
	{ 
		"name": "JENIFFER NIEMELA",
		"coat": "blue overcoat",
		"accessory": "big black envelope",
		"gender": "male",
		"expression": "menacing",
		"age": 52,
		"weight": 72,
		"height": 159
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

function matchProperties(suspectObj)
{
	var c = 0
		if(suspectObj.coat == 'blue overcoat')
		{
			c += 1;
		}
		if(suspectObj.accessory == 'big black envelope')
		{
			c += 1;
		}
		if(suspectObj.gender == 'male')
		{
			c += 1;
		}
		if(suspectObj.expression == 'menacing')
		{
			c += 1;
		}
		if(suspectObj.age > 18 && suspectObj.age < 58)
		{
			c += 1;
		}
		if(suspectObj.weight > 68 && suspectObj.weight < 81)
		{
			c += 1;
		}
		if(suspectObj.height > 152 && suspectObj.height < 181)
		{
			c += 1;
		}
		return c;
}



function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < suspectsArray.length; i++){
    let matchingProperties = matchProperties(suspectsArray[i]);
    fill(50 * matchingProperties,250 - (50 * matchingProperties),0);
    text("found " + matchingProperties + " matching properties for " + suspectsArray[i].name, 60, 60 + i * 20);
  }
}
