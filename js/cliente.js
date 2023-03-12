var SOCKET = null;
var ID = null;
/////////////////////////////////////
function conectarse() {
    SOCKET = io.connect();
    SOCKET.on("connect", function() {
        document.getElementById("idEstado").innerHTML = "CONECTADO...";


    });
    SOCKET.on("disconnect", function() {
        document.getElementById("idEstado").innerHTML = "DESCONECTADO...";
        document.getElementById("idFormulario2").style.display = "none"; //OCULTAMOS FORM2
        document.getElementById("idFormulario1").style.display = "block"; //MOSTRAMOS FORM1
        document.getElementById("idSocket").innerHTML = "";

    });
    document.getElementById("idFormulario2").style.display = "none"; //OCULTAMOS FORM2

} ////////////////////////////////////
/*function enviarPosicion() {

    var data = {};
    data.lat = document.getElementById("idLat").value; //51.508742;
    data.lon = document.getElementById("idLon").value; //-0.120850;
    data.id = ID;

    SOCKET.emit("posicionClientes", data);

    alert("ENVIADO");
} */ ////////////////////////////////////

///////////////////
function permitir() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            idLat.value = position.coords.latitude;
            idLon.value = position.coords.longitude;

            var data = {};
            data.lat = document.getElementById("idLat").value; //51.508742;
            data.lon = document.getElementById("idLon").value; //-0.120850;
            data.id = ID;
            //navigator.geolocation.watchPosition(data);
            SOCKET.emit("posicionClientes", data);
        });
    } else {
        // Browser doesn't support Geolocation
        alert('No soporta la geo');
    }
}
//var geolo = navigator.geolocation.watchPosition(permitir);


function enviarPosicion() {

    // permitir();
    navigator.geolocation.watchPosition(permitir);
}

function buttonClickHandler() {
    navigator.geolocation.clearWatch(permitir);



}


function cerrar() {
    window.close();
}
////////////////////////////////////////////////
function enviarIdentificador() {
    var data = {};
    data.id = document.getElementById("idIdenficador").value;
    SOCKET.emit("loginCliente", data, function(data) { //{estado,id}


        if (data.estado === 0) {
            alert("Existe otro usuario con el Identificador");
        } else {
            ID = data.id;
            document.getElementById("idSocket").innerHTML = ID;
            document.getElementById("idFormulario2").style.display = "block"; //MOSTRAMOS FORM2
            document.getElementById("idFormulario1").style.display = "none"; //OCULTAMOS FORM1

        }
    });
}