/*

CaseNum: 202-1

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Fire Brick filled text with a Teal outline 
(see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(597,560);
	textFont(letterFont);
	textSize(34);
}

function draw()
{
	background(255);

	 fill(0,0,139);
	stroke(107,142,35);
	// text("many", 124,138);
	 fill(128,128,0);
	stroke(25,25,112);
	// text("aving", 93,178);
	 fill(238,232,170);
	stroke(153,50,204);
	// text("my", 160,221);
	 fill(165,42,42);
	stroke(0,255,127);
	// text("you", 93,221);
	 fill(255,0,0);
	stroke(165,42,42);
	// text("your", 447,102);
	 fill(210,105,30);
	stroke(0,250,154);
	// text("I", 494,260);
	 fill(240,128,128);
	stroke(218,165,32);
	// text("return.", 10,138);
	 fill(138,43,226);
	stroke(199,21,133);
	// text("swift", 494,102);
	 fill(255,127,80);
	stroke(220,20,60);
	// text("Bob,", 114,34);
	 fill(0,100,0);
	stroke(0,128,128);
	// text("I", 12,178);
	 fill(127,255,212);
	stroke(128,0,128);
	// text("will", 67,102);
	 fill(184,134,11);
	stroke(128,128,0);
	// text("gain", 242,102);
	 fill(255,255,0);
	stroke(0,250,154);
	// text("be", 142,102);
	 fill(100,149,237);
	stroke(0,0,128);
	// text("this", 246,221);
	 fill(186,85,211);
	stroke(34,139,34);
	// text("last", 395,138);
	 fill(240,230,140);
	stroke(0,255,127);
	// text("longing", 406,260);
	 fill(238,232,170);
	stroke(50,205,50);
	// text("in", 91,336);
	 fill(75,0,130);
	stroke(139,0,0);
	// text("darling", 46,34);
	 fill(178,34,34);
	stroke(128,0,128);
	// text("h", 82,178);
	 fill(240,128,128);
	stroke(148,0,211);
	// text("up", 9,301);
	 fill(233,150,122);
	stroke(46,139,87);
	// text("miss", 30,178);
	 fill(178,34,34);
	stroke(218,165,32);
	// text("ls", 430,221);
	 fill(128,128,0);
	stroke(255,140,0);
	// text("have", 221,260);
	 fill(72,209,204);
	stroke(139,0,139);
	// text("ver", 49,404);
	 fill(128,0,0);
	stroke(0,0,205);
	// text("?", 475,260);
	 fill(255,140,0);
	stroke(75,0,130);
	// text("long", 492,301);
	 fill(34,139,34);
	stroke(0,0,139);
	// text("at", 131,221);
	 fill(255,127,80);
	stroke(139,0,139);
	// text("?", 286,102);
	 fill(0,128,128);
	stroke(184,134,11);
	// text("night", 105,301);
	 fill(0,206,209);
	stroke(0,0,128);
	// text("My", 8,34);
	 fill(123,104,238);
	stroke(0,128,0);
	// text("How", 10,260);
	 fill(139,0,0);
	stroke(46,139,87);
	// text("my", 113,336);
	 fill(218,165,32);
	stroke(34,139,34);
	// text("on", 418,102);
	fill(178,34,34);
	stroke(0,128,128);
	text("united", 170,102);
	text("the", 254,178);
	 fill(240,128,128);
	stroke(128,128,0);
	// text("sky,", 159,301);
	fill(178,34,34);
	stroke(0,128,128);
	text("place", 293,178);
	text("is", 258,138);
	text("bank", 343,102);
	 fill(0,255,255);
	stroke(184,134,11);
	// text("can", 265,301);
	 fill(0,100,0);
	// text("much", 56,260);
	 fill(65,105,225);
	stroke(0,0,128);
	// text("in", 401,178);
	 fill(205,133,63);
	stroke(0,128,0);
	// text("only", 359,301);
	 fill(75,0,130);
	stroke(0,0,139);
	// text("spring,", 462,178);
	 fill(139,69,19);
	stroke(34,139,34);
	// text("your", 87,404);
	 fill(106,90,205);
	stroke(0,128,0);
	// text("How", 527,138);
	 fill(222,184,135);
	stroke(0,139,139);
	// text("longer", 110,260);
	 fill(210,105,30);
	// text("I", 474,301);
	 fill(100,149,237);
	stroke(154,205,50);
	// text("s,", 126,404);
	 fill(148,0,211);
	stroke(0,250,154);
	// text("at", 37,301);
	 fill(255,99,71);
	stroke(0,255,127);
	// text("store", 301,260);
	 fill(0,0,128);
	stroke(75,0,130);
	// text("town", 346,221);
	 fill(0,0,205);
	stroke(148,0,211);
	// text("hold", 8,336);
	 fill(0,128,0);
	stroke(107,142,35);
	// text("you.", 432,301);
	 fill(153,50,204);
	stroke(199,21,133);
	// text("How", 78,138);
	 fill(199,21,133);
	stroke(160,82,45);
	// text("we", 106,102);
	 fill(152,251,152);
	stroke(75,0,130);
	// text("and", 207,301);
	 fill(165,42,42);
	stroke(153,50,204);
	// text("you", 53,336);
	 fill(128,0,128);
	stroke(75,0,130);
	// text("months", 180,138);
	 fill(218,112,214);
	stroke(0,206,209);
	// text("te.", 513,221);
	 fill(238,232,170);
	stroke(107,142,35);
	// text("do", 173,260);
	 fill(0,100,0);
	stroke(218,165,32);
	// text("this", 361,260);
	 fill(153,50,204);
	stroke(34,139,34);
	// text("it", 282,138);
	 fill(0,250,154);
	stroke(139,0,0);
	// text("Even", 349,178);
	 fill(0,0,128);
	stroke(75,0,130);
	// text("you", 148,178);
	 fill(64,224,208);
	stroke(255,255,0);
	// text("a", 231,102);
	 fill(255,127,80);
	stroke(0,255,127);
	// text("ing", 385,102);
	 fill(147,112,219);
	stroke(255,140,0);
	// text("Dai", 8,472);
	 fill(218,112,214);
	stroke(139,0,139);
	// text("kissed", 440,138);
	 fill(178,34,34);
	stroke(210,105,30);
	// text("without", 12,221);
	 fill(147,112,219);
	stroke(0,191,255);
	// text("we", 359,138);
	 fill(124,252,0);
	stroke(75,0,130);
	// text("arms.", 148,336);
	 fill(199,21,133);
	stroke(0,255,127);
	// text("I", 247,301);
	 fill(173,255,47);
	// text("since", 304,138);
	// text("fee", 400,221);
	 fill(154,205,50);
	stroke(148,0,211);
	// text("stare", 512,260);
	 fill(205,133,63);
	stroke(107,142,35);
	// text("sy", 36,472);
	 fill(0,250,154);
	stroke(32,178,170);
	// text("x", 67,472);
	 fill(255,0,255);
	// text("to", 272,260);
	 fill(255,0,0);
	stroke(0,0,139);
	// text("I'm", 305,102);
	 fill(154,205,50);
	stroke(128,0,128);
	// text("Fore", 8,404);
	 fill(75,0,130);
	stroke(255,69,0);
	// text("to", 536,301);
	 fill(147,112,219);
	stroke(25,25,112);
	// text("side,", 195,221);
	 fill(139,0,139);
	stroke(75,0,130);
	// text("around", 186,178);
	 fill(0,0,128);
	stroke(0,191,255);
	// text("?", 508,138);
	 fill(65,105,225);
	stroke(148,0,211);
	// text("I", 203,260);
	 fill(233,150,122);
	stroke(34,139,34);
	// text("desola", 454,221);
	 fill(128,0,0);
	stroke(0,128,0);
	// text("think", 305,301);
	 fill(255,127,80);
	stroke(148,0,211);
	// text("When", 8,102);
	 fill(238,130,238);
	stroke(255,0,0);
	// text("the", 66,301);
	 fill(218,112,214);
	stroke(0,100,0);
	// text("small", 291,221);
	stroke(0,128,128);
	// text("of", 403,301);
	 fill(160,82,45);
	stroke(25,25,112);
	// text("the", 423,178);



}
