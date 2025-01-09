const path = require('node:path')

// barra separadora de carpetas segun SO
console.log(path.sep)

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log('Creando una ruta: ', filePath)

const base = path.basename('/tmp/midu-secret-files/password.txt')
console.log('Nombre del fichero: ',base)

const filename = path.basename('/tmp/midu-secret-files/password.txt', '.txt')
console.log('Nombre del fichero sin la extensión: ',filename)

const extension = path.extname('my.super.image.jpg')
console.log('Te da la extensión de un archivo: ',extension)