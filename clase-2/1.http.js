const http = require('node:http') // protocolo HTTP
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234 // podemos editar la variable de entorno PORT antes de ejecutar el archivo con un puerto deseado y se va a modificar. Sino, tomará el valor 3000

/*
  Para que la página se actualice automáticamente podemos usar el comando --watch al ejecutar
  O utilizar la dependencia muy famosa que se llama nodemon. Buscarlo en github. Se puede instalar como una dependencia de desarrollo con: npm install nodemon -D.

*/
const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  if (req.url === '/') {
    res.end('Mi página')
  } else if (req.url === '/imagen-super-bonita.png') {
    fs.readFile('./placa.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 Internal Server Error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 404 // Not found
    res.end('<h1>404</h1>')
  }
}
const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})
