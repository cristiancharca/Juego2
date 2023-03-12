var socket = null;
var map = null;
var markerss = [];


function buscar(data) {
    console.log(data);


    var index = -1;
    var n = markerss.length;
    for (var i = 0; i < n; i++) {
        if (markerss[i].getId() == data.id) {
            index = i;
            break;
        }
    }
    console.log(index);
    return index;


}

function nuevoPosision(data) {
    var marca = new markers(map, data.id, data.lat, data.lng);
    marca.crear();
    markerss.push(marca);
}

function actualizarPosision(index, data) {
    console.log(index);
    var marca = markerss[index];
    marca.remover();
    marca.update(data.lat, data.lng);
    marca.crear();
}

function removerPosicion(index) {
    var marca = markerss[index];
    marca.remover();
    markerss.splice(index, 1);
}

function eliminarMarcadores() {
    var n = markerss.length;
    for (var i = 0; i < n; i++) {
        markerss[i].remover();
    }
    markerss = [];
}
window.onload = function() {
    conectar();
}