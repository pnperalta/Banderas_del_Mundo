var nombre = localStorage.getItem("nombre");
var puntos = localStorage.getItem("puntos");
document.getElementById("mostrar").innerHTML = nombre;
document.getElementById("mostrar2").innerHTML = puntos;

function enviar(){
    nombre = document.getElementById("name").value
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("puntos", 0)
    window.location.href = "pag1.html";
}

function correcta(ubi){
    puntos++;
    localStorage.setItem("puntos", puntos);
    window.location.href = ubi;
}

function incorrecta(ubi){
    puntos--;
    localStorage.setItem("puntos", puntos);
    window.location.href = ubi;
    alert ("Respuesta Incorrecta") 
}

function volver(ubi){
    alert ("Se borraran todas sus respuestas") 
    puntos = 0;
    window.location.href = ubi;
}