<!DOCTYPE html>
<html>
<body>

class Boat(){
	
	var xCoor = 0;
	var yCoor = 0;
	var xVelocity = 0;
	var yVelocity = 0;

	var coors = [xCoor, yCoor]; //these should be the center of the //boat

	constructor(height, width) {
    this.height = height; 
    this.width = width; 
    xCoor = height / 2; //initial position
    yCoor = width / 2; //initial position

    coors[0] = xCoor;
    coors[1] = yCoor;
  }

	
} //function Boat()

//Get the dimensions of the window

var winHeight = window.innerHeight;
var winWidth = window.innerWidth

function hitWall(){
	if ((xCoor + (this.width/2)) > winWidth){
		xVelocity = -xVelocity
	} //change x directions

	if ((xCoor - (this.width/2)) < winWidth){
		xVelocity = -xVelocity
	} //change x directions

	if ((yCoor + (this.height/2)) > winHeight){
		yVelocity = -yVelocity;
	} //change y directions

	if ((yCoor - (this.height/2)) < winHeight){
		yVelocity = -yVelocity;
	} //change y directions
} //hitWall)()

function sinkPlacement(){
	var sinkX = clientX;
	var sinkY = clientY;

	var sinkCoors;

	if (onmousedown)
	{
		sinkCoors = [sinkX, sinkY];
	}
}

<script>
document.write(Boat(30,60));
</script>

</body>
<html>