console.log('--Ejercicio 2: STRINGS');

// Ejercicio a. Crear una variable de tipo string con al menos 10 caracteres y
// convertir todo el texto en mayúscula (utilizar toUpperCase).
console.log('-Exercise 2.a:');

let texto = "Vamos Argentina!";

let textoMayusculas = texto.toUpperCase();

console.log("El texto en mayúsculas es: " + textoMayusculas);

// Ejercicio b. Crear una variable de tipo string con al menos 10 caracteres y generar 
// un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log('-Exercise 2.b:');

const cadena = "ejemplo de cadenas";
const nuevaCadena = cadena[0] + cadena[1] + cadena[2] + cadena[3] + cadena[4];
console.log(nuevaCadena); 

// Ejercicio c. Crear una variable de tipo string con al menos 10 caracteres y generar un 
// nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log('-Exercise 2.c:');

let Cadena = "JulianAlvarez";

let ultimosTresCaracteres = Cadena.substring(Cadena.length - 3);

console.log(ultimosTresCaracteres);

// // Ejercicio d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con 
// la primera letra en mayúscula y las demás en minúscula.
// Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
console.log('-Exercise 2.d:');

let originalString = "estadio lusail";

let firstLetter = originalString.substring(0, 1);
let restOfLetters = originalString.substring(1);

firstLetter = firstLetter.toUpperCase();
restOfLetters = restOfLetters.toLowerCase();

let newString = firstLetter + restOfLetters;

console.log(newString);


// Ejercicio e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
// Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
console.log('-Exercise 2.e:');

let myString = "Enzo Fernandez";

let firstSpaceIndex = myString.indexOf(" ");

console.log(firstSpaceIndex);

// Ejercicio f. Crear una variable de tipo string con al menos 2 palabras largas 
// (10 caracteres y algún espacio entre medio).Utilizar los métodos de los ejercicios anteriores para generar un 
// nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula 
// (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
console.log('-Exercise 2.f:');

let originalString2 = "copa mundial de fútbol";

let firstSpaceIndex2 = originalString2.indexOf(" ");

let firstWordFirstLetter = originalString2.substring(0, 1);
let firstWordRestOfLetters = originalString2.substring(1, firstSpaceIndex2);

firstWordFirstLetter = firstWordFirstLetter.toUpperCase();
firstWordRestOfLetters = firstWordRestOfLetters.toLowerCase();

let secondWordFirstLetter = originalString2.substring(firstSpaceIndex2 + 1, firstSpaceIndex2 + 2);
let secondWordRestOfLetters = originalString2.substring(firstSpaceIndex2 + 2);

secondWordFirstLetter = secondWordFirstLetter.toUpperCase();
secondWordRestOfLetters = secondWordRestOfLetters.toLowerCase();

let newString2 = firstWordFirstLetter + firstWordRestOfLetters + " " + secondWordFirstLetter + secondWordRestOfLetters;

console.log(newString2);



