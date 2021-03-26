var entrar = document.getElementById ("entrar")
var registrar = document.getElementById ("registrar")

var body = document.querySelector("body")

entrar.addEventListener ("click", function (){
    body.className = "entrar-js"
})
registrar.addEventListener ("click", function (){
    body.className = "registrar-js"
})