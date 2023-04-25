/*

CaseNum: 401-3

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final stand he has set up his own cupcake shop. 
The laced cupcakes look delicious but they are extremely dangerous. 
Just a brief whiff of one can induce a series of deadly symptoms. 
This is Norbert’s most complex poison to date, so you’ll have to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- When nerve_gas goes above 0.75, formaldehyde goes above 0.75, and also warfarin goes above 0.37, decrease antivenom by 0.03
	- When botulinium dips below 0.33 or lead goes above 0.49, whilst at the same time, mercury dips below 0.55 or novichok goes above 0.62, try increasing antivenom by 0.01
	- When formaldehyde goes above 0.52 or novichok goes above 0.63, or on the other hand, mercury dips below 0.34 and arsenic dips below 0.55, try decreasing SodiumBicarbonate by 0.01
	- If botulinium goes above 0.42 and lead goes above 0.31, or on the other hand, nerve_gas dips below 0.3 or warfarin dips below 0.39, increment SodiumBicarbonate by 0.01
	- If nerve_gas dips below 0.33, whilst at the same time, warfarin goes above 0.28 or lead dips below 0.25, decrease sulphates by 0.02
	- When novichok dips below 0.47, botulinium dips below 0.63, and also arsenic goes above 0.69, increase sulphates by 0.03
	- When botulinium dips below 0.26 and warfarin goes above 0.63, or on the other hand, lead dips below 0.62 and arsenic dips below 0.33, decrease charcoal by 0.02
	- If either mercury dips below 0.36, nerve_gas goes above 0.61, formaldehyde dips below 0.28, or perhaps novichok goes above 0.36, increase charcoal by 0.04
	- When either arsenic goes above 0.58, nerve_gas goes above 0.35, or perhaps warfarin goes above 0.53, reduce HydrochloricAcid by 0.03
	- When either botulinium goes above 0.32, lead dips below 0.54, novichok goes above 0.33, or perhaps formaldehyde dips below 0.74, try increasing HydrochloricAcid by 0.03


Your conditional statements should consider the following poisons:

	- formaldehyde
	- warfarin
	- nerve_gas
	- lead
	- novichok
	- arsenic
	- mercury
	- botulinium


Your conditional statements should modify the following antidotes:

	- antivenom
	- SodiumBicarbonate
	- sulphates
	- charcoal
	- HydrochloricAcid


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
var formaldehyde;
var warfarin;
var nerve_gas;
var lead;
var novichok;
var arsenic;
var mercury;
var botulinium;


//Declare the antidote variables
var antivenom;
var SodiumBicarbonate;
var sulphates;
var charcoal;
var HydrochloricAcid;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	formaldehyde = 0.5;
	warfarin = 0.5;
	nerve_gas = 0.5;
	lead = 0.5;
	novichok = 0.5;
	arsenic = 0.5;
	mercury = 0.5;
	botulinium = 0.5;
	antivenom = 0.5;
	SodiumBicarbonate = 0.5;
	sulphates = 0.5;
	charcoal = 0.5;
	HydrochloricAcid = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
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
if(nerve_gas > 0.75 && formaldehyde > 0.75 && warfarin > 0.37)
{
	antivenom -= 0.03
}

if((botulinium < 0.33 || lead > 0.49) && (mercury < 0.55 || novichok > 0.62))
{
	antivenom += 0.01
}

if((formaldehyde > 0.52 || novichok > 0.63) || (mercury < 0.34 && arsenic < 0.55))
{
	SodiumBicarbonate -= 0.01
}

if((botulinium > 0.42 && lead > 0.31) || (nerve_gas < 0.3 || warfarin < 0.39))
{ 
	 SodiumBicarbonate += 0.01
}

if(nerve_gas < 0.33 && (warfarin > 0.28 || lead < 0.25))
{
	sulphates -= 0.02
}

if(novichok < 0.47 && botulinium < 0.63 && arsenic > 0.69)
{
	sulphates += 0.03
}

if((botulinium < 0.26 && warfarin > 0.63) || (lead < 0.62 && arsenic < 0.33))
{ 
	charcoal -= 0.02
}

if(mercury < 0.36 || nerve_gas > 0.61 || formaldehyde < 0.28 || novichok > 0.36)
{
	charcoal += 0.04
}

if( arsenic > 0.58 || nerve_gas > 0.35 || warfarin > 0.53)
{
	HydrochloricAcid -= 0.03
}

if(botulinium > 0.32 || lead < 0.54 || novichok > 0.33||formaldehyde < 0.74)
{
	HydrochloricAcid += 0.03
}

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	formaldehyde = nextValue(graphs[0],formaldehyde);
	warfarin = nextValue(graphs[1],warfarin);
	nerve_gas = nextValue(graphs[2],nerve_gas);
	lead = nextValue(graphs[3],lead);
	novichok = nextValue(graphs[4],novichok);
	arsenic = nextValue(graphs[5],arsenic);
	mercury = nextValue(graphs[6],mercury);
	botulinium = nextValue(graphs[7],botulinium);


	antivenom = constrain(antivenom, 0, 1);
	SodiumBicarbonate = constrain(SodiumBicarbonate, 0, 1);
	sulphates = constrain(sulphates, 0, 1);
	charcoal = constrain(charcoal, 0, 1);
	HydrochloricAcid = constrain(HydrochloricAcid, 0, 1);


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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,20);
	fill(colors[1]);
	text('warfarin: ' + nf(warfarin,1,2), 20,40);
	fill(colors[2]);
	text('nerve_gas: ' + nf(nerve_gas,1,2), 20,60);
	fill(colors[3]);
	text('lead: ' + nf(lead,1,2), 20,80);
	fill(colors[4]);
	text('novichok: ' + nf(novichok,1,2), 20,100);
	fill(colors[5]);
	text('arsenic: ' + nf(arsenic,1,2), 20,120);
	fill(colors[6]);
	text('mercury: ' + nf(mercury,1,2), 20,140);
	fill(colors[7]);
	text('botulinium: ' + nf(botulinium,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(antivenom,50,'antivenom');
	drawBar(SodiumBicarbonate,200,'SodiumBicarbonate');
	drawBar(sulphates,350,'sulphates');
	drawBar(charcoal,500,'charcoal');
	drawBar(HydrochloricAcid,650,'HydrochloricAcid');


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
