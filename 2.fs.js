//Usamos el sistema de archivos => fs => file system
//Es uno de los modulos más importantes de nodejs
const fs = require('node:fs') //a partir de node 16, se recomienda poner node:

//En nodejs podemos usar procesos asíncronos y sincronos.
//Este ejemplo es síncrono: lo hacemos de manera síncrona a la ejecución y lo recibimos cuando termina.
const stats = fs.statSync('./archivo.txt')
console.log(
    stats.isFile(), // si es un fichero
    stats.isDirectory(), //si es un directorio
    stats.isSymbolicLink(), //si es un enlace simbólico
    stats.size(), // tamaño en bytes
)
