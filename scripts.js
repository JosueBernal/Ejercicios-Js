//
// Ejemplo de tipo de datos
function TipoDeDatos(){
  var nombre = "Jos";// String
  var apellido = "bernal";
  var nombre_completo = nombre + " " + apellido;
  var edad = 2018 - 1994;// Numero
  var casado = false;// Buleano

  console.log("mi nombre es " + nombre);
  console.log(nombre_completo);
  console.log(edad);
  console.log(casado);
}

// // Horas de sueño
function HorasDeSueño() {
  let dormir = Number (prompt("a que hora dormiste"));
  let despertar = Number (prompt("A que hora despertaste"));

  if(dormir <= 12) {
    var horas_dormidas = despertar + (12 - dormir);
  } else {
    var horas_dormidas = despertar +(24 - dormir);
  }

  console.log("En total dormi " + horas_dormidas + "horas");
}

// Ciclos -Regaño
function regaño() {
  for (let contador = 0; contador <= 100; contador ++) {
    console.log(contador);
  }
}

//Ejemplo if
function EjemploIf() {
  var nombre = "Jos";
  console.log(nombre);

  if(nombre == "Jos") {
    console.log("Hola Jos");
  } else if(nombre == "AlexisDoli") {
    console.log("Hola AlexisDoli")
  }else {
    console.log("Tu no eres Anuar ni AlexisDoli");
  }
}

// Ejercicio total de supermercado
function TotalDeSupermercado() {
  let Sal = Number (prompt("Cuanto costo la sal"))
  let Azucar = Number (prompt("Cuanto costo el Azucar"))
  let cereal = Number (prompt("Cuanto costo el cereal"))
  let Arroz = Number (prompt("Cuanto costo el Arroz"))
  let Helado = Number (prompt("Cuanto costo el Helado"))

  var total_supermercado = Sal + Azucar + cereal + Arroz + Helado

  console.log("El total de tu super es $" + total_supermercado +" " + "pesos");
}

//Ejercicio de Hambre
function HambreTristeza() {
  let hambre = prompt("tienes hambre? (si, no)")
  if (hambre == "si") {
    console.log("Estas triste")
  } else if (hambre == "no") {
    console.log("Estas feliz")
  }
}

// Ejercicio de pesos
function PesoIdeal(){
  let peso_ideal = Number(prompt("¿Cual es tu peso ideal?"));
  let peso_actual = Number(prompt("¿Cuanto pesas actualmente?"));
  let actividades = prompt("¿Quieres saber que tienes que hacer para llegar a tu peso ideal?");
  let semanas = 0;
  if (actividades == "si") {
   for(let i = peso_actual; i >= peso_ideal; i=i-1 ) {
       semanas = semanas+1;
       console.log("En la semana " + semanas + " pesas " + i + "kg")
   }
   console.log("Corre 30 min todos los dias de 9 a 9:30, come saludable por " + semanas + " semanas y has ejercicio todos los dias minimo 1 hora")
 }  else if (actividades == "no") {
   console.log("entonces sigue comiento hamburguesas y malteadas")
 }
}

// Math.random(); // Numero random entre el 0 y 1 (con desimales)
// Math.round(); // Redondea arriba y abajo
// Math.floor(); // Redondea hacia abajo
// Math.cell(); // Redondea hacia abajo

