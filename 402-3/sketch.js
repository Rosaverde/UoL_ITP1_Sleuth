/*
402 - The case of the Why Gang ruby heist
Stage 4 - Fox

CaseNum: 402-3

This final Why gang member Fox is the boss of the gang. Fox is particularly cunning and has hidden herself down this twisted network of alleys known as vice city. 
Head into vice city to find her but don’t get lost!

- Write if statements in the draw loop to set the direction for the detective
- Do this using the properties of the detective object, speedX and speedY. 
	- For example, to go north you would write the following code:
		det.speedX = 0; 
		det.speedY = -1;

- There are many ways to complete this task but you should only use the following commands and operators:
	if(){}
	else if
	>
	<
	&&

- You will need to make careful use of `else if` and the && operator for this task. Join all conditionals with "else if" and use at least one && operator for each condition.

*/

var currentRoad;
var direction;
var mapImage;
var overlayImage;

//the detective object
var det = {
	speedX: 0,
	speedY: 0,
	locationX: 73,
	locationY: 73,
	currentStreet: undefined,
	image: './det.png'
};

function preload()
{
	perp.image = loadImage(perp.image);
	det.image = loadImage(det.image);
	mapImage = loadImage("./map.png");
	overlayImage = loadImage("./overlay.png")
}

function setup()
{
	createCanvas(1024, 768);
}

function draw()
{

	///////////////////ADD YOUR CODE HERE///////////////////
	if (det.locationY < 322 && det.locationX < 85)
	{
		console.log('1')
		det.speedX = 0;
		det.speedY = 1;
	}
	else if (det.locationY > 322 && det.locationX > 60 && det.locationX < 80)
	{
		console.log('2')

		det.speedX = 1;
		det.speedY = 0;
	}
	else if (det.locationY < 324  && det.locationX > 260 && det.locationY > 135 && det.locationX < 280)
	{
		console.log('3')

		det.speedX = 0;
		det.speedY = -1;
	}
	else if (det.locationY > 130 && det.locationY < 150 && det.locationX < 390)
	{
		console.log('4')

		det.speedX = 1;
		det.speedY = 0;
	}
	else if (det.locationY > 130 && det.locationY < 575 && det.locationX > 385 && det.locationX < 400 )
	{
		console.log('5')

		det.speedX = 0;
		det.speedY = 1;
	}
	else if (det.locationY > 575 && det.locationY < 586 && det.locationX < 510)
	{
		det.speedX = 1;
		det.speedY = 0;
		console.log('6')
	}
	else if (det.locationY < 580 && det.locationX > 510 && det.locationX < 520 && det.locationY > 259)
	{
		det.speedX = 0;
		det.speedY = -1;
		console.log('7')
	}
	else if (det.locationY < 260 && det.locationX > 510 && det.locationX < 700)
	{
		det.speedX = 1;
		det.speedY = 0;
		console.log('8')
	}
	else if (det.locationY > 245 && det.locationY < 630 && det.locationX > 700  && det.locationX < 720)
	{
		det.speedX = 0;
		det.speedY = 1;
		console.log('9')
	}
	else if (det.locationY > 630 && det.locationX > 690 && det.locationX < 890)
	{
		det.speedX = 1;
		det.speedY = 0;
		console.log('10')
	}
	else if (det.locationY > 130 && det.locationY < 650 && det.locationX > 890)
	{
		det.speedX = 0;
		det.speedY = -1;
		console.log('11')
	}
	


	///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

	background(50);

	if (perp.caught === 0)
	{
		det.locationX += det.speedX;
		det.locationY += det.speedY;
	}

	//draw the images of the map perp and the detective
	image(mapImage, 0, 0);
	image(overlayImage, 0, 0);
	image(perp.image, perp.locationX - roadWidth, perp.locationY - roadWidth, roadWidth * 2, roadWidth * 2);

	push();
	translate(det.locationX, det.locationY);
	if (det.speedX != 0) rotate((det.speedX - 1.5) * PI);
	else if (det.speedY < 0) rotate(PI);
	image(det.image, -roadWidth, -roadWidth, roadWidth * 2, roadWidth * 2);
	pop();

	push();
	textAlign(CENTER);
	textSize(32);
	noStroke();

	//the perp has been caught
	if (dist(det.locationX, det.locationY, perp.locationX, perp.locationY) < roadWidth / 2)
	{
		//display message to the player
		fill(0, 220, 0);
		text("Just in the nick of time! \nYou caught " + perp.name, width / 2, height / 2);
		perp.caught = 1;
	}

	//not on any roads, therefore the game is lost.
	if (!getOnRoad() || (det.speedX == 0 && det.speedY == 0))
	{
		fill(255, 0, 0);
		text("You let " + perp.name + " get away.\n Better luck next time.", width / 2, height / 2);
		perp.caught = -1;
	}

	pop();

	hud();

	fill(255);
	text(`${mouseX},${mouseY}`, mouseX, mouseY);
}

function hud()
{
	push();
	fill(250);
	noStroke();
	textAlign(LEFT, TOP);
	text("detective location - x: " + det.locationX + " y: " + det.locationY, 5, 5);
	pop();
}

function getOnRoad()
{

	if (mapImage.get(det.locationX, det.locationY)[0] == bckgrndColour)
	{
		return false;
	}

	return true;
}

var roadWidth = 25;
var bckgrndColour = 50;
var perp = {
	caught: 0,
	name: 'Fox',
	image: './perp.png',
	locationX: 889,
	locationY: 135
};