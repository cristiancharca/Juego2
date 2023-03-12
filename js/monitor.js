var SOCKET = null;
var MAP = null;
var MARCADORES = [];

function conectarse() {
    SOCKET = io.connect();
    SOCKET.on("connect", function() {
        document.getElementById("idEstado").innerHTML = "CONECTADO...";

        SOCKET.emit("loginMonitor", {
            monitor: "monitor"
        }, function(data) {
            document.getElementById("idSocket").innerHTML = data.id;

        });

    });
    SOCKET.on("disconnect", function() {
        document.getElementById("idEstado").innerHTML = "DESCONECTADO...";
        eliminarMarcadores();
    });

    iniciarMapa();

    SOCKET.on("monitorPrincipal", function(data) { //{id,lat,lon}

        console.log(data);
        var index = buscar(data);
        if (index === -1) { //ES NUEVO
            nuevoPosicion(data);
        } else { //REGISTRADO
            actualizarPosicion(index, data);
        }

    });
    SOCKET.on("monitorPrincipalDisconnet", function(data) { //{id,socket_id}

        console.log(data);
        var index = buscar(data);
        if (index !== -1) { //ENCONTRADO
            removerPosicion(index);
        }
    });


}

function iniciarMapa() {
    var mapProp = {
        center: new google.maps.LatLng(-17.9714262, -67.1369797),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    MAP = new google.maps.Map(document.getElementById("idGoogleMap"), mapProp);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function buscar(data) {
    var index = -1;
    var n = MARCADORES.length;
    for (var i = 0; i < n; i++) {
        if (MARCADORES[i].getId() == data.id) {
            index = i;
            break;
        }
    }
    return index;
}

function nuevoPosicion(data) {
    var marca = new cMarker(MAP, data.id, data.lat, data.lon);
    marca.dibujar();
    MARCADORES.push(marca); //agregamos al ARRAY

}

function actualizarPosicion(index, data) {
    var marca = MARCADORES[index];
    marca.remover();
    marca.update(data.lat, data.lon);
    marca.dibujar();
}

function removerPosicion(index) {
    var marca = MARCADORES[index];
    marca.remover();
    MARCADORES.splice(index, 1); //eliminamos del ARRAY	
}

function eliminarMarcadores() {
    var n = MARCADORES.length;
    for (var i = 0; i < n; i++) {
        MARCADORES[i].remover();
    }
    MARCADORES = [];
}