var socket = null;
var usuario = null;
var watchId;


function conectar() {
    socket = io.connect("https://sistema-geolocalizacion.herokuapp.com");
    socket.on('connect', function() {

        document.getElementById("estado").innerHTML = "CONECTADO...";
    });
    socket.on('disconnect', function() {
        document.getElementById("estado").innerHTML = "DESCONECTADO...";
        document.getElementById("form2").style.display = "none";
        document.getElementById("form1").style.display = "block";
        document.getElementById("nombreUsuario").innerHTML = " ";
        detener();
    });

    document.getElementById("form2").style.display = "none";
}

/*function enviarPosision() {
    watchId = navigator.geolocation.watchPosition(exitoso, errore);
}*/

function exitoso() {
    var data = {};
    /* data.lat = lat.value = position.coords.latitude;
    data.lng = long.value = position.coords.longitude;
*/
    data.lat = document.getElementById("lat").value; //51.508742;
    data.lng = document.getElementById("long").value; //-0.120850;
    data.id = usuario;

    socket.emit('posisionConductor', data);
}

/*function errore(error) {
    alert('ERROR(' + error.code + '): ' + error.message);
}

function detener() {

    navigator.geolocation.clearWatch(watchId);
}*/

function loginConductor() {
    var data = {};
    data.id = document.getElementById("usuarionom").value;

    socket.emit('loginConductores', data, function(data) {

        if (data.estado === 0) {
            alert('Existe otro usuario con el mismo nombre');
        } else {
            usuario = data.id;
            document.getElementById("nombreUsuario").innerHTML = usuario;
            document.getElementById("form2").style.display = "block";
            document.getElementById("form1").style.display = "none";
        }
    });
}

window.onload = function() {
    conectar();
}