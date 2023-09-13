/*
801
Stage 1: Rigoletto

CaseNum: 801-0

At the rotten core of Console City are a series of secretive orders who pull all the criminal strings. If we get to them we can clean up this town for good. 

Now we have a chance - the Order of The Knuth's will be at the command performance of Rigoletto at the console city Opera house tonight. 
Our person on the inside is working the box office. We’ve got intell and access to the lighting desk. 

- Set the spotlights to shine on the members of the order. 
- Do this by setting the highlighted  property of the element in theatregoers to true. 
- We know that one member of the order is seated in the 9th row, 8th seat
- But you can identify the other 7 members of the order by their trademark scarf. 

There are many ways to complete the case but you should only use theatregoers[#][#] to update the property.


*/

var crowdImg;
var spotlight;

var theatregoers = [ [ { x: 50, y: 50, highlighted: false} , { x: 150, y: 50, highlighted: false} , { x: 250, y: 50, highlighted: false} , { x: 350, y: 50, highlighted: false} , { x: 450, y: 50, highlighted: false} , { x: 550, y: 50, highlighted: false} , { x: 650, y: 50, highlighted: false} , { x: 750, y: 50, highlighted: false} , { x: 850, y: 50, highlighted: false} , { x: 950, y: 50, highlighted: false}  ], [ { x: 50, y: 140, highlighted: false} , { x: 150, y: 140, highlighted: false} , { x: 250, y: 140, highlighted: false} , { x: 350, y: 140, highlighted: false} , { x: 450, y: 140, highlighted: false} , { x: 550, y: 140, highlighted: false} , { x: 650, y: 140, highlighted: false} , { x: 750, y: 140, highlighted: false} , { x: 850, y: 140, highlighted: false} , { x: 950, y: 140, highlighted: false}  ], [ { x: 50, y: 230, highlighted: false} , { x: 150, y: 230, highlighted: false} , { x: 250, y: 230, highlighted: false} , { x: 350, y: 230, highlighted: false} , { x: 450, y: 230, highlighted: false} , { x: 550, y: 230, highlighted: false} , { x: 650, y: 230, highlighted: false} , { x: 750, y: 230, highlighted: false} , { x: 850, y: 230, highlighted: false} , { x: 950, y: 230, highlighted: false}  ], [ { x: 50, y: 320, highlighted: false} , { x: 150, y: 320, highlighted: false} , { x: 250, y: 320, highlighted: false} , { x: 350, y: 320, highlighted: false} , { x: 450, y: 320, highlighted: false} , { x: 550, y: 320, highlighted: false} , { x: 650, y: 320, highlighted: false} , { x: 750, y: 320, highlighted: false} , { x: 850, y: 320, highlighted: false} , { x: 950, y: 320, highlighted: false}  ], [ { x: 50, y: 410, highlighted: false} , { x: 150, y: 410, highlighted: false} , { x: 250, y: 410, highlighted: false} , { x: 350, y: 410, highlighted: false} , { x: 450, y: 410, highlighted: false} , { x: 550, y: 410, highlighted: false} , { x: 650, y: 410, highlighted: false} , { x: 750, y: 410, highlighted: false} , { x: 850, y: 410, highlighted: false} , { x: 950, y: 410, highlighted: false}  ], [ { x: 50, y: 500, highlighted: false} , { x: 150, y: 500, highlighted: false} , { x: 250, y: 500, highlighted: false} , { x: 350, y: 500, highlighted: false} , { x: 450, y: 500, highlighted: false} , { x: 550, y: 500, highlighted: false} , { x: 650, y: 500, highlighted: false} , { x: 750, y: 500, highlighted: false} , { x: 850, y: 500, highlighted: false} , { x: 950, y: 500, highlighted: false}  ], [ { x: 50, y: 590, highlighted: false} , { x: 150, y: 590, highlighted: false} , { x: 250, y: 590, highlighted: false} , { x: 350, y: 590, highlighted: false} , { x: 450, y: 590, highlighted: false} , { x: 550, y: 590, highlighted: false} , { x: 650, y: 590, highlighted: false} , { x: 750, y: 590, highlighted: false} , { x: 850, y: 590, highlighted: false} , { x: 950, y: 590, highlighted: false}  ], [ { x: 50, y: 680, highlighted: false} , { x: 150, y: 680, highlighted: false} , { x: 250, y: 680, highlighted: false} , { x: 350, y: 680, highlighted: false} , { x: 450, y: 680, highlighted: false} , { x: 550, y: 680, highlighted: false} , { x: 650, y: 680, highlighted: false} , { x: 750, y: 680, highlighted: false} , { x: 850, y: 680, highlighted: false} , { x: 950, y: 680, highlighted: false}  ], [ { x: 50, y: 770, highlighted: false} , { x: 150, y: 770, highlighted: false} , { x: 250, y: 770, highlighted: false} , { x: 350, y: 770, highlighted: false} , { x: 450, y: 770, highlighted: false} , { x: 550, y: 770, highlighted: false} , { x: 650, y: 770, highlighted: false} , { x: 750, y: 770, highlighted: false} , { x: 850, y: 770, highlighted: false} , { x: 950, y: 770, highlighted: false}  ], [ { x: 50, y: 860, highlighted: false} , { x: 150, y: 860, highlighted: false} , { x: 250, y: 860, highlighted: false} , { x: 350, y: 860, highlighted: false} , { x: 450, y: 860, highlighted: false} , { x: 550, y: 860, highlighted: false} , { x: 650, y: 860, highlighted: false} , { x: 750, y: 860, highlighted: false} , { x: 850, y: 860, highlighted: false} , { x: 950, y: 860, highlighted: false}  ] ];

function setup()
{
	createCanvas(1100, 1100);

	crowdImg = loadImage("crowd.png");
	spotlight = loadImage("spotlight.png");
}



function draw()
{
	image(crowdImg, 0, 0);
	////////////YOUR CODE GOES HERE////////////////////////

	theatregoers[2][4].highlighted = true;
	theatregoers[3][2].highlighted = true;
	theatregoers[3][4].highlighted = true;
	theatregoers[4][1].highlighted = true;
	theatregoers[8][1].highlighted = true;
	theatregoers[8][7].highlighted = true;
	theatregoers[9][2].highlighted = true;
	theatregoers[9][6].highlighted = true;

	///////////DON'T CHANGE ANY CODE BELOW HERE////////////
	blendMode(BLEND);
	background(80);
	highlight();
	blendMode(DARKEST);
	image(crowdImg, 0, 0);
}

function highlight()
{
	fill(255, 0, 0, 100);

	for (var i = 0; i < theatregoers.length; i++)
	{
		for (var j = 0; j < theatregoers[i].length; j++)
		{
			if (theatregoers[i][j].highlighted)
			{
				image(spotlight, theatregoers[i][j].x, theatregoers[i][j].y, 100 , 100 );
			}
		}
	}
}
