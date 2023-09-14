/*

CaseNum: 702-2

Case 702 - The case of Vanishing Vannevar
Stage 3 - Where's Vannevar

“All units: Vannevar’s car has been sighted. It is a blue car with a NumberPlate of PRV05R. Approach with
caution.” This is your big chance kid. Don’t blow it. Complete the helper functions below to
drive through the traffic and locate Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of SleuthPICar and the cars in
VehicleObjectArray to understand their properties.

Improvements:
There are problems with checkCar_isInfront: the function is not returning the correct values when 
the cars are immediately behind each other.
There are problems with check_assailant: the function is not detecting the assailant.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function drive_car()
{
	/*
	This function should do the following: 
	 - increment SleuthPICar's DistanceTravelled property by its AccelAmt property 
	 - add a random amount between -0.04 and 0.04 to SleuthPICar's EngineShudderVal property
	 - use the constrain function to constrain SleuthPICar's EngineShudderVal property to values between 0.07 and 1.24
	 - call the turnover_car_motor function passing SleuthPICar as an argument
	*/
	SleuthPICar.DistanceTravelled += SleuthPICar.AccelAmt;
	SleuthPICar.EngineShudderVal += random(-0.04, 0.04);
	SleuthPICar.EngineShudderVal = constrain(SleuthPICar.EngineShudderVal, 0.07, 1.24);
	turnover_car_motor(SleuthPICar);
}


function swap_lanes(target_vehicle)
{
	/*
	This function should do the following: 
	 - move target_vehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LanePosA and LanePosB to effect the change.
	 - finally you should return target_vehicle at the end of the function.
	 hint: You will need to modify the XPosition property of target_vehicle.
	*/
	if(target_vehicle.XPosition == LanePosA)
	{
		target_vehicle.XPosition = LanePosB
	}
	else
	{
		target_vehicle.XPosition = LanePosA
	}
	return target_vehicle
}


function checkCar_isInfront( target_car )
{
	/*
	This function should do the following: 
	 - determine if target_car is in the same lane and less than 200px behind any of the cars in VehicleObjectArray.
	 - do this by traversing VehicleObjectArray and comparing each car's DistanceTravelled property to that of target_car.
	 - use the NumberPlate property of each car to ignore cars that match target_car.
	 - if you find a car that matches these requirements then return the NumberPlate property for the car. Otherwise return false.
	*/
	for(var i=0; i< VehicleObjectArray.length; i++)
	{
		if(target_car.XPosition == VehicleObjectArray[i].XPosition)
		{
			// fill(255,0,0);
			// ellipse(VehicleObjectArray[i].XPosition, VehicleObjectArray[i].YPosition, 50);
			if(abs(VehicleObjectArray[i].DistanceTravelled - target_car.DistanceTravelled) <= 200 && VehicleObjectArray[i].DistanceTravelled > target_car.DistanceTravelled)
			{
				if(VehicleObjectArray[i].NumberPlate != target_car.NumberPlate)
				{
					// fill(0,255,0)
					// ellipse(VehicleObjectArray[i].XPosition, VehicleObjectArray[i].YPosition, 30)
					return VehicleObjectArray[i].NumberPlate
				}
			}
		}
	}
	return false;
}


function checkCar_parallel( TargetCarA, TargetCarB )
{
	/*
	This function should do the following: 
	 - determine if TargetCarA is parallel with TargetCarB.
	 - if TargetCarA is found to be parallel to TargetCarB then return the NumberPlate property of TargetCarB.
	 - cars are considered parallel if the absolute difference between their DistanceTravelled properties is less than 25 px and they have non-matching XPosition properties	*/
	if(abs(TargetCarA.DistanceTravelled - TargetCarB.DistanceTravelled) < 25 && TargetCarA.XPosition != TargetCarB.XPosition)
	{
		return TargetCarB.NumberPlate
	}
}


