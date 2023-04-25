/*

CaseNum: 303-2

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	Whilst the mouse is moving:
	- Make hidden_storage_code_0 equal to the value of mouseX
	- Use the 'min' function to prevent hidden_storage_code_0 from going above 17

	When the mouse button is released:
	- Increment hidden_storage_code_1 by 2
	- Use the 'constrain' function to prevent hidden_storage_code_1 from falling below 3 and going above 16

	When the mouse button is pressed:
	- Make hidden_storage_code_2 equal to the value of mouseX
	- Use the 'min' function to prevent hidden_storage_code_2 from going above 12

	When any key is pressed:
	- Increment hidden_storage_code_3 by 3
	- Use the 'constrain' function to prevent hidden_storage_code_3 from falling below 1 and going above 9

	Whilst the mouse is being dragged:
	- Make hidden_storage_code_4 equal to the value of mouseX
	- Use the 'constrain' function to prevent hidden_storage_code_4 from falling below 9 and going above 77



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var hidden_storage_code_0;
var hidden_storage_code_1;
var hidden_storage_code_2;
var hidden_storage_code_3;
var hidden_storage_code_4;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	hidden_storage_code_0 = 0;
	hidden_storage_code_1 = 0;
	hidden_storage_code_2 = 0;
	hidden_storage_code_3 = 0;
	hidden_storage_code_4 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...
function mouseMoved()
{
	hidden_storage_code_0 = mouseX
	hidden_storage_code_0 = min( hidden_storage_code_0,17 )
}

function mouseReleased()
{
	hidden_storage_code_1 += 2
	hidden_storage_code_1 = constrain(hidden_storage_code_1, 3, 16)
}

function mousePressed()
{
	hidden_storage_code_2 = mouseX
	hidden_storage_code_2 = min( hidden_storage_code_2,12 )
}

function keyPressed()
{
	hidden_storage_code_3 += 3
	hidden_storage_code_3 = constrain(hidden_storage_code_3, 1, 9)
}

function mouseDragged()
{
	hidden_storage_code_4 = mouseX
	hidden_storage_code_4 = constrain(hidden_storage_code_4, 9, 77)
}


///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,hidden_storage_code_0, 21);
	pop();

	push();
	translate(120,380);
	drawDial(140,hidden_storage_code_1, 20);
	pop();

	push();
	translate(280,170);
	drawDial(140,hidden_storage_code_2, 15);
	pop();

	push();
	translate(280,380);
	drawDial(140,hidden_storage_code_3, 13);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(hidden_storage_code_4);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
