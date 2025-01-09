const fs = require('node:fs/promises')

// En los callbacks el error siempre es el primer parámetro. Así que para manejarlo hay que codearlo.
fs.readdir('.')
  .then(files => {
    files.forEach(file => {
      console.log(file)
    })
  })
  .catch(err => {
    if (err) {
      console.error('Error al leer el directorio: ', err)
    }
  })
