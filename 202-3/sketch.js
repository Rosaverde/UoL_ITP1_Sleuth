/*

CaseNum: 202-3

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Indigo filled text with a Sea Green outline in RonsFont font (see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(587,480);
	textSize(29);
}

function draw()
{
	background(255);

	fill(128,128,0);
	stroke(0,255,127);
	textFont(Ballpointprint);
	// text("so,", 321,87);
	fill(106,90,205);
	stroke(50,205,50);
	textFont(RonsFont); //    
	// text("ignore", 149,121);// 
	fill(0,0,128);
	stroke(160,82,45);
	// text("should", 125,187); //
	fill(176,224,230);
	stroke(128,128,0);
	textFont(Melissa);           
	// text("?", 501,154);      
	fill(240,230,140);
	stroke(127,255,0);
	// text("Perhaps", 8,187);
	fill(0,255,255);
	stroke(0,191,255);
	textFont(RonsFont);  //      
	// text("sort", 498,187);//   
	fill(0,128,0);
	textFont(RonsFont);   //      
	// text("and", 440,187);// 
	fill(244,164,96);
	stroke(255,140,0);
	textFont(Melissa);        
	// text("you", 48,87);
	fill(238,130,238);
	stroke(0,206,209);
	textFont(RonsFont);  //           
	// text("me", 463,154);//  
	fill(199,21,133);
	stroke(128,0,0);
	// text("all", 47,223);// 
	fill(186,85,211);
	stroke(0,255,127);
	textFont(RonsFont); //             
	// text("Daisy", 10,375);//   
	fill(176,224,230);
	stroke(255,69,0);
	textFont(Ballpointprint);     
	// text("darling", 62,29);
	push();
	fill(127,255,0);
	stroke(184,134,11);
	// text("we", 81,187);
	pop();
	stroke(0,0,139);
	textFont(RonsFont);//               
	// text("?", 258,259);//    
	fill(238,232,170);
	stroke(0,206,209);
	textFont(RonsFont); //              
	// text("x", 76,375); //    
	fill(165,42,42);
	stroke(0,100,0);
	textFont(Melissa);           
	// text("this", 9,223);
	push();
	fill(255,0,0);
	stroke(220,20,60);
	textFont(RonsFont); //               
	// text("longer", 87,121);//   
	pop();
	stroke(160,82,45);
	textFont(RonsFont);     //           
	// text("?", 251,87);  //  
	fill(139,69,19);
	stroke(139,0,0);
	textFont(Ballpointprint);      
	// text("ationship", 217,223);
	fill(154,205,50);
	stroke(154,205,50);
	textFont(RonsFont);  //              
	// text("short", 80,87);// 
	push();
	fill(218,112,214);
	stroke(199,21,133);
	textFont(Ballpointprint);      
	// text("are", 480,121);
	pop();
	stroke(153,50,204);
	textFont(Ballpointprint);
	// text("send", 434,87);
	fill(222,184,135);
	stroke(34,139,34);
	textFont(Melissa);
	// text("no", 63,121);
	fill(124,252,0);
	stroke(128,0,128);
	textFont(RonsFont);  //               
	// text("away", 224,187);//  
	fill(222,184,135);
	stroke(0,100,0);
	textFont(Ballpointprint);      
	// text("avoiding", 366,154);
	push();
	fill(0,0,205);
	stroke(255,69,0);
	textFont(RonsFont); //             
	// text("Is", 125,223);// 
	pop();
	stroke(46,139,87);  //                                
	textFont(RonsFont); //               
	// text("I", 553,87);// 
	fill(25,25,112);
	stroke(32,178,170);            
	textFont(Ballpointprint);        
	// text("the", 408,259);
	push();
	fill(128,128,0);
	stroke(124,252,0);
	// text("how", 506,223);
	pop();
	stroke(107,142,35);
	textFont(Melissa);
	// text("silence.", 458,259);
	fill(128,128,0);
	stroke(153,50,204);
	// text("sure", 465,223);
	fill(233,150,122);
	stroke(0,206,209);
	textFont(RonsFont); //                
	// text("not", 423,223);//  
	fill(0,206,209);
	stroke(0,0,255);
	textFont(Ballpointprint);     
	// text("My", 16,29);
	push();
	fill(244,164,96);
	stroke(199,21,133);
	textFont(Melissa);
	// text("so", 529,121);
	pop();
	fill(255,99,71);
	stroke(0,128,0);
	// text("these", 212,121);
	fill(255,127,80);
	stroke(0,0,128);
	// text("money", 175,87);
	fill(173,216,230);
	stroke(0,0,139);
	textFont(RonsFont); //              
	// text("much", 17,259);  // 
	fill(255,0,255);
	stroke(0,255,127);
	textFont(RonsFont);//       
	// text("sometimes.", 126,154);// 
	fill(160,82,45);
	textFont(Melissa);           
	// text("I", 133,259);
	fill(255,255,0);
	stroke(153,50,204);
	textFont(RonsFont);//               
	// text("You", 435,121); // 
	fill(128,0,0);
	stroke(128,0,128);
	// text("a", 342,187);   // 
	fill(152,251,152);
	stroke(32,178,170);
	// text("more", 75,259);  //
	push();
	fill(127,255,212);
	stroke(75,0,130);
	// text("Bob,", 144,29); // 
	pop();
	fill(139,0,0);
	stroke(127,255,0);
	textFont(RonsFont);//      
	// text("break", 365,187); //   
	fill(255,99,71);
	stroke(0,255,255);
	// text("can", 13,121);  // 
	fill(50,205,50);
	stroke(50,205,50);
	textFont(Ballpointprint);   
	// text("Are", 261,154);
	fill(240,230,140);
	stroke(154,205,50);
	textFont(RonsFont);//       
	// text("yours,", 75,317); //   
	push();
	fill(30,144,255);
	stroke(255,0,255);
	textFont(Melissa);
	// text("Are", 12,87);
	pop();
	stroke(184,134,11);
	// text("ed", 87,154);
	fill(75,0,130);//                           
	stroke(46,139,87);//                      
	 text("can", 384,87);      //    
	 text("safe", 313,223);   //     
	 text("I", 359,87);       //     
	push();
	fill(165,42,42);           
	stroke(160,82,45);         
	textFont(Melissa);
	// text("Forever", 7,317);
	pop();
	 text("guard", 12,154);
	 text("you", 316,154);
	fill(255,255,0);
	stroke(0,255,255);
	textFont(Ballpointprint);
	// text("our", 148,223);
	fill(255,0,255);
	stroke(255,140,0);
	textFont(RonsFont);//                
	// text("of", 142,87);    
	fill(165,42,42);
	stroke(0,0,139);
	// text("secrets,", 322,259);
	fill(153,50,204);
	stroke(255,255,0);
	textFont(RonsFont);//       
	// text("out.", 74,223);  
	fill(75,0,130);//                           
	stroke(46,139,87);//                        
	text("go", 191,187);//      
	text("for", 291,187);//     
	text("delay", 358,121);//   
	push();
	fill(138,43,226);            
	stroke(154,205,50);          
	// text("s", 413,121);  //  
	pop();
	fill(219,112,147);
	stroke(0,255,255);
	textFont(RonsFont);//                
	// text("cash.", 498,87); //
	fill(0,191,255);
	stroke(255,0,0);
	textFont(Ballpointprint);    
	// text("rel", 190,223);
	fill(106,90,205);
	stroke(127,255,0);
	textFont(RonsFont);//               
	// text("can", 148,259); 
	fill(0,139,139);
	stroke(218,165,32);
	textFont(Melissa);           
	// text("continual", 286,121);
	fill(128,0,128);
	stroke(139,69,19);
	textFont(Ballpointprint);
	// text("take", 198,259);
	fill(65,105,225);
	stroke(0,100,0);
	textFont(Melissa);
	// text("I'm", 391,223);
	fill(127,255,0);
	stroke(128,128,0);
	textFont(Ballpointprint);
	// text("If", 271,87);
	fill(139,0,139);
	stroke(0,128,0);
	textFont(RonsFont);//            
	// text("?", 371,223);  
	push();                         
	fill(124,252,0);
	stroke(124,252,0);
	// text("The", 278,259);      
	pop();



}