function check_assailant()
{
	/*
	This function should do the following: 
	 - Check cars passing parallel to SleuthPICar to see if they match the NumberPlate property in the assailant description.
	 - it does this by traversing VehicleObjectArray and calling checkCar_parallel for each car
.	 - if a positive result is returned then the NumberPlate property of the found car is then checked against the assailant description.
	 - if a match is found then the object of the car in question is returned.
	 - otherwise return false.
	*/
	for(var i =0; i< VehicleObjectArray.length; i++)
	{
		var plate = checkCar_parallel(SleuthPICar, VehicleObjectArray[i]);
		if(plate == 'PRV05R')
		{
			return VehicleObjectArray[i]
		}
	}
	return false;
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var SleuthPICar;

var roadWidth;
var roadLeftEdge;
var LanePosA;
var LanePosB;
var carImages = {};
var assailant;

var VehicleObjectArray = [
{ XPosition: 300, YPosition: 0, DistanceTravelled: -200, CarClassification: 'whiteCar', NumberPlate: 'P1OFJO', AccelAmt: 2, exhaust: [  ]} , { XPosition: 300, YPosition: 0, DistanceTravelled: 200, CarClassification: 'redCar', NumberPlate: 'A9C5UX', AccelAmt: 2, exhaust: [  ]} , { XPosition: 500, YPosition: 0, DistanceTravelled: 600, CarClassification: 'blueCar', NumberPlate: 'LJQR8U', AccelAmt: 2, exhaust: [  ]} , { XPosition: 300, YPosition: 0, DistanceTravelled: 1000, CarClassification: 'redCar', NumberPlate: 'BIUC5N', AccelAmt: 2, exhaust: [  ]} , { XPosition: 500, YPosition: 0, DistanceTravelled: 1400, CarClassification: 'whiteCar', NumberPlate: '1ITGOF', AccelAmt: 2, exhaust: [  ]} , { XPosition: 500, YPosition: 0, DistanceTravelled: 1800, CarClassification: 'whiteCar', NumberPlate: 'TEI7QK', AccelAmt: 2, exhaust: [  ]} , { XPosition: 500, YPosition: 0, DistanceTravelled: 2200, CarClassification: 'blueCar', NumberPlate: 'PRV05R', AccelAmt: 2, exhaust: [  ]} , { XPosition: 300, YPosition: 0, DistanceTravelled: 2600, CarClassification: 'greenCar', NumberPlate: '71V1L9', AccelAmt: 2, exhaust: [  ]} , { XPosition: 500, YPosition: 0, DistanceTravelled: 3000, CarClassification: 'whiteCar', NumberPlate: '84VRU7', AccelAmt: 2, exhaust: [  ]} , { XPosition: 500, YPosition: 0, DistanceTravelled: 3400, CarClassification: 'redCar', NumberPlate: 'CBMN0E', AccelAmt: 2, exhaust: [  ]} , { XPosition: 500, YPosition: 0, DistanceTravelled: 3800, CarClassification: 'redCar', NumberPlate: '5PE3D2', AccelAmt: 2, exhaust: [  ]} , { XPosition: 500, YPosition: 0, DistanceTravelled: 4200, CarClassification: 'greenCar', NumberPlate: 'HO2DA4', AccelAmt: 2, exhaust: [  ]} , { XPosition: 500, YPosition: 0, DistanceTravelled: 4600, CarClassification: 'redCar', NumberPlate: 'E7A70G', AccelAmt: 2, exhaust: [  ]} , { XPosition: 300, YPosition: 0, DistanceTravelled: 5000, CarClassification: 'whiteCar', NumberPlate: '0WS9GM', AccelAmt: 2, exhaust: [  ]} , { XPosition: 500, YPosition: 0, DistanceTravelled: 5400, CarClassification: 'greenCar', NumberPlate: 'LDYG86', AccelAmt: 2, exhaust: [  ]} , { XPosition: 500, YPosition: 0, DistanceTravelled: 5800, CarClassification: 'redCar', NumberPlate: 'B1H9KF', AccelAmt: 2, exhaust: [  ]} , { XPosition: 500, YPosition: 0, DistanceTravelled: 6200, CarClassification: 'redCar', NumberPlate: 'HS8DME', AccelAmt: 2, exhaust: [  ]} , { XPosition: 500, YPosition: 0, DistanceTravelled: 6600, CarClassification: 'greenCar', NumberPlate: 'OG79DU', AccelAmt: 2, exhaust: [  ]} , { XPosition: 500, YPosition: 0, DistanceTravelled: 7000, CarClassification: 'whiteCar', NumberPlate: 'IS79KS', AccelAmt: 2, exhaust: [  ]} , { XPosition: 300, YPosition: 0, DistanceTravelled: 7400, CarClassification: 'whiteCar', NumberPlate: 'PH5WT7', AccelAmt: 2, exhaust: [  ]} 
];



function preload()
{

	var carTypes = [
		"detective",
		"redCar",
		"greenCar",
		"blueCar",
		"whiteCar",
	];


	for(var i = 0; i < carTypes.length; i++)
	{
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup()
{
	createCanvas(800,800);
	textSize(30);
	textAlign(CENTER);

	roadWidth = 400;
	roadLeftEdge = 200;
	LanePosA = 300;
	LanePosB = 500;

	SleuthPICar = 
	{
		XPosition: roadLeftEdge + roadWidth/4,
		YPosition: 550,
		DistanceTravelled: 0,
		AccelAmt: 3,
		EngineShudderVal: 0,
		CarClassification: 'detective',
		NumberPlate: '5L3UTH',
		exhaust: []
	}
}



function draw()
{
	background(0);

	drawRoad();
	drawCars();

	if(assailant)
	{
		fill(255);

		text("assailant found !", width/2, height/2);
		return;
	}

	////////////////////// HANDLE DETECTIVE /////////////////////////

	drive_car();
	var b2b = checkCar_isInfront( SleuthPICar );
	if(b2b)swap_lanes(SleuthPICar);
	var a = check_assailant();
	if(a != false)assailant = a;


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < VehicleObjectArray.length; i++)
	{
		VehicleObjectArray[i].DistanceTravelled += VehicleObjectArray[i].AccelAmt;
		VehicleObjectArray[i].YPosition = SleuthPICar.YPosition - VehicleObjectArray[i].DistanceTravelled + SleuthPICar.DistanceTravelled;
	}

}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad()
{
	stroke(100);
	fill(50);
	rect(roadLeftEdge,0,roadWidth,800);
	stroke(255);

	for(var i = -1; i < 20; i++)
	{
		line(
		roadLeftEdge + roadWidth/2 , i * 100 + (SleuthPICar.DistanceTravelled%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (SleuthPICar.DistanceTravelled%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(SleuthPICar);
	image
	(
		carImages["detective"],
		SleuthPICar.XPosition - carImages["detective"].width/2 + random(-SleuthPICar.EngineShudderVal, SleuthPICar.EngineShudderVal),
		SleuthPICar.YPosition + random(-SleuthPICar.EngineShudderVal, SleuthPICar.EngineShudderVal)
	);

	//draw all other cars

	for(var i = 0; i < VehicleObjectArray.length; i ++)
	{
		if(VehicleObjectArray[i].YPosition < height && VehicleObjectArray[i].YPosition > -height/2)
		{
			image(
			carImages[VehicleObjectArray[i].CarClassification],
			VehicleObjectArray[i].XPosition - carImages[VehicleObjectArray[i].CarClassification].width/2,
			VehicleObjectArray[i].YPosition
			);
			turnover_car_motor(VehicleObjectArray[i]);

			drawExhaust(VehicleObjectArray[i]);
		}
	}

}

function turnover_car_motor(car)
{

	car.exhaust.push({size: 2, x: car.XPosition, y: car.YPosition + carImages[car.CarClassification].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.AccelAmt/3);
		if(car.CarClassification != "detective")car.exhaust[i].y += (SleuthPICar.AccelAmt - car.AccelAmt);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height || car.exhaust[i].y < 0)
		{
			car.exhaust.splice(i,1);
		}
	}
}


function drawExhaust(car)
{
		noStroke();
		for(var i = 0; i < car.exhaust.length; i++)
		{
				var alpha = map(car.exhaust[i].size, 0, 40, 50,0);
				fill(125,alpha);
				ellipse(car.exhaust[i].x + 20, car.exhaust[i].y , car.exhaust[i].size);

		}
}
