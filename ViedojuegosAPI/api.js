const express = require("express");

const fs = require("fs");

const bodyParser = require("body-parser");

const api = express();

const DB_VIDEOJ = "db/dbVideojuegos.json";

//CONF CORS
api.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  // authorized headers for preflight requests
  // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
  api.options("*", (req, res) => {
    // allowed XHR methods
    res.header(
      "Access-Control-Allow-Methods",
      "GET, PATCH, PUT, POST, DELETE, OPTIONS"
    );
    res.send();
  });
});

//CONF DECODE BODYPARSER
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));


//GET all pokemon
api.get("/api/videogames", (request, response) => {
  fs.readFile(DB_VIDEOJ, (err, data) => {
    if (err) throw err;
    const allVideogames = JSON.parse(data);

    response.status(200).send({
      succes: true,
      url: "/api/videogames",
      method: "GET",
      pokemon: allVideogames,
    });
  });
});


//POST añade un videojuego
api.post("/api/videogames", (request, response) => {
  fs.readFile(DB_VIDEOJ, (err, data) => {
    if (err) throw err;
    const allVideogames = JSON.parse(data);
    const { name, developer, genre, image } = request.body;

    if (!name || !developer || !genre || !image) {
      response.status(400).send({
        succes: false,
        url: "/api/videogames",
        method: "POST",
        message: "Debe introducir todos los valores"
      })
    } else {

      const idVideogame = () => {
        if (allVideogames === []) {
          return 0
        } else {
          const idNumb = allVideogames[allVideogames.length - 1].id + 1
          return idNumb
        }
      }
      const newVideogame = {
        id: idVideogame(),
        name: name,
        developer: developer,
        genre: genre,
        image: image,
      };

      allVideogames.push(newVideogame)

      fs.writeFile(DB_VIDEOJ, JSON.stringify(allVideogames), (err) => {

        if (err) {
          response.status(400).send({
            succes: false,
            url: "/api/videogames",
            method: "POST",
            message: "fallo al añadir el videojuego",
          });
        } else {
          response.status(201).send({
            succes: true,
            url: "/api/videogames",
            method: "POST",
            message: "Videojuego añadido correctamente",
          });
        }
      });
    };
  });
});



//DELETE elimina toda la bbdd

api.delete("/api/videogames", (request, response) => {

  fs.readFile(DB_VIDEOJ, (err, data) => {
    if (err) throw err;
    let allVideogames = JSON.parse(data);

    allVideogames = []

    fs.writeFile(DB_VIDEOJ, JSON.stringify(allVideogames), (err) => {

      if (err) {
        response.status(400).send({
          succes: false,
          url: "/api/videogames",
          method: "DELETE",
          message: "No se ha podido eliminar",
        });
      } else {
        response.status(201).send({
          succes: true,
          url: "/api/videogames",
          method: "DELETE",
          message: "BBDD se ha vaciado",
        });
      };
    });
  });
});

//GET devuelve 1 videojuego segun nombre
api.get("/api/videogames/:id", (request, response) => {
  fs.readFile(DB_VIDEOJ, (err, data) => {
    if (err) throw err;
    const allVideogames = JSON.parse(data);

    const { id } = request.params

    const oneVideogame = allVideogames.find((videogame) => videogame.id === parseInt(id))

    if (oneVideogame != null) {
      response.status(200).send({
        succes: true,
        url: "/api/videogames",
        method: "GET",
        message: oneVideogame,
      })
    } else {
      response.status(400).send({
        succes: false,
        url: "/api/videogames",
        method: "GET",
        message: "El videojuego indicado NO existe.",
      })
    };
  });
});

//DELETE un videojuego de la lista

api.delete("/api/videogames/:id", (request, response) => {
  fs.readFile(DB_VIDEOJ, (err, data) => {
    if (err) throw err;
    const allVideogames = JSON.parse(data);

    const { id } = request.params

    const newList = allVideogames.filter((value) => value.id !== parseInt(id))
    const exist = allVideogames.find((value) => value.id === parseInt(id))
    if (exist == null) {
      response.status(400).send({
        succes: false,
        url: "/api/videogames",
        method: "DELETE",
        message: "El videojuego no se encuentra en la bbdd",
      })
    } else {
      fs.writeFile(DB_VIDEOJ, JSON.stringify(newList), (err) => {
        if (err) {
          response.status(400).send({
            succes: false,
            url: "/api/videogames",
            method: "DELETE",
            message: "No se ha podido eliminar el videojuego",
          });
        } else {
          response.status(201).send({
            succes: true,
            url: "/api/videogames",
            method: "DELETE",
            message: `El videojuego con ID: ${id} se ha eliminado`,
          });
        };
      })
    }
  });
});
//PUT actualiza los datos de un videojuego
api.put("/api/videogames/:id", (request, response) => {
  fs.readFile(DB_VIDEOJ, (err, data) => {
    if (err) throw err;
    const allVideogames = JSON.parse(data);
    const { name, developer, genre, image } = request.body
    const { id } = request.params

    const exist = allVideogames.find((value) => value.id === parseInt(id))

    if (exist == null) {
      response.status(400).send({
        succes: false,
        url: "/api/videogames",
        method: "DELETE",
        message: "El videojuego no se encuentra en la bbdd",
      })
    } else {
      const updatedVid = allVideogames.map((videogame) => {
        if (videogame.id === parseInt(id)) {
          const updated = {
            id: videogame.id,
            name: name || videogame.name,
            developer: developer || videogame.developer,
            genre: genre || videogame.genre,
            image: image || videogame.image
          }
          return updated
        } else {
          return videogame
        }
      })

      fs.writeFile(DB_VIDEOJ, JSON.stringify(updatedVid), (err) => {
        if (err) {
          response.status(400).send({
            succes: false,
            url: "/api/videogames",
            method: "PUT",
            message: "No se ha podido actualizar el videojuego",
          });
        } else {
          response.status(201).send({
            succes: true,
            url: "/api/videogames",
            method: "PUT",
            message: `El videojuego con ID: ${id} se ha actualizado`,
          });
        };
      });
    }
  });
});

//PAGINADO
api.get("/api/videogames/page/:page", (request, response) => {
  fs.readFile(DB_VIDEOJ, (err, data) => {
    if (err) throw err;
    const allVideogames = JSON.parse(data);
    const { page } = request.params
    const PAGE_SIZE = 4;
    const numbOfPages = Math.ceil(allVideogames.length / PAGE_SIZE)
    const pageVideogame = allVideogames.slice(parseInt(page) * PAGE_SIZE - PAGE_SIZE, parseInt(page) * PAGE_SIZE)

    response.status(200).send({
      succes: true,
      url: "/api/videogames",
      method: "GET",
      pageNumber: parseInt(page),
      numbOfPages: numbOfPages,
      videogameList: pageVideogame,

    })
  });
});








const port = "2929";
const host = "127.0.0.1";

api.listen(port, host, () => {
  console.log(`Servidor corriendo en http://${host}:${port}/api/videogames`);
});
