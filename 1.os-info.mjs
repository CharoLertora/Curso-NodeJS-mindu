import os from 'node:os'

console.log('Información del sistema operativo: ')
console.log('---------------------------------')

console.log('Nombre del sistema operativo:', platform())
console.log('Versión del sistema operativo:', release())
console.log('Arquitectura:', arch())
console.log('CPUs:', cpus()) //<--- Vamos a poder escalar procecsos en Node con esto
console.log('Memoria libre:', freemem() / 1024 / 2024)
console.log('Memoria total:', totalmem() / 1024 / 2024)
console.log('uptime', uptime() / 60 / 60)