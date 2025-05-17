let parametros = window.location.search //Obtengo lo que está después del ? de la URL y me lo guardo en variable parámetros
let idRecibido = new URLSearchParams(parametros).get("id")  //Busco un parámetro en particular, en este caso "ID"
let idProductoAMostrar = Number(idRecibido) //parseo

let contadorDeImagenes = 0  
let productoAMostrar = {}  //Guardo el OBJETO 

let _tituloDeProducto = document.querySelector("#tituloDeProducto")
let _divProductoMostrar = document.querySelector("#productoMostrar")



function cargarDetalleProducto(){
    
    for(let i=0; i<arrayProductos.length; i++){  
        if(arrayProductos[i].id == idProductoAMostrar){ 
            productoAMostrar = arrayProductos[i] 
        }
    }

    let productoHTML = 
    `<div class="col50 slider"> 
        <img id="fotoArticulo" src="${productoAMostrar.img[0]}">
        <a class="ant" onclick="anterior()">&#10094;</a>  
        <a class="sig" onclick="siguiente()">&#10095;</a>
    </div>
    <div class="col50">
        <article>
            <figure>
                <h5>${productoAMostrar.nombre}</h5>
                <div class="descripcionArticulo">
                    <p> ${productoAMostrar.descripcionLarga}</p>
                </div>
                <figcaption>$ ${productoAMostrar.precio}</figcaption>
            </figure>
        </article>
    </div>`
   
    _divProductoMostrar.innerHTML += productoHTML  
}

function anterior(){  
    if(contadorDeImagenes>0){
        contadorDeImagenes--
        let img = document.querySelector("#fotoArticulo")
        img.setAttribute("src", productoAMostrar.img[contadorDeImagenes])
    }
}

function siguiente(){ 
    if(contadorDeImagenes<productoAMostrar.img.length-1){
        contadorDeImagenes++  
        let img = document.querySelector("#fotoArticulo")
        img.setAttribute("src", productoAMostrar.img[contadorDeImagenes])  
    }
}



cargarDetalleProducto()  



