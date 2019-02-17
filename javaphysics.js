<!DOCTYPE html>
<html>
<title> SHITSHTICKS </title>

 <script>



const HEIGHT = 5;
const WIDTH = 2;

var Boat = {velocity :[0,0], acceleration :[0,0], coors: [0,0]};


//function sinkPlacement(){
//	var sinkX = clientX;
//	var sinkY = clientY;
//
//	if (onmousedown)
//	{
//		sinkCoors = [sinkX, sinkY];
//	}
//} // function sinkPlacement()


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



 </script>

<header>
	YOU WANKER BANKER
</header>

</html>
