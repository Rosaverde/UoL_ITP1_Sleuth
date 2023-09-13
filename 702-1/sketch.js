/*

CaseNum: 702-1

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of detectiveCarObject and the cars in
carData to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Move_Car() {
	/*
	This function should do the following: 
	 - increment detectiveCarObject's distAmount property by its speedAmt property 
	 - add a random amount between -0.05 and 0.05 to detectiveCarObject's rumbleAmt property
	 - use the constrain function to constrain detectiveCarObject's rumbleAmt property to values between 0.06 and 0.89
	 - call the Turn_Motor function passing detectiveCarObject as an argument
	*/

	detectiveCarObject.distAmount += detectiveCarObject.speedAmt;
	detectiveCarObject.rumbleAmt += random(-0.05, 0.05);
	detectiveCarObject.rumbleAmt = constrain(detectiveCarObject.rumbleAmt, 0.06, 0.89);
	Turn_Motor(detectiveCarObject);
}


function Move_Lanes(carObj) {
	/*
	This function should do the following: 
	 - move carObj from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use lane_positionA and lane_positionB to effect the change.
	 - finally you should return carObj at the end of the function.
	 hint: You will need to modify the coordinateX property of carObj.
	*/

	if(carObj.coordinateX == lane_positionA)
	{
		carObj.coordinateX = lane_positionB
	}
	else
	(
		carObj.coordinateX = lane_positionA
	)
	return carObj;

}


