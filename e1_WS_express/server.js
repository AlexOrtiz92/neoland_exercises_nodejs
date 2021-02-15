const express = require("express");
const app = express()



app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/html", { extensions: ["html"] }))
app.use(express.static(__dirname + "/public/images"))
app.use(express.static(__dirname + "/public/style"))
app.use(express.static(__dirname + "/public/src"))





const port = "1234";
const host = "127.0.0.1";

app.listen(port, host, () => {
  console.log(`Servidor corriendo en http://${host}:${port}`)
})
