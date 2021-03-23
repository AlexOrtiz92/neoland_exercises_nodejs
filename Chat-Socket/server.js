const express = require("express");
const http = require("http")

const app = express()
const server = http.createServer(app)

//requerimos socket.io y lo enriquecemos con express
const io = require("socket.io")(server)


app.use(express.static(__dirname + "/public"))
app.use(express.static(__dirname + "/public/html", { extensions: ["html"] }))
//configuramos para que lea soccket a traves de nodemodules
app.use("/js", express.static(__dirname + "/node_modules/socket.io/client-dist"))




//CHAT

//parametro 1. crea la conexion con socket 2.es callback con el codigo a ejecutar
io.on("connection", (socket) => {

  console.log("nuevo usuario conectado")


  //1. nombre del evento 2.Callback con todos argumentos que queramos de 1 ... n

  //Evento AÑADIR MENSAJE
  //Recibimos el evento enviado desde el js
  socket.on("addNewMessage", (message, inputUser, a, b, c) => {

    //Emitimos el evento de nuevo dentro del callback
    io.emit("paintMessage", message, inputUser)

  })

  //Evento de DESCONEXION 
  socket.on("disconnect", () => {
    console.log(`usuario desconectado`)
  })
})





const port = "3434";
const host = "127.0.0.1";

server.listen(port, host, () => {
  console.log(`Servidor corriendo en http://${host}:${port}/chat`)
})
