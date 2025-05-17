const categoriaDestacadaDelMes = "Ojos"  //Si queremos hacer que el usuario lo pueda elegir, cargo variable de forma dinámica pero ta.



let _divCategoriaDestacadaDelMes = document.querySelector("#categoriaDestacadaDelMes")
let _h2DestacadoDelMes = document.querySelector("#h2DestacadoDelMes")

let _btnAhoraNo = document.querySelector("#btnAhoraNo")
let _popUp = document.querySelector("#popUp")
let _mensajeOferta = document.querySelector("#mensajeOferta")
let _cerrarOferta = document.querySelector("#cerrarOferta")

//Si apreto la X o el botón de "Ahora no", llamo a función para ocultar PopUp
_btnAhoraNo.addEventListener("click", cerrarPopUp)
_cerrarOferta.addEventListener("click", cerrarPopUp)

function cargarCategoriaDestacada(){
    _h2DestacadoDelMes.innerHTML = "Categoría destacada del mes: " + categoriaDestacadaDelMes

    for(let i=0; i<arrayProductos.length; i++){  
        if(arrayProductos[i].categoria == categoriaDestacadaDelMes){ 
            let productoHTML = 
            `<article>
                <img src="${arrayProductos[i].img[0]}">
                <h3 class="articuloNombre">${arrayProductos[i].nombre}</h3>
                <p ><b class="precio">$${arrayProductos[i].precio}</b></p>
            
                <a class="titulo" id="ampliarBtn" href="detalle_producto.html?id=${arrayProductos[i].id}">Ver detalle<a>
            </article>`

            _divCategoriaDestacadaDelMes.innerHTML += productoHTML
        }

    }
}

function cargarMensajeOferta(){
    const hoy  = new Date(); // creo objeto de tipo date
    _mensajeOferta.innerHTML = 
    `<h2> Oferta de hoy ${hoy.toLocaleDateString("es-UY")} </h2>`// muestro en formato  dd-mm-aa
}


function cerrarPopUp(){
    _popUp.setAttribute("style", "display:none")
}

cargarCategoriaDestacada()
cargarMensajeOferta()
