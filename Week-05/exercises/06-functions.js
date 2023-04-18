console.log('--Ejercicio 6: FUNCTIONS');

/* Ejercicio a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función
y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */
console.log('-Exercise 6.a:');

function suma(a, b) {
    return a + b;
  }
  
  var solucion = suma(18, 12);
  
  console.log(solucion);

/* Ejercicio b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros
no es un número; de no ser un número, mostrar un alert aclarando que uno de los
parámetros tiene error y retornar el valor NaN como resultado. */
console.log('-Exercise 6.b:');

function suma(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      alert("Uno de los parámetros no es un número.");
      return NaN;
    } else {
      return a + b;
    }
  }
  
  var resultado = suma(5, "hola");
  
  console.log(resultado);
  
/* Ejercicio c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva 
verdadero si es un número entero. */
console.log('-Exercise 6.c:');

function validateInteger(num) {
    if (Number.isInteger(num)) {
      return true;
    }
    return false;
  }
  

/* Ejercicio d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio
6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error
y retornar el número convertido a entero (redondeado). */
console.log('-Exercise 6.d:');

function sumaEnteros(num1, num2) {
    if (!validateInteger(num1) || !validateInteger(num2)) {
      alert('Error: Uno o ambos parámetros no son números enteros');
      num1 = Math.round(num1);
      num2 = Math.round(num2);
    }
    return num1 + num2;
  }
  

/* Ejercicio e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva
función probando que todo siga funcionando igual que en el apartado anterior. */
console.log('-Exercise 6.e:');

function validateInteger(num) {
    if (Number.isInteger(num)) {
      return true;
    }
    return false;
  }
  
  function sumaEnteros(num1, num2) {
    if (!validateInteger(num1) || !validateInteger(num2)) {
      alert('Error: uno de los parámetros no es un número entero');
      num1 = Math.round(num1);
      num2 = Math.round(num2);
    }
    return num1 + num2;
  }
  
  function sumaEnterosValidados(num1, num2) {
    return sumaEnteros(num1, num2);
  }
  
  var resolucion = sumaEnterosValidados(2, 3.5);
  console.log(resolucion);
  



