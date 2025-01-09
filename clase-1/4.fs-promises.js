// Esto sólo en los módulos nativos que no tienen promesas nativas. ----> lo que se puede hacer es crear la versión de promesas de un archivo que no sea de promesas. Solo te utiliza en aquellos casos en los que no exista la versión de promesas.
// const { promisify } = require('node:util') 
// const readFilePromise = promisify(fs.readFile)
// -------------------------------------------------------
//Esto lo utilizamos para no usar callbacks. Sigue siendo para código asíncrono

const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8')
  .then(text => {
    console.log('primer texto:', text)
  })

console.log('--> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8')
  .then(text => {
    console.log('segundo texto:', text)
  })
