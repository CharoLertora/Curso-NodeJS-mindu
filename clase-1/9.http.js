const http = require('node:http') // protocolo HTTP
const { findAvailablePort } = require('./10.free-port.js')

console.log(process.env)

const desiredPort = process.env.PORT ?? 3000 // podemos editar la variable de entorno PORT antes de ejecutar el archivo con un puerto deseado y se va a modificar. Sino, tomará el valor 3000

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})
