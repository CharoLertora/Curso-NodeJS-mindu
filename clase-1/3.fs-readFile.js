//esta es la forma asincrona de leer archivos, es decir, que mientras se lee el archivo podemos hacer otras cosas. Para eso se usa el callback. Es la forma que tiene js de saber cuando se termino de leer un texto. Y cuando se termina de leer, ejecuta el código que está dentro de las llaves.
//Un callback  es una función que se ejecuta cuando se termina una tarea específica
//Asíncrono con callbacks

const fs = require('node:fs')

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => { // <---- ejecutas este callback
  console.log('primer texto:', text)
})

console.log('--> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  console.log('segundo texto:', text)
})
