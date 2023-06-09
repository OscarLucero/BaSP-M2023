console.log('--Ejercicio 5: FOR');

/* Ejercicio a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un
bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras. */
console.log('-Exercise 5.a:');

var palabras = ["Argentina", "Es", "Campeona", "Del", "Mundo"];

for (var i = 0; i < palabras.length; i++) {
  alert(palabras[i]);
}

/* Ejercicio b. Al array anterior convertir la primera letra de cada palabra
en mayúscula y mostrar una alerta por cada palabra modificada. */
console.log('-Exercise 5.b:');

var palabrasMayus = ["argentina", "es", "campeona", "del", "mundo"];

for (var i = 0; i < palabrasMayus.length; i++) {
  var palabraConMayuscula = palabrasMayus[i].charAt(0).toUpperCase() + palabrasMayus[i].slice(1);
  alert(palabraConMayuscula);
}

/* Ejercicio c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a)
recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence.
Al final mostrar una única alerta con la cadena completa. */
console.log('-Exercise 5.c:');

var cadenacompleta = ["Argentina", "Es", "Campeona", "Del", "Mundo"];
var sentence = "";

for (var i = 0; i < cadenacompleta.length; i++) {
  sentence += cadenacompleta[i] + " ";
}

/* Ejercicio d. Crear un array vacío y con un bucle for de 10 repeticiones. Llenar el array con el
número de la repetición,es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del
array desde el número 0 hasta al número 9. Mostrar por la consola del
navegador el array final (utilizar console.log). */
console.log('-Exercise 5.d:');

var numeros = [];

for (var i = 0; i < 10; i++) {
  numeros.push(i);
}

console.log(numeros);
