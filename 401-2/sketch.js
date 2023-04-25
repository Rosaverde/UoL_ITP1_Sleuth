/*

CaseNum: 401-2

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and has laced the cream cheese with an ingenious but vicious toxin. 
This one is quite deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- When polonium dips below 0.38, warfarin dips below 0.45, and also novichok dips below 0.49, reduce aspirin by 0.01
	- If alcohol goes above 0.47 and Amanita_Mushrooms dips below 0.56, raise aspirin by 0.04
	- If alcohol goes above 0.46 or Amanita_Mushrooms dips below 0.44, try decreasing SodiumBicarbonate by 0.01
	- If ricin dips below 0.54, polonium dips below 0.34, and also warfarin dips below 0.75, try increasing SodiumBicarbonate by 0.03
	- If either ricin dips below 0.43, polonium goes above 0.44, or perhaps novichok dips below 0.46, decrement antivenom by 0.01
	- If Amanita_Mushrooms dips below 0.59 and alcohol dips below 0.53, increase antivenom by 0.01
	- If alcohol goes above 0.55 and polonium dips below 0.28, reduce plasma by 0.02
	- When ricin dips below 0.36 or warfarin dips below 0.41, increase plasma by 0.03


Your conditional statements should consider the following poisons:

	- Amanita_Mushrooms
	- warfarin
	- polonium
	- novichok
	- alcohol
	- ricin


Your conditional statements should modify the following antidotes:

	- aspirin
	- SodiumBicarbonate
	- antivenom
	- plasma


- There are many ways to complete this task but you should only use the following commands:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var Amanita_Mushrooms;
var warfarin;
var polonium;
var novichok;
var alcohol;
var ricin;


//Declare the antidote variables
var aspirin;
var SodiumBicarbonate;
var antivenom;
var plasma;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	Amanita_Mushrooms = 0.5;
	warfarin = 0.5;
	polonium = 0.5;
	novichok = 0.5;
	alcohol = 0.5;
	ricin = 0.5;
	aspirin = 0.5;
	SodiumBicarbonate = 0.5;
	antivenom = 0.5;
	plasma = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...
	if(polonium < 0.38 && warfarin < 0.45 && novichok < 0.49)
	{
		aspirin -= 0.01
	}

	if(alcohol > 0.47 && Amanita_Mushrooms < 0.56)
	{
		aspirin += 0.04
	}

	if(alcohol > 0.46 || Amanita_Mushrooms < 0.44)
	{
		SodiumBicarbonate -= 0.01
	}

	if(ricin < 0.54 && polonium < 0.34 && warfarin < 0.75)
	{
		SodiumBicarbonate += 0.03
	}

	if(ricin < 0.43 || polonium > 0.44 || novichok < 0.46)
	{
		antivenom -= 0.01
	}

	if(Amanita_Mushrooms < 0.59 && alcohol < 0.53)
	{
		antivenom += 0.01
	}

	if(alcohol > 0.55 && polonium < 0.28)
	{
		plasma -= 0.02
	}
	
	if(ricin < 0.36 || warfarin < 0.41)
	{
		plasma += 0.03
	}
	



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	Amanita_Mushrooms = nextValue(graphs[0],Amanita_Mushrooms);
	warfarin = nextValue(graphs[1],warfarin);
	polonium = nextValue(graphs[2],polonium);
	novichok = nextValue(graphs[3],novichok);
	alcohol = nextValue(graphs[4],alcohol);
	ricin = nextValue(graphs[5],ricin);


	aspirin = constrain(aspirin, 0, 1);
	SodiumBicarbonate = constrain(SodiumBicarbonate, 0, 1);
	antivenom = constrain(antivenom, 0, 1);
	plasma = constrain(plasma, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('Amanita_Mushrooms: ' + nf(Amanita_Mushrooms,1,2), 20,20);
	fill(colors[1]);
	text('warfarin: ' + nf(warfarin,1,2), 20,40);
	fill(colors[2]);
	text('polonium: ' + nf(polonium,1,2), 20,60);
	fill(colors[3]);
	text('novichok: ' + nf(novichok,1,2), 20,80);
	fill(colors[4]);
	text('alcohol: ' + nf(alcohol,1,2), 20,100);
	fill(colors[5]);
	text('ricin: ' + nf(ricin,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(aspirin,50,'aspirin');
	drawBar(SodiumBicarbonate,200,'SodiumBicarbonate');
	drawBar(antivenom,350,'antivenom');
	drawBar(plasma,500,'plasma');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
