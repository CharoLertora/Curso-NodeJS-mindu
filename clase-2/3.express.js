// express es un framework
const express = require('express')
const ditto = require('./pokemon/ditto.json')
const app = express()
app.disable('x-powered-by') // esto sirve para eliminar la cabecera que agrega express por sí sola, la cual puede generar bugs

const PORT = process.env.PORT ?? 1234

app.use(express.json()) // esta línea hace lo mismo que lo que está abajo comentado
/*
app.use((req, res, next) => {
  // trackear la request a la base de datos
  // revisar si el usuario tiene cookies
  // podemos poner todas las url que queramos que se revisen antes de ejecutar la que se está recibiendo.
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()

  // acá solo llegan los request que son POST y que tienen el header Content-Type: application/json
  let body = ''

  // escuchar el evento data
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    // mutar la request y meter la información en el req.body
    req.body = data
    next()
  })
})
*/
// cuando la app recibe un get, entonces se ejecuta esta función.
app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

// esta siempre va al final, porque es la de error y primero va a probar por todas las anteriores.
app.use((req, res) => {
  res.status(404).send('<h1>404<h1>')
})

app.listen(PORT, () => {
  console.log('server listening on port http://localhost:1234')
})
