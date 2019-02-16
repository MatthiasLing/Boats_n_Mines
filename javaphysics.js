<!DOCTYPE html>
<html>
<title> SHITSHTICKS </title>

 <script>
		
		const k = 3;
		const delt = .1;


		 var xofboat=2;
		 var xofsink=5;
		 var yofboat=2;
		 var yofsink=6;
		 var xdistance;
		 var ydistance;
		 var tdistance;

		 xdistance = (xofsink - xofboat);
		 ydistance = (yofsink- yofboat);
		 tdistance = Math.sqrt((Math.pow(xdistance,2))+(Math.pow(ydistance,2)));
		//document.write(tdistance);

		var xunit = xdistance / tdistance;
		var yunit = ydistance / tdistance;

		var accx = 0;
		var accy = 0;

		var velx = -5;
		var vely = -25;

		var posx = 0;
		var posy = 0;

		for(var tick = 0; tick != 100; tick++)
		{
			//document.write(accx + ",  " + accy);
			//document.write(velx + ",  " + vely);
			document.write(posx  + "<br>" );
			//+ "  " + posy

			var accx = xunit * k * tick;
			var accy = yunit * k * tick;

			var velx = velx + accx*delt;
			var vely = vely + accy*delt;

			var posx = posx + velx*delt;
			var posy = posy + vely*delt;

		
		}


 </script>


</html>
