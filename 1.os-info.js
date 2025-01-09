const os = require('node:os')

console.log('Información del sistema operativo: ')
console.log('---------------------------------')

console.log('Nombre del sistema operativo:', os.platform())
console.log('Versión del sistema operativo:', os.release())
console.log('Arquitectura:', os.arch())
console.log('CPUs:', os.cpus()) //<--- Vamos a poder escalar procecsos en Node con esto
console.log('Memoria libre:', os.freemem() / 1024 / 2024)
console.log('Memoria total:', os.totalmem() / 1024 / 2024)
console.log('uptime', os.uptime() / 60 / 60)