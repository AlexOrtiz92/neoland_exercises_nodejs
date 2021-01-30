const express = require("express");
const fs = require("fs");

const api = express();

api.get("/api/pokemon", (request, response) => {
  fs.readFile("db/dbPokemon.json", (err, data) => {
    if (err) throw err;//elevar o notificar una excepcion
    const allPokemon = JSON.parse(data);//parseamos el contenido del fichero a JSON
    response.status(200).send({
      succes: true,
      message: "/api/pokemon",
      pokemon: allPokemon
    })
  })
})


const port = "5555";
const host = "127.0.0.1";

api.listen(port, host, () => {
  console.log(`Servidor corriendo en http://${host}:${port}/api/pokemon`)
})
