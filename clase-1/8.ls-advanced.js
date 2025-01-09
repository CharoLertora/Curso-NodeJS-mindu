const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.' // Le pedimos que lea apartir del 3 argumento que vendría a ser el nomrbe de la carpeta. Sino hay ninguno, leera a partir de donde estoy parada.

// Acá usamos algo asíncrono porque sí o si necesitamos leer todos ls ficheros antes de hacer algo con ellos.
async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(pc.red(`❌ No se pudo leer el directorio ${folder}`))
    process.exit(1)
  }

  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats

    try {
      stats = await fs.stat(filePath) // status - información del archivo
    } catch {
      console.error(pc.red(`❌ No se pudo leer el archivo ${filePath}`))
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f' // d es directorio y f es un archivo
    const fileSize = stats.size.toString()
    const fileModified = stats.mtime.toLocaleString()

    return `${pc.magenta(fileType)} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize.padStart(10))} ${pc.yellow(fileModified)}` // padEnd es para que siempre ocupe 20 espacios; pad estar es para que deje 10 espacios desde donde le toca arrancar
  })

  const filesInfo = await Promise.all(filesPromises)

  filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)
