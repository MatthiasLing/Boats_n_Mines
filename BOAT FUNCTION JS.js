

const HEIGHT = 5;
const WIDTH = 2;


function makeBoat(r)
{
	var boat = {
		radius: r,
		velocity: [0,0],
		acceleration :[0,0],
		coors: [0,0]
	}

	return boat;
}

var Boat = makeBoat(50);
//var Boat = {velocity :[0,0], acceleration :[0,0], coors: [0,0]};

function onMouseDown(event){

	console.log(event.screenX);
	console.log(event.screenY);

	sinkcoords(event.screenX, event.screenY);

}

function makeRandomArray (){

	var array = [];

	for (var i=0;i<20;i++){

			var point = {
				x: getRandom(1,window.innerWidth),
				y: getRandom(1,window.innerHeight)
			}

			array.push(point);
	}
	return array;
}


function getRandom(a,b){

	rand=Math.random();

	return a + Math.floor((b-a)*rand);
}

var points = makeRandomArray();
console.log(points);

function addElement (x,y) { 
  // create a new div element 
  var newDiv = document.createElement("div"); 
  newDiv.style.position="absolute"; 
  newDiv.style.left = x + "px";
  newDiv.style.top = y + "px";
  // and give it some content 
  var newContent = document.createTextNode("*"); 
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 
}


for (let i =0; i<points.length; i++)
{
	point = points[i];
	addElement(point.x, point.y);

}

function sinkcoords(x,y){
	var sinkcoords = new point (x, y);
	return sinkcoords;
}
var sinkCoors = [5, 5];

//rahims gonna insert physics shit here
	const k = 3;
	const delt = .1;

var xunit;
var yunit;


	xdistance = (sinkCoors[0] - Boat.coors[0]);
	ydistance = (sinkCoors[1] - Boat.coors[1]);
	tdistance = Math.sqrt((Math.pow(xdistance,2))+(Math.pow(ydistance,2)));
	
	xunit = xdistance / tdistance;
	yunit = ydistance / tdistance;
	


//function tickRunning(){
	for(var tick = 0; tick < 10; tick++)
		{
			//document.write(accx + ",  " + accy);
			//document.write(velx + ",  " + vely);
			document.write(Boat.coors[1]  + "<br>" );
			//+ "  " + posy

			Boat.acceleration[0] = xunit * k * tick;
			Boat.acceleration[1] = yunit * k * tick;

			Boat.velocity[0] = Boat.velocity[0] + Boat.acceleration[0]*delt;
			Boat.velocity[1] = Boat.velocity[1] + Boat.acceleration[1]*delt;

			Boat.coors[0] = Boat.coors[0] + Boat.velocity[0]*delt;
			Boat.coors[1] = Boat.coors[1] + Boat.velocity[1]*delt;

		
		}
//}

//Get the dimensions of the window

var winHeight = window.innerHeight;
var winWidth = window.innerWidth;

function hitWall(){
	if ((Boat.coors[0] + (WIDTH/2)) > winWidth){
		Boat.velocity[0] = -Boat.velocity[0];
		
	} //change x directions

	if ((Boat.coors[0] - (WIDTH/2)) < winWidth){
		Boat.velocity[0] = -Boat.velocity[0];
		
	} //change x directions

	if ((Boat.coors[1] + (HEIGHT/2)) > winHeight){
		Boat.velocity[1] = -Boat.velocity[1];
		
		} //change y directions

	if ((Boat.coors[1] - (HEIGHT/2)) < winHeight){
		Boat.velocity[1] = -Boat.velocity[1];
		
	} //change y directions
} //hitWall)()
