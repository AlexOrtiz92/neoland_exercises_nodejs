//ESTE JS SE HACE POST POR EL BODY

const express = require("express");
const fs = require("fs");

const bodyParser = require("body-parser");

const api = express();


//CONF CORS

//CONF DECODE BODYPARSER

api.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.urlencoded({ extended: true })); TAMBIEN PUEDE USARSE A TRAVES DE EXPRESS

//GET

api.get("/api/pokemon", (request, response) => {
  fs.readFile("db/dbPokemon.json", (err, data) => {
    if (err) throw err; //elevar o notificar una excepcion
    const allPokemon = JSON.parse(data); //parseamos el contenido del fichero a JSON
    response.status(200).send({
      succes: true,
      message: "/api/pokemon",
      method: "GET",
      pokemon: allPokemon,
    });
  });
});

//2 formas de hacer POST:
//POST por el body

//POST pot parametros "api/pokemon?name=pikachu&type=electrico"

api.post("/api/pokemon", (request, response) => {
  // si nos faltara algun dato obligatorio, lo gestionamos de esta manera para que no haga nada

  if (!request.body.name || !request.body.type) {
    response.status(200).send({
      succes: false,
      url: "/api/pokemon",
      method: "POST",
      message: "name and type is required",
    });
  } else {
    //request.query tenemos los valores de la querystring
    // 1. Creamos el nuevo pokemon obteniendo los datos de request.query
    // 2. conseguimos el Array
    // 3. pusheamos el objeto en el array
    // 4. introducimos el array con el nuevo DataTransferItem, parseando el array con JSON.stringify(array)
    // 5. si todo ha ido BiquadFilterNode, respondemos con un mensaje ok

    fs.readFile("db/dbPokemon.json", (err, data) => {
      const allPokemon = JSON.parse(data);
      let isPokemon = 0

      if (allPokemon[allPokemon.length - 1] == null) {

        idPokemon = 1
      } else {
        idPokemon = allPokemon[allPokemon.length - 1].id + 1
      }

      const newPok = {
        id: idPokemon,
        name: request.body.name,
        type: request.body.type,
      };

      allPokemon.push(newPok);

      fs.writeFile("db/dbPokemon.json", JSON.stringify(allPokemon), (err) => {
        if (err) {
          response.status(400).send({
            succes: false,
            url: "/api/pokemon",
            method: "POST",
            message: "fallo al añadir el pokemon",
          });
        } else {
          response.status(201).send({
            succes: true,
            url: "/api/pokemon",
            method: "POST",
            message: "pokemon añadido correctamente",
          });
        }
      });
    });
  }
});

//DELETE
api.delete("/api/pokemon", (request, response) => {

  if (!request.body.id) {
    response.status(200).send({
      succes: false,
      url: "/api/pokemon",
      method: "DELETE",
      message: "id or name is required",
    });
  } else {

    fs.readFile("db/dbPokemon.json", (err, data) => {

      //con NAME

      // const allPokemon = JSON.parse(data);
      // const name = request.body.name;

      // const newAllPok = allPokemon
      //   .map((value) => {
      //     if (value.name !== name) {
      //       return value;
      //     }
      //   })
      //   .filter((value) => value != null);


      // con ID

      const allPokemon = JSON.parse(data);
      const id = request.body.id;

      const newAllPok = allPokemon
        .map((value) => {
          if (`${value.id}` !== id) {
            return value;
          }
        })
        .filter((value) => value != null);

      fs.writeFile("db/dbPokemon.json", JSON.stringify(newAllPok), (err) => {
        if (err) {
          response.status(400).send({
            succes: false,
            url: "/api/pokemon",
            method: "DELETE",
            message: "fallo al eliminar el pokemon",
          });
        } else {
          response.status(201).send({
            succes: true,
            url: "/api/pokemon",
            method: "DELETE",
            message: "pokemon eliminado correctamente",
          });
        }
      });
    });
  }
});



//GET ONE

api.get("/api/onepokemon", (request, response) => {

  if (!request.body.id) {
    response.status(200).send({
      succes: false,
      url: "/api/onepokemon",
      method: "GET ONE",
      message: "id or name is required",
    });
  } else {
    fs.readFile("db/dbPokemon.json", (err, data) => {

      const allPokemon = JSON.parse(data);
      const id = request.body.id;

      const onePokemon = allPokemon
        .map((value) => {
          if (`${value.id}` === id) {
            return value;
          }
        })
        .filter((value) => value != null);

      response.status(201).send({
        succes: true,
        url: "/api/onepokemon",
        method: "GET ONE",
        message: "pokemon sacado correctamente",
        pokemon: onePokemon
      });
    })
  }
});


const port = "5555";
const host = "127.0.0.1";

api.listen(port, host, () => {
  console.log(`Servidor corriendo en http://${host}:${port}/api/pokemon`);
});
