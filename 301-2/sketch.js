/*
The case of the Python Syndicate
Stage 3

CaseNum: 301-2

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Rocky Kray has been declared and initialised
- Position each mugshot relative to Rocky Kray
- Do this by modifying the x and y parameters of each image command to use the x and y properties from the Rocky Kray object.
- You will need to combine add and subtract operators with the relevant property for each parameter.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the properties for Rocky Kray 
- Do not add any additional commands

*/

var photoBoard;
var pawel_karpinski_img;
var countess_hamilton_img;
var rocky_kray_img;
var robbie_kray_img;
var ada_lovelace_img;
var cecil_karpinski_img;

var rocky_kray_obj;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	pawel_karpinski_img = loadImage("karpinskiBros2.png");
	countess_hamilton_img = loadImage("countessHamilton.png");
	rocky_kray_img = loadImage("krayBrothers1.png");
	robbie_kray_img = loadImage("krayBrothers2.png");
	ada_lovelace_img = loadImage("ada.png");
	cecil_karpinski_img = loadImage("karpinskiBros1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	rocky_kray_obj = {
		x: 701,
		y: 40,
		image: rocky_kray_img
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(rocky_kray_obj.image, rocky_kray_obj.x, rocky_kray_obj.y);

	image(pawel_karpinski_img, rocky_kray_obj.x - 586, rocky_kray_obj.y);
	image(countess_hamilton_img, rocky_kray_obj.x - 293, rocky_kray_obj.y);
	image(robbie_kray_img, rocky_kray_obj.x - 586, rocky_kray_obj.y + 269);
	image(ada_lovelace_img, rocky_kray_obj.x - 293, rocky_kray_obj.y + 269);
	image(cecil_karpinski_img, rocky_kray_obj.x, rocky_kray_obj.y + 269);

}