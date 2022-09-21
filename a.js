
/* Eventos en Botones de servicios*/

let clases = document.querySelector("#btnClases")
clases.onclick= function() {
    const clase = document.querySelector("#btnClases") 
    clase.textContent = "Tu clase ha sido agendada" 
    clase.textContent;  
}
let español = document.querySelector("#btnEspañol")
español.onclick= function(){
    const esp = document.querySelector("#btnEspañol")  
    esp.textContent = "Tu clase  de español ha sido agendada"
    esp.textContent; 
}
let regularizacion = document.querySelector("#btnRegularizacion")
regularizacion.onclick= function(){
    const reg = document.querySelector("#btnRegularizacion")
    reg.textContent = "Tu sesión de regularización ha sido agendada con éxito"; 
    reg.textContent;  
}
let conversacion = document.querySelector("#btnConversacion")
conversacion.onclick= function(){
    const conv = document.querySelector("#btnConversacion")
    conv.textContent = "Uno de nuestros especialistas se pondrá en contacto con usted a la brevedad para incluirlo en un gurpo de conversación"; 
    conv.textContent
}

/*Evento en consola al dar click en algún servicio*/
const servicios = document.querySelector (".div-servicios")

servicios.addEventListener ("click", ()=>{
    console.log("Sesión agendada")
})

/*Eventos en el formulario y mostar datos en la consola*/

const formulario = document.querySelector ("form")

const nombre = document.querySelector ("#uname")

const telefono = document.querySelector ("#tel")

const correo = document.querySelector ("#mail")

const serv = document.querySelector ("#serv")

formulario.addEventListener("submit", validarformulario)

function validarformulario (e){
    e.preventDefault()
    console.log (`${nombre.value} ${telefono.value} ${correo.value} ${serv.value}`)}
