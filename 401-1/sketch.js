/*

CaseNum: 401-1

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos with his foul toxin. 
The chaos is spreading. People are dropping like flies and burrito sales have fallen through the floor. 
To make matters worse it seems Norbert has cottoned on to our methods and has upped the complexity of his poison. 
You’ll find the antidote harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to do the following:

	- If polonium goes above 0.4 and Amanita_Mushrooms dips below 0.38, try decreasing plasma by 0.03
	- If spider_venom dips below 0.73 or novichok goes above 0.44, increment plasma by 0.02
	- If Amanita_Mushrooms dips below 0.29 or novichok dips below 0.45, try decreasing SodiumBicarbonate by 0.05
	- If polonium dips below 0.66, try increasing SodiumBicarbonate by 0.01
	- If polonium goes above 0.31, try decreasing insulin by 0.02
	- When spider_venom goes above 0.55 and Amanita_Mushrooms dips below 0.28, increase insulin by 0.04
	- When polonium dips below 0.46 or novichok dips below 0.55, decrement chalk by 0.05
	- When Amanita_Mushrooms dips below 0.25, raise chalk by 0.01


Your conditional statements should consider the following poisons:

	- Amanita_Mushrooms
	- spider_venom
	- novichok
	- polonium


Your conditional statements should modify the following antidotes:

	- plasma
	- SodiumBicarbonate
	- insulin
	- chalk


- There are many ways to complete this task but you should only use the following commands and operators:

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
var spider_venom;
var novichok;
var polonium;


//Declare the antidote variables
var plasma;
var SodiumBicarbonate;
var insulin;
var chalk;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	Amanita_Mushrooms = 0.5;
	spider_venom = 0.5;
	novichok = 0.5;
	polonium = 0.5;
	plasma = 0.5;
	SodiumBicarbonate = 0.5;
	insulin = 0.5;
	chalk = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
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
	if(polonium > 0.4 && Amanita_Mushrooms < 0.38)
	{
		plasma -= 0.03
	}

	if( spider_venom < 0.73 || novichok > 0.44)
	{
		plasma += 0.02
	}

	if(Amanita_Mushrooms < 0.29 || novichok < 0.45)
	{
		SodiumBicarbonate -= 0.05
	}

	if(polonium < 0.66)
	{
		SodiumBicarbonate += 0.01
	}
	
	if(polonium > 0.31)
	{
		insulin -= 0.02
	}
	
	if(spider_venom > 0.55 && Amanita_Mushrooms < 0.28)
	{
		insulin += 0.04
	}

	if(polonium < 0.46 || novichok < 0.55)
	{
		chalk -= 0.05
	}

	if(Amanita_Mushrooms < 0.25)
	{
		chalk += 0.01
	}



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	Amanita_Mushrooms = nextValue(graphs[0],Amanita_Mushrooms);
	spider_venom = nextValue(graphs[1],spider_venom);
	novichok = nextValue(graphs[2],novichok);
	polonium = nextValue(graphs[3],polonium);


	plasma = constrain(plasma, 0, 1);
	SodiumBicarbonate = constrain(SodiumBicarbonate, 0, 1);
	insulin = constrain(insulin, 0, 1);
	chalk = constrain(chalk, 0, 1);


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
	text('spider_venom: ' + nf(spider_venom,1,2), 20,40);
	fill(colors[2]);
	text('novichok: ' + nf(novichok,1,2), 20,60);
	fill(colors[3]);
	text('polonium: ' + nf(polonium,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(plasma,50,'plasma');
	drawBar(SodiumBicarbonate,200,'SodiumBicarbonate');
	drawBar(insulin,350,'insulin');
	drawBar(chalk,500,'chalk');


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
