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





function compu(){
  let jugaddor = prompt("¿Piedra, Papel o ...?");
  let tiro = Math.floor(Math.random() * 3); // 0 - 2
  if (jugador == "Pierda" && compu == "tijeras"){
  console.log("Ganaste");
} else if (true) {

}

}

// Math.random(); // Numero random entre el 0 y 1 (con desimales)
// Math.round(); // Redondea arriba y abajo
// Math.floor(); // Redondea hacia abajo
// Math.cell(); // Redondea hacia abajo
