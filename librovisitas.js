

var texto = document.getElementById("texto");
var textoGenerado = document.getElementById("textoResultado");

/*
 Lo primero que necesito hacer depues de haber sacado las variables  es una funcion que me permita mostrar el texto generado*/
function generarTexto() {
    textoGenerado.innerHTML = texto.value;
}

function grande(){
    textoGenerado.style.fontSize = "30px";
}
