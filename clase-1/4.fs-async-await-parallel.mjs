// Esto sólo en los módulos nativos
// que no tienen promesas nativas

// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

//Asíncrono paralelo
//Lo bueno es que esto es más rápido, hacemos 2 cosas en paralelo. También podemos controlar cual se hace primero y cual segundo, a diferencia de los otros casos


import { readFile } from 'node:fs/promises'

Promise.all([
  readFile('./archivo.txt', 'utf-8'),
  readFile('./archivo2.txt', 'utf-8')
]).then(([text, secondText]) => {
  console.log('primer texto:', text)
  console.log('segundo texto:', secondText)
})