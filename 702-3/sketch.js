/*

CaseNum: 702-3

Case 702 - The case of Vanishing Vannevar
Stage 4 - High speed chase

“All units: Vannevar is on the run. They are driving a red car with a Licence_Plate of OKYJ5B.  Pursue at speed.
I repeat pursue at speed.” Okay Vannevar’s game is nearly up. Go get him kid.
Complete the helper functions below to locate, chase and arrest Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of SleuthPI_VehicleObject and the cars in
CarObjectsData to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Move_Vehicle()
{
	/*
	This function should do the following: 
	 - increment SleuthPI_VehicleObject's Distance_Amt property by its Accel_Val property 
	 - add a random amount between -0.04 and 0.04 to SleuthPI_VehicleObject's Shudder_Amt property
	 - use the constrain function to constrain SleuthPI_VehicleObject's Shudder_Amt property to values between 0.06 and 1.25
	 - call the Drive_Car_engine function passing SleuthPI_VehicleObject as an argument
	*/
	SleuthPI_VehicleObject.Distance_Amt += SleuthPI_VehicleObject.Accel_Val;
	SleuthPI_VehicleObject.Shudder_Amt += random(-0.04, 0.04);
	SleuthPI_VehicleObject.Shudder_Amt = constrain(SleuthPI_VehicleObject.Shudder_Amt , 0.06, 1.25);
	Drive_Car_engine(SleuthPI_VehicleObject);

}


function Swap_Lanes(car_obj)
{
	/*
	This function should do the following: 
	 - move car_obj from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use Lane_PosA and Lane_PosB to effect the change.
	 hint: You will need to modify the X_Pos property of car_obj.
	*/
	if(car_obj.X_Pos == Lane_PosA)
	{
		car_obj.X_Pos = Lane_PosB;
	}
	else
	{
		car_obj.X_Pos = Lane_PosA;
	}
}


function Vehicle_IsAhead( CarObjA, CarObjB )
{
	/*
	This function should do the following: 
	 - determine if CarObjA is in the same lane and less than 200px behind CarObjB.
	 - do this by comparing the two cars' Distance_Amt properties
	 - if these requirements are met then return CarObjB. Otherwise return false.
	*/
	if(CarObjA.X_Pos == CarObjB.X_Pos)
	{
		if(abs(CarObjA.Distance_Amt - CarObjB.Distance_Amt) < 200 && CarObjB.Distance_Amt > CarObjA.Distance_Amt)
		{
			return CarObjB;
		}
	}
	return false;
}


function CheckVehicle_BySide( vehicle )
{
	/*
	This function should do the following: 
	 - traverse CarObjectsData and determine if any of the cars are parallel with vehicle.
	 - if a car is found to be parallel to vehicle then return the index of that car object.
	 - cars are considered parallel if the absolute difference between their Distance_Amt properties is less than 25 px and they have non-matching X_Pos properties	*/

	 for(var i =0; i< CarObjectsData.length; i++)
	 {
		if(abs(vehicle.Distance_Amt - CarObjectsData[i].Distance_Amt) < 25 && vehicle.X_Pos != CarObjectsData[i].X_Pos )
		{
			return i
		}
	 }

}


function Identify_Assailant()
{
	/*
	This function should do the following: 
	 - Check cars passing parallel to SleuthPI_VehicleObject to see if they match the Licence_Plate property in the assailant description.
	 - it does this by calling CheckVehicle_BySide.
	 - if a positive result is returned then the Licence_Plate property of the found car is then checked against the assailant description.
	 - if a match is found then the car in question is assigned to the global variable assailant.
	*/
	var g = CheckVehicle_BySide(SleuthPI_VehicleObject)
	if(g != undefined)
	{
		if(CarObjectsData[g].Licence_Plate == 'OKYJ5B')
		{
			assailant = CarObjectsData[g];
		}
	}
}


function Following_Assailant()
{
	/*
	This function should do the following: 
	 - only operate if the global variable assailant is assigned to an object.
	 - scale the Accel_Val property of SleuthPI_VehicleObject by a factor of 1.001.
	 - use the min function to make sure that SleuthPI_VehicleObject's Accel_Val property does not exceed 6.
	 - it should traverse CarObjectsData calling Vehicle_IsAhead for each car to detect any cars in front of SleuthPI_VehicleObject.
	 - if a positive result is returned it should check to see if the Licence_Plate property of that car matches that of assailant.
	 - for a match, Book_Assailant should be called, otherwise call Swap_Lanes.
	*/

	if(assailant != undefined)
	{
		SleuthPI_VehicleObject.Accel_Val = min(SleuthPI_VehicleObject.Accel_Val * 1.001, 6)
		{
			for(var i=0; i< CarObjectsData.length; i++)
			{
				var e = Vehicle_IsAhead(SleuthPI_VehicleObject, CarObjectsData[i])
				if(e != false)
				{
					if(e.Licence_Plate == assailant.Licence_Plate)
					{
						Book_Assailant();
					}
					else
					{
						Swap_Lanes(SleuthPI_VehicleObject);
					}
				}
			}
		}

	}
}


