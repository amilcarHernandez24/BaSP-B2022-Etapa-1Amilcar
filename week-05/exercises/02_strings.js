console.log('--EXERCISE 2: Strings');

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
(utilizar toUpperCase).*/

console.log('--EXERCISE 2.a:');

var upperText = 'Esta es mi variable';

console.log('Resultado: ' + upperText.toUpperCase());

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('--EXERCISE 2.b:');

var subText = 'Segundo ejercicio';
var newSubText = subText.substring(0,5);

console.log('Resultado: ' + newSubText);

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres
guardando el resultado en una nueva variable (utilizar substring).*/

console.log('--EXERCISE 2.c:');

var subTextBack = 'Tercer ejercicio';
var newSubTextBack = subTextBack.substring(16, 13);

console.log('Resultado: ' + newSubTextBack);

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en 
mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
toLowerCase y el operador +).*/

console.log('--EXERCISE 2.d:');

var firstInUpper = 'se esta complicando';
var stringOne = firstInUpper.substring(0,1).toUpperCase();
var stringTwo = firstInUpper.substring(1,19).toLowerCase();

console.log('Result: ' + stringOne + stringTwo);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición 
del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */

console.log('--EXERCISE 2.e:');

var findSpace = 'Esta es un variable';
var spaceFound = findSpace.indexOf(' ');

console.log('Resultado: ' + spaceFound);

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el 
operador +). */

console.log('--EXERCISE 2.f:');

var twoLongWords = 'palabrotas largotototas';
var whereIsSpace = twoLongWords.indexOf(' ');

var firstWordA = twoLongWords.substring(0,1).toUpperCase();
var firstWordB = twoLongWords.substring(1,10).toLowerCase();

var secWordA = twoLongWords.substring(11,12).toUpperCase(); 
var secWordB = twoLongWords.substring(12,23);

console.log('Result: space position ' + whereIsSpace);
console.log('Result: ' + firstWordA + firstWordB + " " + secWordA + secWordB);