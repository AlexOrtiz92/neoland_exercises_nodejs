//inicializamos socket (ya la habiamos llamado en nuestro html)
const socket = io()


//Funcion que envia un evento al servidor
const sendMessage = () => {

  const inputMessage = document.getElementById("inputMessage").value
  const inputUser = document.getElementById("inputUser").value

  //1. nombre del evento 2.Callback con todos argumentos que queramos de 1 ... n
  //el arg 1 es lo que va a machear con el socket de mi server.js
  socket.emit("addNewMessage", inputMessage, inputUser)

};

//recibimos el evento enviado por el servidor y pintamos

socket.on("paintMessage", (message, user) => {

  const li = document.createElement("li");
  li.innerText = user + ":" + message;
  const ul = document.getElementById("ulMessages");
  ul.appendChild(li)
})



window.addEventListener("keydown", (event) => {

  if (event.key === "Enter") {
    sendMessage()
  }
})

