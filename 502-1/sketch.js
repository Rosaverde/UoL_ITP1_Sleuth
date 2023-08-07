/*

Officer: 6604328
CaseNum: 502-1-55829225-6604328

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way. This message is a little more tricky to decipher, but I know you can do it.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// data structures to be referenced in redactedText
var A_paper = [
	{part_0: "Edsger", part_1: "sail", part_2: "meddle"}, 
	{part_0: "smile", part_1: "tug", part_2: "smile"}, 
	{part_0: "a donation", part_1: "clip", part_2: "bake"}, 
	{part_0: "plug", part_1: "stuff", part_2: "charge"}, 
	{part_0: "mend", part_1: "charge", part_2: "succeed"}, 
	{part_0: "sneeze", part_1: "tug", part_2: "sneeze"}, 
	{part_0: "Governor Zuckerberg", part_1: "delicate", part_2: "COBOL"}, 
	{part_0: "sneeze", part_1: "start", part_2: "succeed"}, 
	{part_0: "capital", part_1: "bake", part_2: "succeed"}, 
	{part_0: "clip", part_1: "hurry", part_2: "tug"}
];

var B_paper = [
	{part_0: "sneeze", part_1: "tug", part_2: "protect"}, 
	{part_0: "sail", part_1: "fence", part_2: "rejoice"}, 
	{part_0: "play", part_1: "romantic", part_2: "hurry"}, 
	{part_0: "meddle", part_1: "meddle", part_2: "she has"}, 
	{part_0: "rejoice", part_1: "meddle", part_2: "smile"}, 
	{part_0: "hurry", part_1: "Hopper’s", part_2: "tug"}, 
	{part_0: "fence", part_1: "bake", part_2: "fence"}, 
	{part_0: "protect", part_1: "sneeze", part_2: "mend"}, 
	{part_0: "bake", part_1: "charge", part_2: "fence"}, 
	{part_0: "start", part_1: "syndicate", part_2: "charge"}
];

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
  redactedText = "My dearest "+ A_paper[0].part_0 +", Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about "+ B_paper[5].part_1 + " intervention. I suspect that " + B_paper[3].part_2 + " a " + B_paper[2].part_1 + " interest at the " + A_paper[6].part_2 + ". I and the " + B_paper[9].part_1 + " appreciate your many contributions over the years. However, this is a most " + A_paper[6].part_1 + " matter which would require significant " + A_paper[8].part_0 + " for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps " + A_paper[2].part_0 + " to my forthcoming campaign would help. Yours sincerely, " + A_paper[6].part_0;

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
  text("Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg", 670, 100, 580, 600);
}
