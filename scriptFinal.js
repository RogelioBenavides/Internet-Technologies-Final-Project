//Sección FAQ - acordeón
var acc = document.getElementsByClassName("accordion");
var i;

//Por cada elemento del acordeon, al hacer click, se despliega la información.
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

//Función para cargar el popup del aviso de cookies
window.addEventListener("load", function() {
  setTimeout(
    function open(event) {
      //mostrar el div popup
      document.querySelector(".popup1").style.display = "block";
    },
    500
  )
});

//Función: Si hace click en cerrar, se quita el popup
document.querySelector("#close").addEventListener ("click", function(){
  document.querySelector(".popup1").style.display = "none";
});

//Función: Si hace click en ACEPTAR, se quita el popup
document.querySelector(".popup1 a").addEventListener ("click", function(){
  document.querySelector(".popup1").style.display = "none";
});
