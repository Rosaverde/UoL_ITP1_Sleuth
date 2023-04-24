/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

CaseNum: 201-3

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. 
Lying amongst piles of fish carcasses you find the body of Judge Hopper. 
Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

HINT: You should only need around 20 vertices to draw round the judge. Make sure you close your shape!

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  beginShape()
  endShape()
  vertex()

*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape()
    vertex(435,221)
    vertex(358,450)
    vertex(730,510)
    vertex(777,435)
    vertex(570,140)
    vertex(435,221)

    endShape()

    //A helpful mouse pointer
	push();
        fill(0);
        noStroke();
        text(mouseX + "," + mouseY, mouseX,mouseY);
    pop();

}
