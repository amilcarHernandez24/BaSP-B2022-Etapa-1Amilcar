console.log('--EXERCISE 3: Arrays');


/* a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/

console.log('--EXERCISE 3.a:');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
'Octubre', 'Noviembre', 'Diciembre'];

console.log('Result: ' + months[4], months[10]);

// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log('--EXERCISE 3.b:');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
'Octubre', 'Noviembre', 'Diciembre'];

console.log('Result: ' + months.sort());

// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log('--EXERCISE 3.c:');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
'Octubre', 'Noviembre', 'Diciembre'];

months.unshift('Principio');
months.push('Final');

console.log('Result: ' + months);

// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log('--EXERCISE 3.d:');

var months = ['Principio', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
'Octubre', 'Noviembre', 'Diciembre', 'Final'];

months.shift();
months.pop();

console.log('Result: ' + months);

// e. Invertir el orden del array (utilizar reverse).

console.log('--EXERCISE 3.e:');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
'Octubre', 'Noviembre', 'Diciembre'];

console.log('Result: ' + months.reverse());

// f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

console.log('--EXERCISE 3.f:');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
'Octubre', 'Noviembre', 'Diciembre'];
var monthsTogether = months.join('-');

console.log('Result: ' + monthsTogether);

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log('--EXERCISE 3.g:');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
'Octubre', 'Noviembre', 'Diciembre'];

var partOfYear = months.slice(4,11);

console.log('Result: ' + partOfYear);