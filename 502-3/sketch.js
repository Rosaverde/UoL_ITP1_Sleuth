/*

CaseNum: 502-3

Case 502 - A donation - stage 4

This final document will seal the deal. C’mon kid, let’s send these crooks down.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.


*/


var redactedText;

// data structures to be referenced in redactedText
var paperA = [
{
	element0: {detail0: "fence", detail1: "stuff", detail2: "stuff", detail3: "clip"}, 
	element1: {detail0: "mend", detail1: "succeed", detail2: "rejoice", detail3: "$200,000"}, 
	element2: {detail0: "start", detail1: "protect", detail2: "mend", detail3: "fence"}
},
{
	element0: {detail0: "succeed", detail1: "play", detail2: "sneeze", detail3: "ALGOL fish wholesalers"}, 
	element1: {detail0: "bake", detail1: "bake", detail2: "plug", detail3: "sneeze"}, 
	element2: {detail0: "start", detail1: "tug", detail2: "smile", detail3: "radiate"}
},
{
	element0: {detail0: "clip", detail1: "start", detail2: "start", detail3: "start"}, 
	element1: {detail0: "syndicate", detail1: "plug", detail2: "succeed", detail3: "stuff"}, 
	element2: {detail0: "plug", detail1: "meddle", detail2: "meddle", detail3: "play"}
},
{
	element0: {detail0: "Governor Zuckerberg", detail1: "protect", detail2: "tug", detail3: "plug"}, 
	element1: {detail0: "start", detail1: "mend", detail2: "charge", detail3: "succeed"}, 
	element2: {detail0: "succeed", detail1: "sail", detail2: "play", detail3: "consider"}
},
{
	element0: {detail0: "sail", detail1: "sail", detail2: "stuff", detail3: "consider"}, 
	element1: {detail0: "start", detail1: "consider", detail2: "rejoice", detail3: "charge"}, 
	element2: {detail0: "you", detail1: "sneeze", detail2: "start", detail3: "tug"}
}];

var paperB = [
{
	element0: {detail0: "sail", detail1: "succeed", detail2: "rejoice", detail3: "smile"}, 
	element1: {detail0: "clip", detail1: "succeed", detail2: "fence", detail3: "play"}, 
	element2: {detail0: "fence", detail1: "donation", detail2: "charge", detail3: "play"}
},
{
	element0: {detail0: "fence", detail1: "mend", detail2: "stuff", detail3: "clip"}, 
	element1: {detail0: "tug", detail1: "succeed", detail2: "rejoice", detail3: "Edsger"}, 
	element2: {detail0: "COBOL", detail1: "protect", detail2: "sail", detail3: "bake"}
},
{
	element0: {detail0: "meddle", detail1: "stuff", detail2: "fence", detail3: "succeed"}, 
	element1: {detail0: "stuff", detail1: "rejoice", detail2: "meddle", detail3: "meddle"}, 
	element2: {detail0: "succeed", detail1: "smile", detail2: "smile", detail3: "clip"}
},
{
	element0: {detail0: "clip", detail1: "fence", detail2: "clip", detail3: "charge"}, 
	element1: {detail0: "tug", detail1: "rejoice", detail2: "plug", detail3: "bake"}, 
	element2: {detail0: "mend", detail1: "succeed", detail2: "ALGOL", detail3: "play"}
},
{
	element0: {detail0: "charge", detail1: "hurry", detail2: "consider", detail3: "mend"}, 
	element1: {detail0: "development", detail1: "hurry", detail2: "play", detail3: "sail"}, 
	element2: {detail0: "plug", detail1: "smile", detail2: "clip", detail3: "smile"}
}];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = "My dearest " + paperB[1].element1.detail3 + ", I have just received your very generous " + paperB[0].element2.detail1 + " of " + paperA[0].element1.detail3 + ". Thank you. This will be invaluable to our campaign. " + paperB[3].element2.detail2 + " is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of " + paperA[4].element2.detail0 + " or " + paperA[1].element0.detail3 + " to the " + paperA[2].element1.detail0 + ". Your new " + paperB[4].element1.detail0 + " at the " + paperB[1].element2.detail0 + " can now proceed without impediment. Yours sincerely, " + paperA[3].element0.detail0 + "";

}

function draw()
{
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width/2, 10, width/2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text("Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg", 670, 100, 580, 600);
}
