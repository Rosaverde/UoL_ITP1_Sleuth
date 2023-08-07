/*

CaseNum: 502-2

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// arrays to be referenced in redactedText
var APaper = {
	Element0: [ "campaign", "clip", "bake"], 
	Element1: [ "sneeze", "succeed", "start"], 
	Element2: [ "mend", "consider", "consider"], 
	Element3: [ "hit", "play", "Hopper"], 
	Element4: [ "stuff", "mend", "succeed"], 
	Element5: [ "stuff", "mend", "radiate"], 
	Element6: [ "sail", "bake", "meddle"], 
	Element7: [ "consider", "clip", "tug"], 
	Element8: [ "meddle", "protect", "meddle"], 
	Element9: [ "fence", "consider", "play"]
};

var BPaper = {
	Element0: [ "smile", "clip", "plug"], 
	Element1: [ "charge", "bake", "rejoice"], 
	Element2: [ "Edsger", "clip", "hurry"], 
	Element3: [ "consider", "bake", "fence"], 
	Element4: [ "meddle", "smile", "Governor Zuckerberg"], 
	Element5: [ "smile", "consider", "a donation"], 
	Element6: [ "hurry", "bake", "smile"], 
	Element7: [ "meddle", "charge", "syndicate"], 
	Element8: [ "stuff", "bake", "$200,000"], 
	Element9: [ "ALGOL", "sneeze", "consider"]
};

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = "Dear " + BPaper.Element4[2] + ", I am sure that something could be worked out in terms of " + BPaper.Element5[2] + " for your " + APaper.Element0[0] + ". How does " + BPaper.Element8[2] + " sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. " + APaper.Element3[2] + " needs to be out of the picture. She’s caused enough trouble. Get the " + BPaper.Element7[2] + " to organise the " + APaper.Element3[0] + " but I’d prefer it you don’t mention me or " + BPaper.Element9[0] + ". I owe them enough favours already. Your old friend, " + BPaper.Element2[0] + "";

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
  text("Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger", 670, 100, 580, 600);
}
