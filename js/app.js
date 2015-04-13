
var gCtx = null;
var gCanvas = null;
var c=0;
var stype=0;
var gUM=false;
var webkit=false;
var moz=false;
var v=null;
var w=640,h=480 ;
var intervalo=500;
var mapProp = null;
var map = null;
var geo = {};

captureGeolocation();
initMap(geo.latitude,geo.longitude);

function getFecha(){
	var d = new Date();
	
	console.log(d.getHours());
}



function initMap(lat,lon) {
	mapProp = {
		center:new google.maps.LatLng(lat,lon),
		zoom:14,
		mapTypeId:google.maps.MapTypeId.ROADMAP,
		disableDefaultUI: true
	};
	map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
	var marker=new google.maps.Marker({
		position:new google.maps.LatLng(lat,lon)
	});

	marker.setMap(map);
}

// función encargada de obtener la latitud-longitud del cliente
function captureGeolocation()
{
    navigator.geolocation.getCurrentPosition(
        function(geoloc) {
			geo.latitude = geoloc.coords.latitude;
			geo.longitude = geoloc.coords.longitude;
        },
        function(error) {
            console.log("Error al geolocalizar el cliente");
            console.log(error);
        }
    );
}

function captureToCanvas() {
	
    if(stype!=1)
        return;
	
    if(gUM)
    {
		try{
			gCtx.drawImage(v,0,0);
			try{
				qrcode.decode();
			}
			catch(e){       
				console.log(e);
				setTimeout(captureToCanvas, intervalo);
			};
		}
		catch(e){       
				console.log(e);
				setTimeout(captureToCanvas, intervalo);
		};
    }
}

function htmlEntities(str) {
	return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function read(a)
{
	var obj = JSON.parse(a);
	$("#resultado").empty();
	captureGeolocation();
	setTimeout(function(){
		initMap(geo.latitude,geo.longitude);
	},1000);
	
	
    $("#resultado").html("<p>Nombre: " + obj.nombre + "</p><p>Apellido: " + obj.apellido + "</p><p>Pin: " + obj.pin + "</p>");
	
	console.log(JSON.parse(a));
	
	$("#msj").html("<p>En 3 segundos sacara la foto</p>");
	
	setTimeout(function(){
		
		tomarImg();
		getFecha();
		$('#tarjeta').css('display','block');
		setTimeout(captureToCanvas, intervalo);
	},3000);
	
	
}	


function success(stream) {
    if(webkit)
        v.src = window.webkitURL.createObjectURL(stream);
    else
    if(moz)
    {
        v.mozSrcObject = stream;
        v.play();
    }
    else
        v.src = stream;
    gUM=true;
    setTimeout(captureToCanvas, intervalo);
}
		
function error(error) {
    gUM=false;
    return;
}

function tomarImg(){

	// Capturo del video y lo coloco en el canvas
	gCtx.drawImage(v, 0, 0, w, h);

	// Obtengo la imagen del canvas en formato Base64
	var dataUrl = gCanvas.toDataURL();
		
	// Coloco la url de la imagen
	document.getElementById('img').src = dataUrl;

}

function initApp()
{

	gCanvas = document.getElementById("qr-canvas");
    gCanvas.width = w;
    gCanvas.height = h;
    gCtx = gCanvas.getContext("2d");
    gCtx.clearRect(0, 0, w, h);
	
	qrcode.callback = read;
	
	document.getElementById("msj").innerHTML="Pase el codigo por el visor";
    if(stype==1)
    {
        setTimeout(captureToCanvas, intervalo);    
        return;
    }
    var n=navigator;

    v=document.getElementById("video");

    if(n.getUserMedia)
        n.getUserMedia({video: true, audio: false}, success, error);
    else
    if(n.webkitGetUserMedia)
    {
        webkit=true;
        n.webkitGetUserMedia({video: true, audio: false}, success, error);
    }
    else
    if(n.mozGetUserMedia)
    {
        moz=true;
        n.mozGetUserMedia({video: true, audio: false}, success, error);
    }

    stype=1;
    setTimeout(captureToCanvas, intervalo);

}

