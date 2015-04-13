<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Check-in App</title>
		<link rel="stylesheet" href="css/style.css" type="text/css" media="screen">
    </head>
    <body>
		<!--<img src="img/logo.png">-->
		<!--<h1></h1>-->
		<div>
			<div id="col1" ><video id="video" autoplay></video></div>
			<div id="col2">
				<span id="msj"></span>
				<div id="tarjeta">
					<div id="resultado" ></div>
					<img id="img">
					<div id="googleMap" style="width:100%;height:180px;"></div>
				</div>
				
					
			</div>
		</div>
		<div id="col3">

			<div id="tiempo"></div>

			<canvas id="qr-canvas"></canvas>

		</div>


		
		
		<script src="http://maps.googleapis.com/maps/api/js"></script>
		<script src="js/jquery.min.js"></script>
		
		<script type="text/javascript" src="js/libs/grid.js"></script>
		<script type="text/javascript" src="js/libs/version.js"></script>
		<script type="text/javascript" src="js/libs/detector.js"></script>
		<script type="text/javascript" src="js/libs/formatinf.js"></script>
		<script type="text/javascript" src="js/libs/errorlevel.js"></script>
		<script type="text/javascript" src="js/libs/bitmat.js"></script>
		<script type="text/javascript" src="js/libs/datablock.js"></script>
		<script type="text/javascript" src="js/libs/bmparser.js"></script>
		<script type="text/javascript" src="js/libs/datamask.js"></script>
		<script type="text/javascript" src="js/libs/rsdecoder.js"></script>
		<script type="text/javascript" src="js/libs/gf256poly.js"></script>
		<script type="text/javascript" src="js/libs/gf256.js"></script>
		<script type="text/javascript" src="js/libs/decoder.js"></script>
		<script type="text/javascript" src="js/libs/qrcode.js"></script>
		<script type="text/javascript" src="js/libs/findpat.js"></script>
		<script type="text/javascript" src="js/libs/alignpat.js"></script>
		<script type="text/javascript" src="js/libs/databr.js"></script>
		
		<script src="js/app.js"></script>
		<script>
			document.addEventListener("DOMContentLoaded", initApp, false);
		</script>
		
    </body>
</html>
