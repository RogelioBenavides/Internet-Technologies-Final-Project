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