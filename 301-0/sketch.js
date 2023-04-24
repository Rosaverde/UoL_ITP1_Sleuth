/*
The case of the Python Syndicate
Stage 1

CaseNum: 301-0

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Initialise the variables with the correct values. HINT: you should be able to derive these from the image commands below.
- Finally modify the each image command replacing the hard-coded values with your variables. 
- If you've got it right all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var countess_hamilton_img;
var ada_lovelace_img;
var cecil_karpinski_img;
var anna_karpinski_img;
var robbie_kray_img;
var bones_karpinski_img;



//declare your new variables below
var cecil_karpinski_pos_x = 701;
var cecil_karpinski_pos_y = 40;
var countess_hamilton_pos_x = 115;
var countess_hamilton_pos_y = 40;
var ada_lovelace_pos_x = 408;
var ada_lovelace_pos_y = 40;
var anna_karpinski_pos_x = 115;
var anna_karpinski_pos_y = 309;
var robbie_kray_pos_x = 408;
var robbie_kray_pos_y = 309;
var bones_karpinski_pos_x = 701;
var bones_karpinski_pos_y = 309;

function preload()
{
	photoBoard = loadImage('photoBoard.png');
	countess_hamilton_img = loadImage("countessHamilton.png");
	ada_lovelace_img = loadImage("ada.png");
	cecil_karpinski_img = loadImage("karpinskiBros1.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	robbie_kray_img = loadImage("krayBrothers2.png");
	bones_karpinski_img = loadImage("karpinskiDog.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(cecil_karpinski_img, cecil_karpinski_pos_x, cecil_karpinski_pos_y);

	image(countess_hamilton_img, countess_hamilton_pos_x, countess_hamilton_pos_y);
	image(ada_lovelace_img, ada_lovelace_pos_x, ada_lovelace_pos_y);
	image(anna_karpinski_img, anna_karpinski_pos_x, anna_karpinski_pos_y);
	image(robbie_kray_img, robbie_kray_pos_x, robbie_kray_pos_y);
	image(bones_karpinski_img, bones_karpinski_pos_x, bones_karpinski_pos_y);

}