//Juego piedra papel o tijeras.
function PiedraPapelTijera(){
 let Jugador = prompt("¿Piedra, papel o tijera?");
  let tiro =  Math.floor((Math.random()*3));
  let tiro_compu;

  if (tiro == 1) {
      tiro_compu = "Piedra";
  } else if (tiro == 2) {
      tiro_compu = "Papel";
  } else {
      tiro_compu = "Tijera";
  }
  console.log(Jugador + tiro_compu)

  if (Jugador == "Piedra" && tiro_compu == "Papel") {
    console.log("Jugador " + Jugador +" vs Tiro Compu" + tiro_compu +" gana la compu.");
  } else if (Jugador == "Piedra" && tiro_compu == "Tijera") {
    console.log("Jugador " + Jugador +" vs Tiro Comppu" + tiro_compu + ", gana el Jugador");
  } else if (Jugador == "Piedra" && tiro_compu == "Piedra") {
    console.log("Jugador " +Jugador +" vs Tiro Compu" + tiro_compu + ", empate, intenta de nuevo");
  } else if (Jugador == "Papel" && tiro_compu == "Tijera") {
    console.log("Jugador " + Jugador +" vs Tiro Compu" + tiro_compu + ", gana el compu.");
  } else if (Jugador == "Papel" && tiro_compu == "Piedra"){
    console.log("Jugador " + Jugador +" vs Tiro Compu" + tiro_compu + ", gana el Jugador");
  }else if (Jugador == "Papel" && tiro_compu == "Papel") {
    console.log("Jugador " + Jugador +" vs Tiro Compu" + tiro_compu + ", empate, intenta de nuevo");
  } else if (Jugador == "Tijera" && tiro_compu == "Piedra") {
    console.log("Jugador " + Jugador +" vs Tiro Compu" + tiro_compu + ", gana el compu.");
  } else if (Jugador == "Tijera" && tiro_compu == "Papel") {
    console.log("Jugador " + Jugador +" vs Tiro Compu" + tiro_compu + ", gana el Jugador");
  }else if (Jugador == "Tijera" && tiro_compu == "Tijera") {
    console.log("Jugador " + Jugador +" vs Tiro Compu" + tiro_compu + ", empate, intenta de nuevo");
  }
}
// Ejercicio piedra papel o tijera j1 vs j2
function PiedraPapelTijeraJugador1VsJugador2(){
  let Jugador1 = prompt("¿Piedra, papel o tijera?(jugador 1)");
  let Jugador2 = prompt("¿Piedra, papel o tijera?(jugador 2)");

  console.log(Jugador1 + Jugador2)

   if (Jugador1 == "Piedra" && Jugador2 == "Papel") {
     console.log("Jugador1 " + Jugador1 +" vs Jugador2" + tiro_compu +" Gana Jugador2.");
   } else if (Jugador1 == "Piedra" && Jugador2 == "Tijera") {
     console.log("Jugador1 " + Jugador1 +" vs Jugador2u" + Jugador2 + ", Gana el Jugador1");
   } else if (Jugador1 == "Piedra" && Jugador2 == "Piedra") {
     console.log("Jugador1 " +Jugador1 +" vs Jugador2" + Jugador2 + ", Empate, intenta de nuevo");
     PiedraPapelTijeraJugador1VsJugador2();
   } else if (Jugador1 == "Papel" && Jugador2 == "Tijera") {
     console.log("Jugador1 " + Jugador1 +" vs Jugador2" + Jugador2 + ", Gana Jugador2.");
   } else if (Jugador1 == "Papel" && Jugador2 == "Piedra"){
     console.log("Jugador1 " + Jugador1 +" vs Jugador2" + Jugador2 + ", Gana el Jugador1");
   } else if (Jugador1 == "Papel" && Jugador2 == "Papel") {
     console.log("Jugador1 " + Jugador1 +" vs Jugador2" + Jugador2 + ", Empate, intenta de nuevo");
     PiedraPapelTijeraJugador1VsJugador2();
   } else if (Jugador1 == "Tijera" && Jugador2 == "Piedra") {
     console.log("Jugador1 " + Jugador1 +" vs Jugador2" + Jugador2 + ", Gana Jugador2.");
   } else if (Jugador1 == "Tijera" && Jugador2 == "Papel") {
     console.log("Jugador1 " + Jugador1 +" vs Jugador2" + Jugador2 + ", Gana el Jugador1");
   } else if (Jugador1 == "Tijera" && Jugador2 == "Tijera") {
     console.log("Jugador1 " + Jugador1 +" vs Jugador2" + Jugador2 + ", Empate, intenta de nuevo");
     PiedraPapelTijeraJugador1VsJugador2();
   }
}

// Ejercicio Fibonacci
function Fibonacci() {
  let numero = Number(prompt("Hasta que numero quieres saber?"));
  let resultadoA = 0;
  let resultadoB = 1;
  let resultadoC;

  for (let contador = 0; contador <= numero; contador ++) {
        if (contador == 0){
          console.log("El numero 1 de la serie es: 0");
        }
        if (contador == 1) {
          console.log("El numero 2 de la serie es: 1");
        }
        if (contador > 1){
          resultadoC = resultadoA + resultadoB;
          console.log("El numero " + contador + " de la serie es: " + resultadoC);
          resultadoA = resultadoB;
          resultadoB = resultadoC;
        }
      }
    }

    // let mascotas = ["perro", "gato", "perico","hamster","elefante"];
    //
    // for(let i = 0; i < mascotas.leng; i++) {
    //   console.log(macotas[i], "vuelta" + i);
    // }

  function contraseña(){
    let contraseña = prompt("Escribe tu contraseña");
    console.log("Tu contraseña es: " + contraseña);
    contraseña = contraseña.split("");
    for(let i = 0; i <= contraseña.length; i++) {
      if (contraseña[i] == "a"){
        contraseña[i] = 4;
      }else if (contraseña[i] == "e") {
        contraseña[i] = 3;
      }else if (contraseña[i] == "i") {
        contraseña[i] = 1;
      }else if (contraseña[i] == "o") {
        contraseña[i] = 0;
      }else if (contraseña[i] == "u") {
        contraseña[i] = 7;
      }
    }
    contraseña = contraseña.join("");
    contraseña = contraseña.toString();
    console.log("Tu contraseña seria: " + contraseña);
  }

  function palindromo(){
    let palabra = prompt("Identifica si una palabra es un palindromo. Escribe una palabra");
    console.log(palabra);
    palabra = palabra.split("");
    // for(let i = 0; i <= palabra.length; i++) {
    palabra = palabra.reverse();
    console.log(palabra);
  }
// -------------------------------

const historiaBoton = document.querySelector("#historia-boton");
const historiaNombre =document.querySelector("#nombre");
const historyBox = document.querySelector("#history-box");
const historiaedad =document.querySelector("#edad");
const historiaCiudad =document.querySelector("#ciudad");
const historiaMusica =document.querySelector("#musica");
const historiaEscuela =document.querySelector("#escuela");

historiaBoton.addEventListener("click" , generateHistory);

function generateHistory() {
  event.preventDefault();

  let nombre = historiaNombre.value;
  let edad = historiaedad.value;
  let ciudad = historiaCiudad.value;
  let musica = historiaMusica.value;
  let escuela = historiaEscuela.value;
  let history = "Hola mi nombre es " + nombre + ", y esta es mi historia. Tengo " + edad + " años y vivo en " + ciudad + ". Me gusta mucho escuchar " + musica + " , lo podría hacer todo el día sin parar. Actualmete estudio en " + escuela + " y salgo hasta las 10pm";

  historyBox.innerHTML = history;
}
