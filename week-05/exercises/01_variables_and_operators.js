console.log('--EXERCISE 1: Variables and Operators');

/* a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en 
una 3er variable.*/

console.log('--EXERCISE 1.a:');

var firstNum = 4;
var secNum = 3;
var result = firstNum + secNum;

console.log('Result: ' + result);

/* b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable. */

console.log('--EXERCISE 1.b:');

var firstName = 'My name is';
var lastName = 'Amilcar Hernandez';
var fullName = firstName + ' ' + lastName;

console.log('Name: ' + fullName);

/* c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando 
el resultado de la suma en una 3er variable (utilizar length). */

console.log('--EXERCISE 1.c:');

var textOne = 'this is a text';
var textTwo = 'and this is another text';
var totalString = textOne.length + textTwo.length;

console.log('String length: ' + totalString);