console.log('--Ejercicio 1: VARIABLES AND OPERATORS');

/* Ejercicio a. Crear dos variables numéricas y utilizar el operador suma para guardar
el valor de la suma de ambos números en una 3er variable*/
console.log('-Exercise 1.a:');

var num1 = 21;
var num2 = 18;

var suma = num1 + num2;

console.log("El resultado de la suma es: " + suma);

// Ejercicio b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
console.log('-Exercise 1.b:');

var nombre = "Lionel";
var apellido = "Messi";

var nombreCompleto = nombre + " " + apellido;

console.log("El nombre completo es: " + nombreCompleto);

/* Ejercicio c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
guardando el resultado de la suma en una 3er variable (utilizar length). */
console.log('-Exercise 1.c:');

var string1 = "Radium";
var string2 = "Rocket";

var sumaLargos = string1.length + string2.length;

console.log("La suma de las variables es: " + sumaLargos);
