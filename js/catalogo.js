let _divProductos = document.querySelector("#productos")
let _inputBuscador = document.querySelector("#inputBuscador")

let _btnFiltrarCategoria = document.querySelector("#btnFiltrarCategoria")
let _categoriasSelect = document.querySelector("#categorias")

let _precioDesde = document.querySelector("#inputDesde")
let _precioHasta = document.querySelector("#inputHasta")
let _btnFiltrarPorPrecio = document.querySelector("#btnFiltrarPorPrecio")



_inputBuscador.addEventListener("keyup", filtrarPorNombre)
_btnFiltrarCategoria.addEventListener("click", filtrarPorCategoria)
_btnFiltrarPorPrecio.addEventListener("click", filtrarPorPrecio)

function cargar7Aleatorios(){ 

    for(let i=0; i<7; i++){   
        
        let random = Math.floor(Math.random() * arrayProductos.length);// Genera un número random
        
        let productoHTML =  //Accede al array en la posición "RANDOM"
        `<article>
            <figure>
                <img src="${arrayProductos[random].img[0]}"> 
                <h5>${arrayProductos[random].nombre.toUpperCase()}</h5><br>
                <figcaption>
                    <p class= "precio"> $${arrayProductos[random].precio}</p>
                    <a id="ampliarBtn" href="detalle_producto.html?id=${arrayProductos[random].id}">Ampliar<a>
                </figcaption>
            </figure>
        </article>`
        
        _divProductos.innerHTML+= productoHTML
    }
}

function filtrarPorNombre(){
    let palabraBuscada =  _inputBuscador.value.toUpperCase()  
    _divProductos.innerHTML = ""  //Limpio resultados
    _categoriasSelect.value = ""  
    _precioDesde.value = ""
    _precioHasta.value = ""
    
    if(palabraBuscada.length > 2){ 
        
        for(let i=0; i<arrayProductos.length; i++){
            let nombreProducto = arrayProductos[i].nombre.toUpperCase()  
            if(nombreProducto.includes(palabraBuscada)){ //Pregunto si el nombre del producto incluye (contiene) lo que el usuario me escribió en el buscador
                let productoHTML = 
                `<article>
                    <figure>
                        <img src="${arrayProductos[i].img[0]}"> 
                        <h5>${arrayProductos[i].nombre.toUpperCase()}</h5><br>
                        <figcaption>
                            <p class= "precio"> $${arrayProductos[i].precio}</p>
                            <a id="ampliarBtn" href="detalle_producto.html?id=${arrayProductos[i].id}">Ampliar<a>
                        </figcaption>
                    </figure>
                </article>`
                
                _divProductos.innerHTML+= productoHTML
            }
        }
    }else{ 
        cargar7Aleatorios() 
    }
}


function filtrarPorCategoria(){
    
    _divProductos.innerHTML = "" 
    _inputBuscador.value = "" 
    _precioDesde.value = ""
    _precioHasta.value = ""
    
    if(!_categoriasSelect.value == ""){ //Chequeo si el select tiene una seleccion
        for(let i=0; i<arrayProductos.length; i++){
            if(arrayProductos[i].categoria.toLowerCase() == _categoriasSelect.value.toLowerCase()){  //la categoria del producto donde estoy 
                let productoHTML = 
                `<article>
                    <figure>
                        <img src="${arrayProductos[i].img[0]}"> 
                        <h5>${arrayProductos[i].nombre.toUpperCase()}</h5><br>
                        <figcaption>
                            <p class= "precio"> $${arrayProductos[i].precio}</p>
                            <a id="ampliarBtn" href="detalle_producto.html?id=${arrayProductos[i].id}">Ampliar<a>
                        </figcaption>
                    </figure>
                </article>`
                
                _divProductos.innerHTML += productoHTML 
            }    
        }
    }else{ // si no selecciono ningna categoria pues cargo las primeras 7
        cargar7Aleatorios()
    }
   
}


function filtrarPorPrecio(){
    
    _divProductos.innerHTML = ""  
    _inputBuscador.value = "" 
    
    let desde = parseFloat(_precioDesde.value)  
    let hasta = parseFloat(_precioHasta.value)  
    
    if(desde>0 && hasta>0 && desde < hasta){
        for(let i=0; i<arrayProductos.length; i++){
            let precioArticulo = parseFloat(arrayProductos[i].precio)  ////Parseo el precio del objeto producto del array de productos y me guardo el precio
            
            if(precioArticulo >= desde && precioArticulo <= hasta ){  //comparo si entre los rangos que busco
                
                let productoHTML = 
                `<article>
                    <figure>
                        <img src="${arrayProductos[i].img[0]}"> 
                        <h5>${arrayProductos[i].nombre.toUpperCase()}</h5><br>
                        <figcaption>
                            <p class= "precio"> $${arrayProductos[i].precio}</p>
                            <a id="ampliarBtn" href="detalle_producto.html?id=${arrayProductos[i].id}">Ampliar<a>
                        </figcaption>
                    </figure>
                </article>`
                
                _divProductos.innerHTML+= productoHTML
            }    
        }
    }else{
        alert("Precio en pesos uruguayos. Revise los valores.")
        cargar7Aleatorios()
    }
    
}

cargar7Aleatorios()  //Cuando se carga la página