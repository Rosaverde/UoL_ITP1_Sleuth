/*

CaseNum: 601-3

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Purple stroke rectangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Magenta stroke ellipses at each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings. If she was within less than 45 pixels of any of the crimes within no more than 1 days of their occurrence then the details should be pushed to the list of possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- if()
- <
- &&
- .push()
- dist()
- abs()
- rect() NB. Draw each rectangle with the point at its center.rectMode(CENTER) is not accepted

- ellipse()

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var Criminal_Record = {
	positionX: [518, 486, 475, 376, 316, 265, 253, 240, 220, 178, 199, 146, 115, 67, 39, 68],
	positionY: [471, 508, 566, 554, 559, 614, 609, 604, 597, 600, 604, 582, 551, 495, 493, 461],
	recordedDay: [12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 17, 18, 20, 21, 22, 24],
};

//Recent crime records.

var Crime_Recorded = [ 
  { point_x : 438, point_y : 420, day : 11, killed_details : 'DEEDEE PHINNEY'},
  { point_x : 408, point_y : 451, day : 11, killed_details : 'TAMICA MAUBERT'},
  { point_x : 408, point_y : 377, day : 13, killed_details : 'NELSON TINTLE'},
  { point_x : 642, point_y : 289, day : 16, killed_details : 'TU DAVISWOOD'},
  { point_x : 623, point_y : 279, day : 16, killed_details : 'MALINDA GOODBURY'},
  { point_x : 95, point_y : 488, day : 17, killed_details : 'KITTY THAXTER'},
  { point_x : 75, point_y : 522, day : 18, killed_details : 'DARBY MYRLE'},
  { point_x : 269, point_y : 597, day : 26, killed_details : 'LAKESHA SYMMES'},
  { point_x : 389, point_y : 554, day : 28, killed_details : 'LINETTE MOHWAWK'},
  { point_x : 484, point_y : 549, day : 2, killed_details : 'LOUISE ZETLAND'},
  { point_x : 496, point_y : 484, day : 9, killed_details : 'PIERRE DORCEY'},
  { point_x : 546, point_y : 463, day : 14, killed_details : 'LAVERNE JACQUELIN'},
  { point_x : 538, point_y : 359, day : 12, killed_details : 'LESLEY MONKSFORD'},
  { point_x : 702, point_y : 412, day : 17, killed_details : 'BRIDGET BROADVIEW'},
  { point_x : 817, point_y : 474, day : 18, killed_details : 'RANDEE CROME'} 
];


function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
	createCanvas(countyMap.width, countyMap.height);
	noFill();
	noStroke();
	image(countyMap, 0,0);

	//add your code below here

// Purple stroke rectangles Criminal_Record
for(var i = 0; i < Criminal_Record.positionX.length; i++)
{
	stroke(128,0,128);
	rect(Criminal_Record.positionX[i] - 5, Criminal_Record.positionY[i] - 5, 10, 10)
}

// Magenta stroke ellipses Crime_Recorded
for(var i = 0; i < Crime_Recorded.length; i++)
{
	stroke(255,0,255);
	ellipse(Crime_Recorded[i].point_x, Crime_Recorded[i].point_y, 10, 10)
}

// less than 45 pixels of any of the crimes within no more than 1 days
// { suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }
for(var i = 0; i < Criminal_Record.positionX.length; i++)
{
	for(var j = 0; j < Crime_Recorded.length; j++)
	{
		if((dist(Crime_Recorded[j].point_x, Crime_Recorded[j].point_y, Criminal_Record.positionX[i],Criminal_Record.positionY[i]) < 45) && ( abs(Crime_Recorded[j].day - Criminal_Record.recordedDay[i]) < 2 ))
		{
			possibleMatches.push({ suspect_x: Criminal_Record.positionX[i] , suspect_y: Criminal_Record.positionY[i] ,crime_x: Crime_Recorded[j].point_x, crime_y: Crime_Recorded[j].point_y , victimName: Crime_Recorded[j].killed_details })
		}
	}
}

	// code to draw the matches ( if any)
	for(let i = 0 ; i < possibleMatches.length ; i++)
	{
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime_x, possibleMatches[i].crime_y, possibleMatches[i].suspect_x, possibleMatches[i].suspect_y);

		noStroke();
		fill(127);
		text(possibleMatches[i].victimName, possibleMatches[i].crime_x + 15, possibleMatches[i].crime_y + 15);
	}
}

//We are not using the draw function this time
