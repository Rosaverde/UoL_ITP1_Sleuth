/*

CaseNum: 202-2

Case 202 - The case of Bob and Daisy - stage 3

Wow these two like to ham it up. Here’s the next letter. This time it’s from Bob (aka. Jobs).
I need you to decode it to uncover more details about their plan.

Discover the hidden code by commenting out all text commands except
those which produce Crimsonfilled text in Ballpointprint font (see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leavefill & stroke commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var Ballpointprint;
var Melissa;
var Diggity;
var RonsFont;


function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(666,685);
	textSize(34);
}

function draw()
{
	background(255);

	fill(0,128,0);
	textFont(Melissa);
	// text("playing", 476,341);
	fill(0,139,139);
	textFont(Ballpointprint);
	// text("our", 474,102);
	fill(148,0,211);
	textFont(RonsFont);
	// text("in", 150,417);
	fill(165,42,42);
	// text("and", 404,417);
	fill(210,105,30);
	textFont(Melissa);
	// text("ks", 219,265);
	textFont(RonsFont);
	// text("down", 499,265);
	fill(0,206,209);
	textFont(Melissa);
	// text("we", 217,102);
	fill(255,165,0);
	textFont(Ballpointprint);
	// text("this.", 415,183);
	// text("be", 588,304);
	fill(165,42,42);
	textFont(RonsFont);
	// text("lovely", 51,34);
	fill(255,105,180);
	textFont(Ballpointprint);
	// text("return", 131,102);
	fill(50,205,50);
	textFont(Melissa);
	// text("devotion", 230,224);
	fill(0,255,127);
	// text("wal", 185,265);
	fill(255,99,71);
	textFont(RonsFont);
	// text("despair", 308,304);
	fill(139,0,139);
	// text("I", 73,183);
	fill(0,255,255);
	textFont(Melissa);
	// text("our", 149,265);
	fill(255,127,80);
	textFont(Diggity);
	// text("and", 424,341);
	// text("Do", 217,304);
	fill(0,191,255);
	// text("our.", 164,304);
	fill(240,128,128);
	// text("I", 408,383);
	fill(199,21,133);
	textFont(Melissa);
	// text("longer", 348,102);
	fill(238,232,170);
	textFont(Ballpointprint);
	// text("be", 255,141);
	// text("x", 80,592);
	fill(0,250,154);
	textFont(RonsFont);
	// text("and", 432,265);
	fill(205,133,63);
	textFont(Ballpointprint);
	// text("at", 213,383);
	textFont(Diggity);
	// text("right", 284,417);
	fill(186,85,211);
	textFont(Melissa);
	// text("ty.", 581,224);
	fill(219,112,147);
	textFont(Diggity);
	// text("Soon", 437,304);
	fill(0,0,255);
	textFont(Melissa);
	// text("toasts", 93,341);
	textFont(Ballpointprint);
	// text("to", 585,417);
	// text("no", 307,102);
	fill(64,224,208);
	// text("shooters", 29,383);
	fill(147,112,219);
	textFont(Diggity);
	// text("bar", 373,341);
	// text("the", 511,141);
	fill(75,0,130);
	// text("to", 316,224);
	fill(0,0,128);
	textFont(Ballpointprint);
	// text("Love", 19,524);
	fill(0,255,127);
	textFont(RonsFont);
	// text("away", 210,183);
	fill(144,238,144);
	textFont(Ballpointprint);
	// text("Bob", 14,592);
	fill(255,127,80);
	// text("days", 561,141);
	fill(0,100,0);
	textFont(Melissa);
	// text("opportuni", 494,224);
	fill(0,0,128);
	// text("shall", 525,183);
	fill(240,128,128);
	textFont(RonsFont);
	// text("te", 513,383);
	fill(222,184,135);
	textFont(Ballpointprint);
	// text("dream", 20,265);
	fill(139,0,139);
	textFont(Melissa);
	// text("ry", 466,224);
	fill(0,191,255);
	textFont(RonsFont);
	// text("our", 163,224);
	fill(184,134,11);
	textFont(Diggity);
	// text("of", 112,265);
	fill(160,82,45);
	textFont(RonsFont);
	// text("to", 15,417);
	fill(32,178,170);
	textFont(Diggity);
	// text("keep", 411,102);
	// text("the", 14,304);
	fill(173,255,47);
	textFont(Ballpointprint);
	// text("run", 471,417);
	// text("you.", 26,456);
	fill(0,255,255);
	textFont(Diggity);
	// text("shall", 253,102);
	fill(107,142,35);
	// text("counting", 345,141);
	fill(0,255,127);
	textFont(Ballpointprint);
	// text("at", 395,224);
	fill(210,105,30);
	// text("now", 347,417);
	fill(240,128,128);
	textFont(RonsFont);
	// text("wine", 300,341);
	fill(255,0,255);
	// text("jump", 60,417);
	fill(210,105,30);
	textFont(Diggity);
	// text("can", 103,183);
	fill(75,0,130);
	textFont(Melissa);
	// text("I", 126,141);
	fill(244,164,96);
	textFont(RonsFont);
	// text("my", 82,102);
	// text("from", 289,183);
	// text("am", 425,383);
	fill(250,128,114);
	// text("by", 582,265);
	fill(0,139,139);
	textFont(Diggity);
	// text("down", 441,141);
	fill(135,206,250);
	textFont(RonsFont);
	// text("get", 153,183);
	fill(34,139,34);
	textFont(Ballpointprint);
	// text("car", 233,417);
	fill(152,251,152);
	textFont(RonsFont);
	// text("we", 498,304);
	fill(0,100,0);
	textFont(Diggity);
	// text("I", 614,224);
	fill(0,128,0);
	textFont(RonsFont);
	// text("Oh", 8,34);
	fill(135,206,235);
	textFont(Melissa);
	// text("will", 549,304);
	fill(34,139,34);
	// text("at", 167,341);
	fill(240,128,128);
	textFont(RonsFont);
	// text("dcast", 74,224);
	fill(0,128,128);
	textFont(Ballpointprint);
	// text("and", 94,524);
	// text("not", 258,304);
	fill(139,69,19);
	// text("down", 139,383);
	fill(153,50,204);
	textFont(Diggity);
	// text("har", 115,304);
	fill(144,238,144);
	textFont(Melissa);
	// text("love", 522,102);
	fill(233,150,122);
	textFont(Diggity);
	// text("until", 19,183);
	fill(135,206,235);
	// text("too", 144,141);
	fill(255,69,0);
	textFont(Ballpointprint);
	// text("Upon", 14,102);
	fill(220,20,60);
	 text("the", 289,265);
	fill(199,21,133);
	textFont(RonsFont);
	// text("We", 481,183);
	// text("my", 184,417);
	fill(160,82,45);
	textFont(Ballpointprint);
	// text("the", 253,383);
	fill(255,69,0);
	textFont(Diggity);
	// text("back", 521,417);
	fill(244,164,96);
	textFont(Ballpointprint);
	// text("Jerrys", 196,341);
	fill(128,0,0);
	textFont(Diggity);
	// text("kisses,", 154,524);
	fill(176,224,230);
	textFont(RonsFont);
	// text("all", 353,224);
	fill(0,100,0);
	// text("broa", 12,224);
	fill(173,255,47);
	textFont(Diggity);
	// text("raising", 16,341);
	fill(199,21,133);
	textFont(Ballpointprint);
	// text("old", 64,304);
	fill(139,0,0);
	textFont(RonsFont);
	// text("all", 373,183);
	fill(64,224,208);
	// text("mpted", 548,383);
	fill(255,215,0);
	textFont(Melissa);
	// text("!", 424,304);
	fill(186,85,211);
	textFont(Diggity);
	// text("have", 192,141);
	fill(220,20,60);
	textFont(Ballpointprint);
	text("woods", 350,265);
	text("hidden", 20,141);
	text("in", 250,265);
	text("gun", 289,141);
	fill(255,0,0);
	textFont(Diggity);
	// text("b", 152,304);
	fill(178,34,34);
	textFont(Melissa);
	// text("eve", 435,224);
	fill(0,250,154);
	textFont(Diggity);
	// text("Daisy,", 132,34);
	fill(107,142,35);
	// text("so", 477,383);
	fill(178,34,34);
	// text("arcade.", 314,383);



}
