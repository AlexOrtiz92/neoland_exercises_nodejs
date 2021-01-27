const fs = require("fs")

const write = (request) => {
  const log = `\n${request.url}|${new Date().toLocaleString()}`

  fs.appendFile("Neoland.log", log, (error) => {

    if (error) {
      console.error("algo ha ido mal y no se ha podido añadir en el fichero")
    } else {
      console.log("fichero actualizado correctamente")
    }
  })
}

module.exports = {
  write: write
}