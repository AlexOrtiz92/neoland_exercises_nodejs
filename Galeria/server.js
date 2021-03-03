//Este ejercicio es un servicio para subir imagenes a nuestra aplicacion a traves de un formulario

const express = require("express");
//instalamos formidable y jquery
const formidable = require("formidable")
export const fs = require("fs");

const app = express();

app.use(express.static(__dirname + "/public"))
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"))
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"))
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist"))
app.use(express.static(__dirname + "/public/html", { extensions: ["html"] }))

//esto es un midleware, que es un webservice, indicamos la ruta(endpoint)
app.post("/uploadFile", (request, response) => {
  const form = new formidable.IncomingForm(); //de esta forma inicializamos formidable

  // form.maxFileSize = 200

  form.parse(request);//parseamos y le pasamos la request para que formidable la entiendoa

  //evento que se lanza cuando comienza la subida
  form.on("fileBegin", (name, file) => {
    file.path = __dirname + "/public/images/" + file.name;//aqui podemos dar nombre de la ruta como queramos o realizar mas acciones, configuraciones etc.
  })

  //evento que se ejecuta cuando temrina la subida
  form.on("file", (name, file) => {
    console.log("Uploaded " + file.name)
  })

  form.on("end", () => {
    response.redirect("/galeria")
  });
});


app.get("/api/images", (request, response) => {

  fs.readdir("public/images", (err, data) => {
    console.log(data)
    if (err) throw err;

    response.status(200).send({
      succes: true,
      message: "/api/pokemon",
      method: "GET",
      images: data,
    });
  });
});





const port = "4444";
const host = "127.0.0.1";

app.listen(port, host, () => {
  console.log(`Servidor corriendo en http://${host}:${port}`)
})
