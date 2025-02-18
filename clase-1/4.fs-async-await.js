// Esto sólo en los módulos nativos
// que no tienen promesas nativas

// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

//Asíncrono secuencial
const { readFile } = require('node:fs/promises')

async function init () {
  console.log('Leyendo el primer archivo...')
  const text = await readFile('./archivo.txt', 'utf-8')
  console.log('primer texto:', text)
  console.log('--> Hacer cosas mientras lee el archivo...')
  
  console.log('Leyendo el segundo archivo...')
  const secondText = await readFile('./archivo2.txt', 'utf-8')
  console.log('segundo texto:', secondText)    
}

init()

// IIFE - Inmediatly Invoked Function Expression => es una función que se ejecuta al mismo tiempo que está siendo creada. Es lo mismo que se hace en el código de arriba
// ;(
//   async () => {
//     console.log('Leyendo el primer archivo...')
//     const text = await readFile('./archivo.txt', 'utf-8')
//     console.log('primer texto:', text)
//     console.log('--> Hacer cosas mientras lee el archivo...')
    
//     console.log('Leyendo el segundo archivo...')
//     const secondText = await readFile('./archivo2.txt', 'utf-8')
//     console.log('segundo texto:', secondText)    
//   }
// )()

