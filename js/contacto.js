let nombre = document.querySelector("#nombre")
let apellido = document.querySelector("#apellido")
let edad = document.querySelector("#edad")
let genero = document.querySelector("#genero")
let email  = document.querySelector("#email")
let contrasena = document.querySelector("#contrasena")
let contrasena2 = document.querySelector("#contrasena2")

let _form = document.querySelector("#formu")
let mensaje = document.querySelector("#mensaje")

_form.addEventListener('submit', validarTodo)

function validarTodo(evento){ // DARLE EL EVENTO PARA QUE NO AJECUTE NADA
    evento.preventDefault()
    mensaje.textContent = " "
    
    if(    validarNombre() === true    //Todas las funciones que llamo me deben devolver TRUE 
        && validarApellido() === true 
        && validarEdad() === true 
        && validarMail() === true 
        && validarGenero() === true
        && validarContrasena() === true
        ){ 
            mensaje.textContent = "Registro exitoso!"   
            mensaje.style.color = "green"
    }
}

function validarMail(){  
    let mailIngresado = email.value
    let posicionArroba = mailIngresado.indexOf("@")
    let posicionPunto = mailIngresado.lastIndexOf(".")

    if(mailIngresado.length == 0){
        mensaje.textContent = "Debe ingresar un mail"
        mensaje.style.color = "red"
        return false
    }else if(posicionArroba == -1){
        mensaje.textContent = "El mail debe tener un @"
        mensaje.style.color = "red"
        return false
    }else if(posicionArroba != mailIngresado.lastIndexOf("@")){
        mensaje.textContent = "No puede haber mas de un @ en el mail."
        mensaje.style.color = "red"
        return false
    }else if(mailIngresado.charAt(posicionArroba + 1) == ""){
        mensaje.textContent = "No hay nada escrito despues de la @."
        mensaje.style.color = "red"
        return false
    }else if(posicionPunto == -1){
        mensaje.textContent = "Debe haber un punto despues de la @."
        mensaje.style.color = "red"
        return false
    }else if(posicionArroba > posicionPunto){
        mensaje.textContent = "El punto debe estar despues de la @."
        mensaje.style.color = "red"
        return false
    }else if(mailIngresado.charAt(posicionPunto + 1) == ""){
        mensaje.textContent = "Debe haber algo despues del punto."
        mensaje.style.color = "red"
        return false
    }else{
        return true
    }
}

function validarNombre(){
    let nombreIngresado = nombre.value

    if(nombreIngresado.length > 2){
        return true
    }else{
        mensaje.innerHTML = "Debe ingresar un nombre de más de 2 caractéres."
        mensaje.style.color = "red"
        return false
    }
}


function validarApellido(){
    let apellidoIngresado = apellido.value

    if(apellidoIngresado.length > 2){
        return true
    }else{
        mensaje.innerHTML = "Debe ingresar un apellido de más de 2 caractéres."
        mensaje.style.color = "red"
        return false
    }
}


function validarEdad(){
    let edadIngresada = parseInt(edad.value)

    if(!isNaN(edadIngresada)  //Si es un número
    && edadIngresada >= 18  
    && edadIngresada <= 120){ // subí el rango para que Lucile Randon (persona + longeva del mundo), pueda comprarme también :) 
       return true
    }else{
        mensaje.innerHTML = "La edad debe ser un número entero ente 18 y 120."
        mensaje.style.color = "red"
        return false
    }
}


function validarGenero(){
    let generoIngresado = genero.value

    if(generoIngresado.length > 1){
        return true
    }else{
        mensaje.innerHTML = "Debes seleccionar un género. "
        mensaje.style.color = "red"
        return false
    }
}

function validarContrasena(){
    let contrasenaIngresada = contrasena.value
    let contrasenaIngresada2 = contrasena2.value

    if( contrasenaIngresada != ""
        && contrasenaIngresada2 != ""
        && contrasenaIngresada === contrasenaIngresada2){
        return true
    }else{
        mensaje.innerHTML = "Debes ingresar la misma contraseña dos veces. "
        mensaje.style.color = "red"
     return false
    }
}
