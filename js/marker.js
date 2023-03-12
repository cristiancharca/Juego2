//creamos una clase para nuestros marcadores
function Markers( id, usuario,dado, posicionU) {
   
    this.id = id;
    this.usuario = usuario;
    this.dado = dado;
    this.posicionU = posicionU;
    this.tarjeta = null;

    this.crear = () => {
       
        const para = document.createElement("small");
        para.setAttribute("id", this.id);
        para.setAttribute("class", "badge bg-warning m-1 rounded-pill");
        para.innerHTML = this.usuario;
        this.tarjeta= document.getElementById(this.posicionU).appendChild(para);
    
    }
    this.remover = () => {
        if (this.tarjeta != null)
        document.getElementById(this.id).remove();
    }
 
    this.getId = () => {
        console.log('dentroi deget'+this.id);
        return this.id;
    }
    this.update = (dado, posicionU) =>{
        this.dado = dado;
        this.posicionU = posicionU;
    }

}