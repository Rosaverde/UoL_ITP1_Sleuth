/*
The case of the Python Syndicate
Stage 2

CaseNum: 301-1

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Countess Hamilton

- The variables for Countess Hamilton have been declared and initialised.
- This time you are NOT allowed to create any new variables.
- Instead you must position each mug shot relative to Countess Hamilton
- To do this you will need to control the positions of the mugshots by adding/subtracting hard-coded values to the appropriate Countess Hamilton variable for each parameter.
- If you've got it right all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the variables for Countess Hamilton 
- Do not add any additional commands

*/

var photoBoard;
var ada_lovelace_image;
var rocky_kray_image;
var pawel_karpinski_image;
var countess_hamilton_image;
var cecil_karpinski_image;
var bones_karpinski_image;


var countess_hamilton_x_position = 115;
var countess_hamilton_y_position = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	ada_lovelace_image = loadImage("ada.png");
	rocky_kray_image = loadImage("krayBrothers1.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	cecil_karpinski_image = loadImage("karpinskiBros1.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(countess_hamilton_image, countess_hamilton_x_position, countess_hamilton_y_position);

	image(ada_lovelace_image, countess_hamilton_x_position, countess_hamilton_y_position - 269);
	image(rocky_kray_image, countess_hamilton_x_position + 293, countess_hamilton_y_position - 269);
	image(pawel_karpinski_image, countess_hamilton_x_position + 586, countess_hamilton_y_position - 269);
	image(cecil_karpinski_image, countess_hamilton_x_position + 293, countess_hamilton_y_position);
	image(bones_karpinski_image, countess_hamilton_x_position + 586, countess_hamilton_y_position);

}