function Search_Infront(carA, carB) {
	/*
	This function should do the following: 
	 - determine if carA is in the same lane and less than 200px behind carB.
	 - do this by comparing the two cars' distAmount properties
	 - if these requirements are met then return carB. Otherwise return false.
	*/
	if(carA.coordinateX == carB.coordinateX)
	{
		if((carB.distAmount - carA.distAmount) < 200 && ( carB.distAmount - carA.distAmount) > 0)
		{

			return carB
		}
		else
		{
			return false
		}
	}
	else
	{
		false
	}
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var detectiveCarObject;
var roadWidth;
var roadLeftEdge;
var lane_positionA;
var lane_positionB;
var carImages = {};

var carData = [
	{ coordinateX: 300, coordinateY: 0, distAmount: -200, carClassification: 'greenCar', numberPlate: 'S26EER', speedAmt: 2, exhaust: [] },
	{ coordinateX: 300, coordinateY: 0, distAmount: 200, carClassification: 'greenCar', numberPlate: 'HBLUCD', speedAmt: 2, exhaust: [] },
	{ coordinateX: 500, coordinateY: 0, distAmount: 600, carClassification: 'blueCar', numberPlate: '7XL6AJ', speedAmt: 2, exhaust: [] },
	{ coordinateX: 300, coordinateY: 0, distAmount: 1000, carClassification: 'redCar', numberPlate: 'HBNMEY', speedAmt: 2, exhaust: [] },
	{ coordinateX: 500, coordinateY: 0, distAmount: 1400, carClassification: 'whiteCar', numberPlate: 'WVVYQO', speedAmt: 2, exhaust: [] },
	{ coordinateX: 300, coordinateY: 0, distAmount: 1800, carClassification: 'whiteCar', numberPlate: '2Y5MF8', speedAmt: 2, exhaust: [] },
	{ coordinateX: 300, coordinateY: 0, distAmount: 2200, carClassification: 'redCar', numberPlate: 'IO2AHK', speedAmt: 2, exhaust: [] },
	{ coordinateX: 300, coordinateY: 0, distAmount: 2600, carClassification: 'redCar', numberPlate: 'H5ODEP', speedAmt: 2, exhaust: [] },
	{ coordinateX: 500, coordinateY: 0, distAmount: 3000, carClassification: 'whiteCar', numberPlate: '1MQ4XX', speedAmt: 2, exhaust: [] },
	{ coordinateX: 300, coordinateY: 0, distAmount: 3400, carClassification: 'greenCar', numberPlate: 'ZW39E2', speedAmt: 2, exhaust: [] },
	{ coordinateX: 300, coordinateY: 0, distAmount: 3800, carClassification: 'redCar', numberPlate: 'AM3C2L', speedAmt: 2, exhaust: [] },
	{ coordinateX: 500, coordinateY: 0, distAmount: 4200, carClassification: 'whiteCar', numberPlate: 'OJ7UPK', speedAmt: 2, exhaust: [] },
	{ coordinateX: 300, coordinateY: 0, distAmount: 4600, carClassification: 'whiteCar', numberPlate: 'H0E802', speedAmt: 2, exhaust: [] },
	{ coordinateX: 500, coordinateY: 0, distAmount: 5000, carClassification: 'whiteCar', numberPlate: 'N16F2M', speedAmt: 2, exhaust: [] },
	{ coordinateX: 500, coordinateY: 0, distAmount: 5400, carClassification: 'greenCar', numberPlate: '64NQMM', speedAmt: 2, exhaust: [] },
	{ coordinateX: 300, coordinateY: 0, distAmount: 5800, carClassification: 'greenCar', numberPlate: '78822D', speedAmt: 2, exhaust: [] },
	{ coordinateX: 500, coordinateY: 0, distAmount: 6200, carClassification: 'greenCar', numberPlate: 'CMYSE8', speedAmt: 2, exhaust: [] },
	{ coordinateX: 300, coordinateY: 0, distAmount: 6600, carClassification: 'greenCar', numberPlate: 'G5AXF1', speedAmt: 2, exhaust: [] }, 
	{ coordinateX: 500, coordinateY: 0, distAmount: 7000, carClassification: 'blueCar', numberPlate: 'FZXIR7', speedAmt: 2, exhaust: [] }, 
	{ coordinateX: 500, coordinateY: 0, distAmount: 7400, carClassification: 'blueCar', numberPlate: 'SFYIH4', speedAmt: 2, exhaust: [] }
];



function preload() {
	var carTypes = [
		"detective",
		"redCar",
		"greenCar",
		"blueCar",
		"whiteCar",
	];

	for (var i = 0; i < carTypes.length; i++) {
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup() {
	createCanvas(800, 800);

	roadWidth = 400;
	roadLeftEdge = 200;
	lane_positionA = 300;
	lane_positionB = 500;

	detectiveCarObject =
	{
		coordinateX: roadLeftEdge + roadWidth / 4,
		coordinateY: 550,
		distAmount: 0,
		speedAmt: 3,
		rumbleAmt: 0,
		carClassification: 'detective',
		numberPlate: '5L3UTH',
		exhaust: []
	}


}



function draw() {
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	Move_Car();
	for (var i = 0; i < carData.length; i++) {
		var b2b = Search_Infront(detectiveCarObject, carData[i]);
		if (b2b) Move_Lanes(detectiveCarObject);
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for (var i = 0; i < carData.length; i++) {
		carData[i].distAmount += carData[i].speedAmt;
		carData[i].coordinateY = detectiveCarObject.coordinateY - carData[i].distAmount + detectiveCarObject.distAmount;
	}

}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad() {
	stroke(100);
	fill(50);
	rect(roadLeftEdge, 0, roadWidth, 800);
	stroke(255);

	for (var i = -1; i < 20; i++) {
		line(
			roadLeftEdge + roadWidth / 2, i * 100 + (detectiveCarObject.distAmount % 100),
			roadLeftEdge + roadWidth / 2, i * 100 + 70 + (detectiveCarObject.distAmount % 100)
		);
	}
}

function drawCars() {
	//draw the detective car

	image
	drawExhaust(detectiveCarObject);
	image
		(
			carImages["detective"],
			detectiveCarObject.coordinateX - carImages["detective"].width / 2 + random(-detectiveCarObject.rumbleAmt, detectiveCarObject.rumbleAmt),
			detectiveCarObject.coordinateY + random(-detectiveCarObject.rumbleAmt, detectiveCarObject.rumbleAmt)
		);

	//draw all other cars

	for (var i = 0; i < carData.length; i++) {
		if (carData[i].coordinateY < height && carData[i].coordinateY > -height / 2) {
			image(
				carImages[carData[i].carClassification],
				carData[i].coordinateX - carImages[carData[i].carClassification].width / 2,
				carData[i].coordinateY
			);
			Turn_Motor(carData[i]);

			drawExhaust(carData[i]);
		}
	}

}

function Turn_Motor(car) {

	car.exhaust.push({ size: 2, x: car.coordinateX, y: car.coordinateY + carImages[car.carClassification].height });

	for (var i = car.exhaust.length - 1; i >= 0; i--) {

		car.exhaust[i].y += max(0.75, car.speedAmt / 3);
		if (car.carClassification != "detective") car.exhaust[i].y += (detectiveCarObject.speedAmt - car.speedAmt);
		car.exhaust[i].x += random(-1, 1);
		car.exhaust[i].size += 0.5;

		if (car.exhaust[i].y > height || car.exhaust[i].y < 0) {
			car.exhaust.splice(i, 1);
		}
	}
}


function drawExhaust(car) {
	noStroke();
	for (var i = 0; i < car.exhaust.length; i++) {
		var alpha = map(car.exhaust[i].size, 0, 40, 50, 0);
		fill(125, alpha);
		ellipse(car.exhaust[i].x + 20, car.exhaust[i].y, car.exhaust[i].size);

	}
}
