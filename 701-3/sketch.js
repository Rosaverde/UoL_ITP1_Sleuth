/*

CaseNum: 701-3

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from kitty symmes.
All they need is for you to do the detective work.

This time you must implement two functions:

- A checkSuspect function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A findGuilty function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspect(suspectObj){}
 - function findGuilty(){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. It was so scary! I'll never forget their blue eyes. They had ginger hair. 
They were wearing a red parka. They were carrying a metal briefcase. They were fairly tall, I think between a height of 176 and 188 cm. 
I distinctly remember that they were wearing a red necktie, I remember thinking that was quite unusual. They brobably weigh between 78 and 76 kg. It's hard to say. 
They seemed to be between the age of 32 and 41 years old. It's hard to say. I remember they had a neck tattoo. That's all I can remember about them. 

*/

var suspectList = [
	{ 
		"name": "KITTY ADVERSANE",
		"hair": "dark brown",
		"accessory": "big black envelope",
		"item": "pair of leather trousers",
		"tattoo": "bull",
		"weight": 70,
		"age": 37,
		"height": 182
	},
	{ 
		"name": "TU WILLMAR",
		"hair": "short black",
		"accessory": "red backpack",
		"item": "pink scarf",
		"tattoo": "dark black",
		"weight": 75,
		"age": 60,
		"height": 170
	},
	{ 
		"name": "DRUSILLA DEAUVILLE",
		"hair": "ginger",
		"accessory": "metal briefcase",
		"item": "red necktie",
		"tattoo": "neck",
		"weight": 78,
		"age": 33,
		"height": 181
	},
	{ 
		"name": "JENIFFER NIEMELA",
		"hair": "shaved",
		"accessory": "plastic box",
		"item": "dotted necktie",
		"tattoo": "dragon",
		"weight": 72,
		"age": 47,
		"height": 155
	},
	{ 
		"name": "LAKESHA JOYER",
		"hair": "long white",
		"accessory": "glass bottle",
		"item": "net weave shirt",
		"tattoo": "ox",
		"weight": 72,
		"age": 42,
		"height": 178
	},
	{ 
		"name": "MAJORIE PHINNEY",
		"hair": "thick black",
		"accessory": "orange tote bag",
		"item": "fur vest",
		"tattoo": "facial",
		"weight": 70,
		"age": 34,
		"height": 204
	},
	{ 
		"name": "LAVERNE CROME",
		"hair": "white",
		"accessory": "black duffle bag",
		"item": "orange socks",
		"tattoo": "sword",
		"weight": 86,
		"age": 30,
		"height": 151
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

// Declare both your functions here
function checkSuspect(suspectObj)
{
	var c = 0
		// I remember walking down the street and then I saw them. It was so scary! I'll never forget their blue eyes. They had ginger hair. 
		// They were wearing a red parka. They were carrying a metal briefcase. They were fairly tall, I think between a height of 176 and 188 cm. 
		// I distinctly remember that they were wearing a red necktie, I remember thinking that was quite unusual. They brobably weigh between 78 and 76 kg. It's hard to say. 
		// They seemed to be between the age of 32 and 41 years old. It's hard to say. I remember they had a neck tattoo. That's all I can remember about them. 
		// "name": "DRUSILLA DEAUVILLE",
		// "hair": "ginger",
		// "accessory": "metal briefcase",
		// "item": "red necktie",
		// "tattoo": "neck",
		// "weight": 78,
		// "age": 33,
		// "height": 181
		if(suspectObj.hair == 'ginger')
		{
			c += 1;
		}
		if(suspectObj.accessory == 'metal briefcase')
		{
			c += 1;
		}
		if(suspectObj.item == 'red necktie')
		{
			c += 1;
		}
		if(suspectObj.item == 'red parka')
		{
			c += 1;
		}
		if(suspectObj.tattoo == 'neck')
		{
			c += 1;
		}
		if(suspectObj. weight >= 76 && suspectObj.weight <= 78)
		{
			c += 1;
		}
		if(suspectObj.age >= 32 && suspectObj.age <= 41)
		{
			c += 1;
		}
		if(suspectObj.height >= 176 && suspectObj.height <= 188)
		{
			c += 1;
		}
		return c

}
function findGuilty()
{
	highest_value = 0;
	sus_index = undefined;
	for(var i = 0; i< suspectList.length; i++)
	{ 
		if(checkSuspect(suspectList[i]) > highest_value)
		{
			highest_value = checkSuspect(suspectList[i])
			sus_index = i
		}
	}
	//console.log(sus_index)
	// console.log(suspectList[sus_index])
	console.log(highest_value)
	if(sus_index == undefined)
	{
		return {}
	}
	return suspectList[sus_index];
}


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  fill(255,0,0);
  text(findGuilty().name + " is guilty!", 60, 80);
}
