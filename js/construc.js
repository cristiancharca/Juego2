class princi {
  constructor(id, map,lat, lng){
    this.table =[];
    this.front = 0;
    this.end = 0;
    this.map = map;
    this.id = id;
    this.lat = lat;
    this.lng = lng;
    this.markerv = null;
  };
  eneque(data){
    
    this.table[this.end] = data;
    this.end++;
    this.crear(data);
    console.log( this.end);
  }
  deque(){
    if(this.front == this.end){
return 0;
    };
    const data = this.table[this.front];
  //  delete this.table[this.front];
    this.front ++;
    return data;
  }
  getSize(){
  return this.end - this.front;
  }
  isEmpty(){
    if(this.getSize()==0){
return true;
    } else {
      return false;
    }
  }
   pek(){
    if(this.getSize()==0){
      return null;
          } 
            return this.table[this.front];
         
   }
   prin(){
    if(this.getSize()==0){
      return true;
          } 
          let resu = "";
          for (let i = this.front; i < this.end; i++) {
            resu += this.table[i];
            
          }
          return resu;
   }



   
 /*  var myIcon = L.icon({
       iconUrl: 'img/mark1.png',
       iconSize: [60, 60],
       iconAnchor: [15, 40],
       popupAnchor: [0, -40]
   });
   */
   crear(data) {
       const para = document.createElement("p");
       para.setAttribute("id", data.id);
       para.innerHTML = "fffffff";
       this.markerv= document.getElementById(data.so).appendChild(para);
       /*
       this.markerv = new L.marker([this.lat, this.lng], {
           title: this.id,
           icon: myIcon
       }).bindPopup("Datos del conductor").openPopup();
       this.markerv.addTo(this.map);
*/
console.log('dentroi de la lclase crear');
   }
   remover(){
       if (this.markerv != null)
      // para.setAttribute("id", data.id);
       document.getElementById(this.id).remove();
   }

  
   update(lat, lng) {
       this.lat = lat;
       this.lng = lng;
   }






   getId() {
    
    return this.id;
}
}
/*
const fila = new princi();
let data = {};
let datas = {};
data = { id: 6410, socket_id: 'barreto', sock: 10, so: 10 }
datas = { id: 640, socket_id: 'fr', sock: 10, so: 10 }
fila.eneque(datas);
fila.eneque(data);

console.log(fila);
//console.log(fila.getSize());
//console.log(fila.deque());
console.log(fila.pek());*/
//const fila = new princi();
