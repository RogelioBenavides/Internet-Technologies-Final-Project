//configuracion de bd
const firebaseConfig = {
  apiKey: "AIzaSyDon15MRaZEBBiiMZpuNPf-n_KZj5kbsus",
  authDomain: "ti-proyectofinal-1a056.firebaseapp.com",
  databaseURL: "https://ti-proyectofinal-1a056-default-rtdb.firebaseio.com",
  projectId: "ti-proyectofinal-1a056",
  storageBucket: "ti-proyectofinal-1a056.appspot.com",
  messagingSenderId: "1043128978228",
  appId: "1:1043128978228:web:25a7cef4212f17ba9a7361",
  measurementId: "G-3CVTMNQJP6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
var a;

function submitForm() {
	var cont1 = document.getElementById("inputPassword1").value;
	var cont2 = document.getElementById("inputPassword2").value;
	if(cont1==cont2){
		
	  var correo = document.getElementById("inputEmail1").value;
	  var nombre = document.getElementById("inputNombre").value;
	  var apellido = document.getElementById("inputApellido").value;
	  guardarDatos(correo, nombre, apellido, cont1);
	  document.getElementById("registroCuenta").reset();
	  
	}
}

function guardarDatos(correom, nombrem, apellidom, contraseniam){

  db.collection("cuentas").add({
    correo: correom,
    nombre: nombrem,
    apellido: apellidom,
	contrasenia: contraseniam,
  })
}
