console.log('--Ejercicio 3: ARRAYS');

/* Ejercicio a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log). */

console.log('-Exercise 3.a:');

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(meses[4]);
console.log(meses[10]);

// Ejercicio b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log('-Exercise 3.b:');

var mesesB = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
 "Septiembre", "Octubre", "Noviembre", "Diciembre"];

mesesB.sort();

console.log(mesesB);

// Ejercicio c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
console.log('-Exercise 3.c:');

var mesesC = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
 "Septiembre", "Octubre", "Noviembre", "Diciembre"];

mesesC.unshift("Principio");
mesesC.push("Final");

console.log(mesesC);

// Ejercicio d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log('-Exercise 3.d:');

var mesesD = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
 "Septiembre", "Octubre", "Noviembre", "Diciembre"];

mesesD.shift(); 
mesesD.pop(); 

console.log(mesesD);

// Ejercicio e. Invertir el orden del array (utilizar reverse).
console.log('-Exercise 3.e:');

var mesesE = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
"Septiembre", "Octubre", "Noviembre", "Diciembre"];

mesesE.reverse();

console.log(mesesE);

// Ejercicio f.Unir todos los elementos del array en un único string donde cada
// mes este separado por un guión - (utilizar join).
console.log('-Exercise 3.f:');

var mesesF = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
"Septiembre", "Octubre", "Noviembre", "Diciembre"];

var mesesUnidos = mesesF.join("-");

console.log(mesesUnidos);

// Ejercicio g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log('-Exercise 3.g:');

var mesesG = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
"Septiembre", "Octubre", "Noviembre", "Diciembre"];

var copiaMeses = mesesG.slice(4, 11);

console.log(copiaMeses);