function Book_Assailant()
{
	/*
	This function should do the following: 
	 - set the detained property of assailant to true.
	 - set the Apprehending_Assailant property of SleuthPI_VehicleObject to true.
	 - set the Accel_Val properties of both vehicles to zero.
	*/
	assailant.detained = true;
	SleuthPI_VehicleObject.Apprehending_Assailant = true;
	assailant.Accel_Val = 0;
	SleuthPI_VehicleObject.Accel_Val = 0
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var SleuthPI_VehicleObject;

var roadWidth;
var roadLeftEdge;
var Lane_PosA;
var Lane_PosB;
var carImages = {};
var assailant;

var CarObjectsData = [
{ X_Pos: 300, Y_Pos: 0, Distance_Amt: -200, Car_Model: 'whiteCar', Licence_Plate: 'PC52P1', Accel_Val: 2, exhaust: [  ]} , { X_Pos: 500, Y_Pos: 0, Distance_Amt: 200, Car_Model: 'blueCar', Licence_Plate: '3BDKPJ', Accel_Val: 2, exhaust: [  ]} , { X_Pos: 300, Y_Pos: 0, Distance_Amt: 600, Car_Model: 'redCar', Licence_Plate: 'VUQCL0', Accel_Val: 2, exhaust: [  ]} , { X_Pos: 500, Y_Pos: 0, Distance_Amt: 1000, Car_Model: 'greenCar', Licence_Plate: '5L578S', Accel_Val: 2, exhaust: [  ]} , { X_Pos: 500, Y_Pos: 0, Distance_Amt: 1400, Car_Model: 'whiteCar', Licence_Plate: 'LI5O36', Accel_Val: 2, exhaust: [  ]} , { X_Pos: 300, Y_Pos: 0, Distance_Amt: 1800, Car_Model: 'redCar', Licence_Plate: '7ICFPF', Accel_Val: 2, exhaust: [  ]} , { X_Pos: 300, Y_Pos: 0, Distance_Amt: 2200, Car_Model: 'whiteCar', Licence_Plate: '2VXJU4', Accel_Val: 2, exhaust: [  ]} , { X_Pos: 500, Y_Pos: 0, Distance_Amt: 2600, Car_Model: 'blueCar', Licence_Plate: '7T7R9L', Accel_Val: 2, exhaust: [  ]} , { X_Pos: 500, Y_Pos: 0, Distance_Amt: 3000, Car_Model: 'whiteCar', Licence_Plate: '35CR4C', Accel_Val: 2, exhaust: [  ]} , { X_Pos: 500, Y_Pos: 0, Distance_Amt: 3400, Car_Model: 'redCar', Licence_Plate: '2QW2N0', Accel_Val: 2, exhaust: [  ]} , { X_Pos: 500, Y_Pos: 0, Distance_Amt: 3800, Car_Model: 'redCar', Licence_Plate: 'OKYJ5B', Accel_Val: 2, exhaust: [  ]} , { X_Pos: 500, Y_Pos: 0, Distance_Amt: 4200, Car_Model: 'redCar', Licence_Plate: 'QEYWZ0', Accel_Val: 2, exhaust: [  ]} , { X_Pos: 500, Y_Pos: 0, Distance_Amt: 4600, Car_Model: 'blueCar', Licence_Plate: 'TEJAOZ', Accel_Val: 2, exhaust: [  ]} , { X_Pos: 500, Y_Pos: 0, Distance_Amt: 5000, Car_Model: 'redCar', Licence_Plate: 'LZLS3T', Accel_Val: 2, exhaust: [  ]} , { X_Pos: 300, Y_Pos: 0, Distance_Amt: 5400, Car_Model: 'greenCar', Licence_Plate: '5QNI6X', Accel_Val: 2, exhaust: [  ]} , { X_Pos: 500, Y_Pos: 0, Distance_Amt: 5800, Car_Model: 'whiteCar', Licence_Plate: 'C3TVD0', Accel_Val: 2, exhaust: [  ]} , { X_Pos: 500, Y_Pos: 0, Distance_Amt: 6200, Car_Model: 'whiteCar', Licence_Plate: 'JHLAB8', Accel_Val: 2, exhaust: [  ]} , { X_Pos: 500, Y_Pos: 0, Distance_Amt: 6600, Car_Model: 'redCar', Licence_Plate: '9R903I', Accel_Val: 2, exhaust: [  ]} , { X_Pos: 300, Y_Pos: 0, Distance_Amt: 7000, Car_Model: 'blueCar', Licence_Plate: '3ZGFXF', Accel_Val: 2, exhaust: [  ]} , { X_Pos: 300, Y_Pos: 0, Distance_Amt: 7400, Car_Model: 'greenCar', Licence_Plate: 'DIDW8V', Accel_Val: 2, exhaust: [  ]} 
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
	Lane_PosA = 300;
	Lane_PosB = 500;

	SleuthPI_VehicleObject = 
	{
		X_Pos: roadLeftEdge + roadWidth/4,
		Y_Pos: 550,
		Distance_Amt: 0,
		Accel_Val: 3,
		Shudder_Amt: 0,
		Car_Model: 'detective',
		Licence_Plate: '5L3UTH',
		Apprehending_Assailant: false,
		Tailing_Assailant: false,
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
		if(assailant.detained)
		{
			fill(255);

			text("assailant detained!", width/2, height/2);
		}

	}


	////////////////////// HANDLE DETECTIVE /////////////////////////

	if(!SleuthPI_VehicleObject.Tailing_Assailant&& !SleuthPI_VehicleObject.Apprehending_Assailant)
	{
		Move_Vehicle();
		for(var i = 0; i < CarObjectsData.length; i++)
		{
			var b2b = Vehicle_IsAhead(SleuthPI_VehicleObject, CarObjectsData[i]);
			if(b2b)Swap_Lanes(SleuthPI_VehicleObject);
		}
		Identify_Assailant();
		if(assailant)SleuthPI_VehicleObject.Tailing_Assailant = true;
	}
	else if(!SleuthPI_VehicleObject.Apprehending_Assailant)
	{
		Following_Assailant();
		Move_Vehicle();
	}


	////////////////////// HANDLE ASSAILANT /////////////////////////

	if(assailant)
	{
		if(!assailant.detained)
		{
			assailant.Accel_Val = 5;
			for(var i = 0; i < CarObjectsData.length; i++)
			{
				var b2b = Vehicle_IsAhead(assailant, CarObjectsData[i]);
				if(b2b)
				{
					if(b2b.Licence_Plate != assailant.Licence_Plate)
					{
						Swap_Lanes(assailant);
					}
				}
			}
		}
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < CarObjectsData.length; i++)
	{
		CarObjectsData[i].Distance_Amt += CarObjectsData[i].Accel_Val;
		CarObjectsData[i].Y_Pos = SleuthPI_VehicleObject.Y_Pos - CarObjectsData[i].Distance_Amt + SleuthPI_VehicleObject.Distance_Amt;

		if(assailant)
		{
			if(assailant.detained)
			{
				if(CarObjectsData[i].X_Pos==SleuthPI_VehicleObject.X_Pos)
				{
					if(CarObjectsData[i].Distance_Amt<SleuthPI_VehicleObject.Distance_Amt)
					{
						if(CarObjectsData[i].Distance_Amt-SleuthPI_VehicleObject.Distance_Amt < 200)
						{
							Swap_Lanes(CarObjectsData[i]);
						}
					}
				}
			}
		}

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
		roadLeftEdge + roadWidth/2 , i * 100 + (SleuthPI_VehicleObject.Distance_Amt%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (SleuthPI_VehicleObject.Distance_Amt%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	drawExhaust(SleuthPI_VehicleObject);
	image
	(
		carImages["detective"],
		SleuthPI_VehicleObject.X_Pos - carImages["detective"].width/2 + random(-SleuthPI_VehicleObject.Shudder_Amt, SleuthPI_VehicleObject.Shudder_Amt),
		SleuthPI_VehicleObject.Y_Pos + random(-SleuthPI_VehicleObject.Shudder_Amt, SleuthPI_VehicleObject.Shudder_Amt)
	);

	//draw all other cars

	for(var i = 0; i < CarObjectsData.length; i ++)
	{
		if(CarObjectsData[i].Y_Pos < height && CarObjectsData[i].Y_Pos > -height/2)
		{
			image(
			carImages[CarObjectsData[i].Car_Model],
			CarObjectsData[i].X_Pos - carImages[CarObjectsData[i].Car_Model].width/2,
			CarObjectsData[i].Y_Pos
			);
			Drive_Car_engine(CarObjectsData[i]);

			drawExhaust(CarObjectsData[i]);
		}
	}

}

function Drive_Car_engine(car)
{

	car.exhaust.push({size: 2, x: car.X_Pos, y: car.Y_Pos + carImages[car.Car_Model].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.Accel_Val/3);
		if(car.Car_Model != "detective")car.exhaust[i].y += (SleuthPI_VehicleObject.Accel_Val - car.Accel_Val);
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
