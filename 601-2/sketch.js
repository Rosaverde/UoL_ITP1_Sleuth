/*

CaseNum: 601-2

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, SpringGreen fill ellipses at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Orchid fill triangles centered over each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 30 pixels of any of the crimes then the details should be pushed to possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn. Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- <
- .push()
- ellipse()

- triangle() NB. Draw each triangle with the point roughly at its center.

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var suspectData = [ 
  { PointX : 639, PointY : 288},
  { PointX : 681, PointY : 286},
  { PointX : 712, PointY : 293},
  { PointX : 756, PointY : 310},
  { PointX : 715, PointY : 368},
  { PointX : 701, PointY : 425},
  { PointX : 753, PointY : 436},
  { PointX : 815, PointY : 468},
  { PointX : 795, PointY : 506},
  { PointX : 788, PointY : 497},
  { PointX : 781, PointY : 486},
  { PointX : 768, PointY : 489},
  { PointX : 750, PointY : 500},
  { PointX : 732, PointY : 506},
  { PointX : 714, PointY : 514},
  { PointX : 695, PointY : 531},
  { PointX : 693, PointY : 552},
  { PointX : 654, PointY : 523},
  { PointX : 624, PointY : 500},
  { PointX : 594, PointY : 484},
  { PointX : 555, PointY : 474} 
];


//Recent crime records.

var murdersceneLog = {
	posX: [409, 443, 465, 709, 695, 652, 641, 119, 114, 90, 76, 615, 349, 456],
	posY: [446, 419, 548, 552, 421, 268, 306, 344, 359, 490, 516, 741, 796, 770],
	murderedDetails: ['LARRAINE PEGORD', 'TAMICA MAUBERT', 'ERMELINDA OORIN', 'DRUSILLA WARMAN', 'JENIFFER DEAUVILLE', 'MAJORIE JENI', 'JESSIA PORTOS', 'MALINDA GOODBURY', 'KITTY THAXTER', 'SUMMER CASIMERE', 'RANDEE CROME', 'LESLEY MONKSFORD', 'TU DAVISWOOD', 'DEEDEE PHINNEY'],
};

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
  for(var i = 0; i< suspectData.length; i++)
  {
    fill(0,255,127)
    ellipse(suspectData[i].PointX, suspectData[i].PointY, 10,10)
  }

  for(var i = 0; i < murdersceneLog.posX.length; i++)
  {
    fill(218,112,214)
    triangle(murdersceneLog.posX[i], murdersceneLog.posY[i]- 5,murdersceneLog.posX[i] - 5, murdersceneLog.posY[i] + 5,murdersceneLog.posX[i] + 5, murdersceneLog.posY[i] + 5 )
  }

  for(var i = 0; i < suspectData.length; i++)
  {
    for(var j = 0; j < murdersceneLog.posX.length; j++)
    {
      if(dist(suspectData[i].PointX, suspectData[i].PointY, murdersceneLog.posX[j], murdersceneLog.posY[j]) < 30)
      {
        possibleMatches.push({ crime:{x: murdersceneLog.posX[j], y: murdersceneLog.posY[j], victimName: murdersceneLog.murderedDetails[j]}, suspect:{x: suspectData[i].PointX, y:suspectData[i].PointY} })
      }
    }
  }



	// code to draw the matches ( if any)
	for(let i = 0 ; i < possibleMatches.length ; i++)
	{
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime.x, possibleMatches[i].crime.y, possibleMatches[i].suspect.x, possibleMatches[i].suspect.y);

		noStroke();
		fill(127);
		text(possibleMatches[i].crime.victimName, possibleMatches[i].crime.x + 15, possibleMatches[i].crime.y + 15);
	}
}

//We are not using the draw function this time
