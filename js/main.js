console.log("Desarrolar un juego usando javaScript jugadores ombre y maquina");
//utilizar dos dados de 6 
//asignar una meta de 100
//jugador lanza el dado realizando un click
//mauina lanza el dado autmatico
//el juego dee suamar todos los lanzamento
//el priero que llama a la meta gana
//mostrar puntajes del ganador y el perdedor
var a = 1;
let b;
const c = 10;
 let objeto ={
  nombre: "trifon",
  apellido: "barreto"
 }

 if(a>2){

 } else {

 }
/*
 while(a!=0){

 }
 */
 const txtnombre = document.getElementById('nombre');
 const btnsaludar = document.getElementById('btnsal');
 const saludo = document.getElementById('saludo');
 letras=[];

 function saludar(){
console.log("hola desde lafuncion");
saludo.innerHTML=txtnombre.value;
 }


  btnsaludar.addEventListener('click', ()=>{
    saludar();
  })

  /*
var x=1;
	var y=0;
    var z=0;
    var a=1;
    var tot = 0;

    
var socket = null;
var map = null;
var markerss = [];

function rollDice(){
 //markerss.push [{ id: 1, socket_id: 'barreto', socket_id: 'barreto', socket_id: 'barreto' }, {id: 2, socket_id: 'barreto', socket_id: 'barreto', socket_id: 'barreto' }];
	var die1 = document.getElementById("die1");
    
    var status = document.getElementById("status");

    var die1m = document.getElementById("die2");
    var statusm = document.getElementById("mstatus");
 
	var d1=  Math.floor(Math.random()*1)+1;
    var d2=  Math.floor(Math.random()*4)+1;
 
 
 
 if(a==0){
   
   
    die1.innerHTML = "Dado uno "+ d1;
    die1m.innerHTML = "Dado dos "+ d2;
    var tot = d1+d2;
    var pos =tot + y;
    status.innerHTML = "Tu puntuacion es Humano "+ pos +".";
   // tiro.innerHTML = "Tu numero de tiro es "+x+".";
    a=1;
    x = x+1;
    y = pos;
    if (pos >= 100){
    	alert("EL juego ha terminado");
    	y = 0;
 
    }
   /// var id = 1;
//var info = { id: 1, id: data.id };
    var info = { id: 6410, socket_id: 'barreto', sock: tot, so: pos }
    ganador(info);
 } else {
    die1.innerHTML = "Dado uno "+ d1;
    die1m.innerHTML = "Dado dos "+ d2;
    var tot = d1+d2;
    var pos =tot + y;
    statusm.innerHTML = "Tu puntuacion es maquina"+ pos +".";
 //   tiro.innerHTML = "Tu numero de tiro es "+x+".";
 
    a=0;
    x = x+1;
    z = pos;
    if (pos >= 100){
    	alert("EL juego ha terminado maquina");
    	y = 0;
 
    }
    var info = { id: 6511, socket_id: 'mari', sock: tot, so: pos}
    ganador(info);
 }
   
   
 
}
function exitoso() {
    var data = {};
    /* data.lat = lat.value = position.coords.latitude;
    data.lng = long.value = position.coords.longitude;

var d1=  Math.floor(Math.random()*1)+1;
var d2=  Math.floor(Math.random()*4)+1;
var tot = d1+d2;
var pos =tot + y;
data.lat = document.getElementById("lat").value; //51.508742;
data.lng = document.getElementById("long").value; //-0.120850;
data.id = usuario;

socket.emit('posisionConductor', data);
}


function ganador(data) { //{id,lat,lon}


var index = buscar(data);
console.log("ganador"+index);
if (index === -1) { //ES NUEVO
    nuevoPosision(data);
} else { //REGISTRADO
    actualizarPosision(index, data);
}

}

function buscar(data) {

console.log(data);


var index = -1;
var n = markerss.length;
console.log(n);
for (var i = 0; i < n; i++) {
    if (markerss[i].getId() == data.id) {
        index = i;
        console.log(index);
        break;
    }
}
console.log(index);
return index;
 <span class="badge bg-warning m-1 rounded-pill">4</span><span class="badge bg-warning m-1 rounded-pill">4</span><span class="badge bg-warning m-1 rounded-pill">4</span>

}

function nuevoPosision(data) {
var marca = new markers(data.id,  data.socket_id,data.sock, data.so);
marca.crear();
markerss.push(marca);
}

function actualizarPosision(index, data) {
console.log("aculixanso mi posoidi");
console.log("aculixanso "+index);
console.log(data.so);
var marca = markerss[index];

marca.remover();
// const para = document.createElement("p");
// para.setAttribute("id", data.id);
// document.getElementById(data.id).remove();

//para.innerHTML = data.id;
//document.getElementById(data.so).appendChild(para);



marca.update(data.sock, data.so);
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

 */