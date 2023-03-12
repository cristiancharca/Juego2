

let ids = 6895,contador = 0;
const cube = document.querySelector('.cube');
const time = 2;
   // let nu = 0;

const FICHA = [];

function rollDice(){

    if(contador === FICHA.length){
        contador = 0;
    }
  let datos = FICHA[contador];
  contador +=1;

    let tot = dadosJ();

    let pos =tot +datos.posicionU;
    let posi = castigo(pos);
    if(datos.dado == 0){
        datos = { id: datos.id, usuario: datos.usuario, dado: tot, posicionU: datos.posicionU }
        ganador(datos);
    } else {
 if(posi == 1000){
        datos = { id: datos.id, usuario: datos.usuario, dado: 0, posicionU: pos }
        ganador(datos);
    } else {
        datos = { id: datos.id, usuario: datos.usuario, dado: tot, posicionU: posi }
 
        ganador(datos);
    }
    }
   
  

 
}
const dadosJ =()=>{
    cube.style.transition = '';
      cube.style.transform = `translateY(400px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
      const randomValue = Math.floor((Math.random() * 6) + 1);
      setTimeout(() => {
          cube.style.transition = `transform ${time}s`;
         // const randomValue = Math.floor((Math.random() * 6) + 1);
          console.log(`randomValue: ${randomValue}` );
          
          switch(randomValue) {
              case 1:             
                  cube.style.transform = `translateY(400px) rotateX(3600deg) rotateY(3600deg) rotateZ(3600deg)`;
                //  console.log(`randomValue: ${randomValue}` );
                  break;
              case 2:
                  cube.style.transform = `translateY(400px) rotateX(4410deg) rotateY(3600deg) rotateZ(3600deg)`;
                  break;
              case 3:
                  cube.style.transform = `translateY(400px) rotateX(3600deg) rotateY(4410deg) rotateZ(3600deg)`;
                  break;
              case 4:
                  cube.style.transform = `translateY(400px) rotateX(3600deg) rotateY(2430deg) rotateZ(3600deg)`;
                  break;
              case 5:
                  cube.style.transform = `translateY(400px) rotateX(2430deg) rotateY(3600deg) rotateZ(3600deg)`;
                  break;
              case 6:
                  cube.style.transform = `translateY(400px) rotateX(3600deg) rotateY(1980deg) rotateZ(3600deg)`;
                  break;
                  
          };//console.log(`randomValue: ${randomValue}` );
      }, time * 10);
      
   // let tot = d1+d2;
    return randomValue;
}
const castigo =(data)=>{
    if (data >10) return data;
    if (data == 1) return data +2;
    if (data == 2) return data +1;
    if (data == 3) return data +2;
    if (data == 4) return data;
    if (data == 5) return data -2;
    if (data == 6) return data +2;
    if (data == 7) return data +3;
    if (data == 8) return data -4;
    if (data == 9) return data +2;
    if (data == 10) return data -5;

}

function agr(){
   
    ids =ids+1;
    data = {}
    data = { id: ids, usuario: 'barreto', dado: 0, posicionU: 0 }//,{ id: 6511, socket_id: 'mari', sock: 0, so: 0}
    console.log(data);
    ganador(data)
}


const ganador=(data) =>{ 

    console.log(data);
    var index = buscar(data);
    console.log(index);
    if (index === -1) { //ES NUEVO
        nuevoPosision(data);
    } else { //REGISTRADO
        actualizarPosision(index, data);
    }

}

const buscar=(data)=> {
  
    console.log(data);


    var index = -1;
    var n = FICHA.length;
    console.log(n);
    for (var i = 0; i < n; i++) {
        if (FICHA[i].getId() == data.id) {
            index = i;
            console.log(index);
            break;
        }
    }
    console.log(index);
    return index;


}
 const nuevoPosision = (data)=>{
   
    let marca = new Markers(data.id,  data.usuario,data.dado, data.posicionU);
    marca.crear();
    FICHA.push(marca);
 }
 const actualizarPosision=(index, data) => {
  
    let marca = FICHA[index];
    marca.remover();
    marca.update(data.dado, data.posicionU);
    marca.crear();
 }

const removerPosicion=(index) => {
    let marca = FICHA[index];
    marca.remover();
    FICHA.splice(index, 1);
}

const eliminarMarcadores=() =>{
    let n = FICHA.length;
    for (let i = 0; i < n; i++) {
        FICHA[i].remover();
    }
    FICHA = [];
}