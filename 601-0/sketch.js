/*

CaseNum: 601-0

Case 601 - Escaped - stage 1

We've got an emergency here. The notorious killer Casey Fry has escaped from the Federal Correctional Institution.
She is on the loose and we have been asked to track her movements.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, OrangeRed fill rectangles centered over each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- rect() NB. Draw each rectangle with the point at its center.rectMode(CENTER) is not accepted

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

//Sightings of Casey Fry.

var FugitiveData = [ 
  { coordinateX : 127, coordinateY : 175},
  { coordinateX : 156, coordinateY : 158},
  { coordinateX : 179, coordinateY : 192},
  { coordinateX : 200, coordinateY : 154},
  { coordinateX : 220, coordinateY : 133},
  { coordinateX : 228, coordinateY : 168},
  { coordinateX : 249, coordinateY : 149},
  { coordinateX : 269, coordinateY : 139},
  { coordinateX : 292, coordinateY : 168},
  { coordinateX : 321, coordinateY : 133},
  { coordinateX : 354, coordinateY : 159},
  { coordinateX : 390, coordinateY : 144},
  { coordinateX : 396, coordinateY : 225},
  { coordinateX : 429, coordinateY : 228},
  { coordinateX : 456, coordinateY : 230},
  { coordinateX : 467, coordinateY : 277},
  { coordinateX : 483, coordinateY : 267},
  { coordinateX : 531, coordinateY : 291},
  { coordinateX : 547, coordinateY : 278},
  { coordinateX : 571, coordinateY : 274},
  { coordinateX : 589, coordinateY : 318},
  { coordinateX : 637, coordinateY : 280} 
];


function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{

	createCanvas(countyMap.width, countyMap.height);
	noFill();
	noStroke();

	image(countyMap, 0,0);

	//add your code below here
  fill(255,69,0)
  noStroke()
  for(var i = 0; i< FugitiveData.length; i++)
  {
    rect(FugitiveData[i].coordinateX - 5,FugitiveData[i].coordinateY - 5, 10,10)
  }


}

//We are not using the draw function this time
