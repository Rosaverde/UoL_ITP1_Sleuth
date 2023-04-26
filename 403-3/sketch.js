/*

Officer: 6604328
CaseNum: 403-3-31513639-6604328

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Mullenweg Street.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 100 meters from Norbert's Begel Emporium then alert local police by drawing a BlueViolet circle around it with a radius of 100 pixels.
- if Shiffman is in The Plaza Hotel then the neighbourhood watch must be notified by drawing a Chocolate rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a MidnightBlue rectangle covering the area between Gates Avenue, Berners-Lee Street, Mullenweg Street and Leodorf Way.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  &&
  else
  fill()  - Use r,g,b values between 0 and 255.
  dist()
  ellipse()
  rect()
  mouseX
  mouseY

*/

var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...
    if(mouseX < 1036 && mouseX > 836 && mouseY > 510 && mouseY < 710)
    {
      fill(138,43,226)
      ellipse(936, 611,100*2)
    }
    else if(mouseX > 1510 && mouseX < 1775 && mouseY > 295 && mouseY < 405)
    {
      fill(210,105,30)
      rect(1512, 295, 261, 110)
    }
    else
    {
      fill(25,25,112)
      rect(155,85, 255, 590)

    }
    //- if Shiffman is within 100 meters from Norbert's Begel Emporium then alert local police by drawing a BlueViolet circle around it with a radius of 100 pixels.
    //- if Shiffman is in The Plaza Hotel then the neighbourhood watch must be notified by drawing a Chocolate rectangle around it.
    //- if Shiffman is in neither position, a global alert must be issued by drawing a MidnightBlue rectangle covering the area between Gates Avenue, Berners-Lee Street, Mullenweg Street and Leodorf Way.


    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);


    // a helpful mouse coordinate pointer
    fill(255);
    noStroke();
    text(`${mouseX},${mouseY}`,mouseX, mouseY);
}

