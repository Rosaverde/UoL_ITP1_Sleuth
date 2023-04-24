 /*
The case of the Python Syndicate
Stage 4

CaseNum: 301-3

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

- Organise each syndicate member into a new object. 
    - I’ve done one for you as an example.
    - Be sure to replicate the naming conventions for your own objects.
- Modify the image commands to make them use the new objects you created.
- Once you have done this you can delete the old variables.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var countessHamiltonImage;
var annaKarpinskiImage;
var rockyKrayImage;
var pawelKarpinskiImage;
var adaLovelaceImage;
var bonesKarpinskiImage;

var adaLovelaceObj;


//declare your new objects below


var countessHamiltonLocX = 115;
var countessHamiltonLocY = 40;
var annaKarpinskiLocX = 408;
var annaKarpinskiLocY = 40;
var rockyKrayLocX = 701;
var rockyKrayLocY = 40;
var pawelKarpinskiLocX = 115;
var pawelKarpinskiLocY = 309;
var bonesKarpinskiLocX = 701;
var bonesKarpinskiLocY = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	countessHamiltonImage = loadImage("countessHamilton.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");
	rockyKrayImage = loadImage("krayBrothers1.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");
	adaLovelaceImage = loadImage("ada.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	adaLovelaceObj = {
		x: 408,
		y: 309,
		image: adaLovelaceImage
	};
	countessHamiltonObj = {
		x: 115,
		y: 40,
		image: countessHamiltonImage
	}
	annaKarpinskiObj = {
		x: 408,
		y: 40,
		image: annaKarpinskiImage
	}
	rockyKrayObj = {
		x: 701,
		y: 40,
		image: rockyKrayImage
	}
	pawelKarpinskiObj = {
	x: 115,
	y: 309,
	image:  pawelKarpinskiImage
	}
	bonesKarpinskiObj = {
		x: 701,
		y: 309,
		image: bonesKarpinskiImage
	}

	//define your new objects below
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(countessHamiltonImage, countessHamiltonObj.x, countessHamiltonObj.y);
	image(annaKarpinskiImage, annaKarpinskiObj.x, annaKarpinskiObj.y);
	image(rockyKrayImage, rockyKrayObj.x, rockyKrayObj.y);
	image(pawelKarpinskiImage, pawelKarpinskiObj.x, pawelKarpinskiObj.y);
	image(adaLovelaceObj.image, adaLovelaceObj.x, adaLovelaceObj.y);
	image(bonesKarpinskiImage, bonesKarpinskiObj.x, bonesKarpinskiObj.y);


}