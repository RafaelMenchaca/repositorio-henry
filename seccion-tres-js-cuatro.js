// EJERCICIO 1.................................................
// function devolverPrimerElemento(array) {
//   // Devuelve el primer elemento de un  array (pasado por parametro)
//   // Tu código:
//   const myArray = ["Luis", "Carlos", "Juan", "Rafael"];
//   console.log(myArray[array]);
// }
// devolverPrimerElemento(1);

// function devolverPrimerElemento(array) {

//   console.log(array[1]);
// }
// devolverPrimerElemento([10, 11, 16, 12]);

// const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel'];

// console.log(nombresEstudiantes.length); 


// EJERCICIO 2.................................................

// function devolverPrimerElemento(array) {
    // Devuelve el último elemento de un array
  // Tu código:

//   console.log(array[array.length - 1]);
// }
// devolverPrimerElemento([10, 11, 16, 12]);


// EJERCICIO 4.................................................

// function incrementarPorUno(array) {
//   // "array" debe ser una matriz de enteros (int/integers)
//   // Aumenta cada entero por 1
//   // y devuelve el array
//   // Tu código:

// for (let i = 0; i < array.length; i++) {
//     let suma = array[i] + 1;
//     array[i] = suma;
//     // console.log(array);
// }
//   console.log(array);
  
// }
// incrementarPorUno([1, 2, 3, 4, 5, 6, 7]);

// EJERCICIO.................................................

// function dePalabrasAFrase(palabras) {
//   // "palabras" es un array de strings/cadenas
//   // Devuelve un string donde todas las palabras estén concatenadas
//   // con espacios entre cada palabra
//   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
//   // Tu código:

//     // var string1 = 0;
//     // var string2 = 0;
//     // var string3 = 0;

//      for (let i = 0; i < palabras.length; i++) {
//         if (i === 0){
//           var string1 = palabras[i];
//         } else if ( i === 1){
//           var string2 = palabras[i];
//         } else if (i === 2){
//           var string3 = palabras[i];
//         }

//         // console.log(palabras[i]);
        
        
//     }
//         // console.log(string1);
//         // console.log(string2);
//         // console.log(string3);
//         document.write(string1 + ' ' +   string2 + ' ' +  string3);
// }


// dePalabrasAFrase(['Henry', 'JavaScript', 'Class']);


// var string1 = 'Henry';
// var string2 = 'JavaScript';
// var string3 = 'Class'

// if (string1.length >= 1 && string2.length >= 1 && string3.length >= 1){
//   return string1 + ' ' +   string2 + ' ' +  string3;
// } else if (string2.length === 0){
// return string1;
// }


// EJERCICIO.................................................

// function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  // for (let i = 0; i < numeros.length; i++){
  //     let suma = numeros[i] + ;
  //      numeros[i] = suma;
  //      console.log(numeros);     

  //      } 
    //    for(var i = 0; i < numeros.length; i++){
    //     let numero = numeros[i];
    //     let suma += numero;
    //     console.log(numeros);
    // }
    //    console.log(numeros);

//     var arreglo = numeros, suma = 0;
//     arreglo.forEach (function(numero){
//         suma += numero;
//     });
//     console.log(suma);

// }
// agregarNumeros([1, 2, 3, 4, 5, 6, 7]);