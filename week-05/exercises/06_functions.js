console.log('--EXERCISE 6: Function');

/*a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el 
resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

console.log('--EXERCISE 6.a:');

function suma(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}

var result = suma(5, 6);

console.log('Result: ' + result);

/*b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un 
número; de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar
el valor NaN como resultado.*/

console.log('--EXERCISE 6.b:');

function sumaDos(numOne, numTwo) {
  if (typeof(numOne) == 'number' && typeof(numTwo) == 'number') {
        return numOne + numTwo;
    } else {
        alert('Uno de los parametros no es un numero');
        return 'NaN';
    } 
}

console.log('Result: ' + sumaDos(3,4));

/*c. Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si 
es un número entero.*/

console.log('--EXERCISE 6.c:');

function validate(num) {
    if (Number.isInteger(num)) {
        return true
    } else {
        return false
    }
}

console.log('Result: ' + validate(4));

/*d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los 
números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido 
a entero (redondeado).*/

console.log('--EXERCISE 6.d:');

function sumaTres(numOne, numTwo) {
    if (typeof(numOne) == 'number' && typeof(numTwo) == 'number') {
        if (validate(numOne) == true && validate(numTwo) == true) {
            return numOne + numTwo;
        } else {
            alert('Uno o ambos numeros contienen decimales');
            return Math.round(numOne + numTwo);
        }
    } else {
        alert('Uno o ambos parametros no es un numero');
        return 'NaN';
    }
}

console.log('Result: ' + sumaTres(3, 4));

/*e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando
que todo siga funcionando igual.*/

console.log('--EXERCISE 6.e:');

function validacionSeparada(numOne, numTwo) {
    if (typeof(numOne) === 'number' && typeof(numTwo) === 'number') {
        if (validate(numOne) == true && validate(numTwo) == true) {
            return numOne + numTwo;
        } else {
            alert('Uno o ambos numeros contienen decimales');
            return Math.round(numOne + numTwo);
        }
    } else {
        alert('Uno o ambos parametros no es un numero');
        return 'NaN';
    }
}

function sumaFinal(numOne, numTwo) {
    if (validacionSeparada(numOne, numTwo)) {
        return numOne + numTwo;
    } else {
       return console.log('Error');
    }
}

console.log('Result: ' + sumaFinal(4, 5));