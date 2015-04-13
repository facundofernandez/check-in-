
(function () {
  'use strict';

  var qr = new QCodeDecoder();

  if (!(qr.isCanvasSupported() && qr.hasGetUserMedia())) {
	alert('Your browser doesn\'t match the required specs.');
	throw new Error('Canvas and getUserMedia are required');
  }

  var video = document.querySelector('video');
  var reset = document.querySelector('#reset');
  var stop = document.querySelector('#stop');

function tomarImg(){
	var t = 1;
	var context = document.getElementById("canvas").getContext("2d");
	
	
	document.getElementById("tiempo").innerHTML=t;
	document.getElementById("tiempo").style.display="block";	
	

	var tiempo = setInterval(function(){ 
		t++;
		document.getElementById("tiempo").innerHTML=t;
		if( t>3){
			document.getElementById("tiempo").style.display="none";	

		}
	}, 1000);
	
	setTimeout(function(){ 
		context.drawImage(video, 0, 0, 640, 480);
//		video.play(); 
		clearInterval(tiempo); 
	}, 4000);
	
}


  function resultHandler (err, result) {
	if (err)
	  return console.log(err.message);
	
	//alert(result);
	tomarImg();
	
	console.log(result);
	console.log(jQuery.parseJSON(result));
  }

  // prepare a canvas element that will receive
  // the image to decode, sets the callback for
  // the result and then prepares the
  // videoElement to send its source to the
  // decoder.

  qr.decodeFromCamera(video, resultHandler);


  // attach some event handlers to reset and
  // stop whenever we want.

  reset.onclick = function () {
//	qr.decodeFromCamera(video, resultHandler);
//video.play(); 
  };

  stop.onclick = function () {
//	qr.stop();
//	video.pause(); 
	
  };

})();