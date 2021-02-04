const express = require("express");
const fs = require("fs");

const bodyParser = require("body-parser");

const api = express();

//CONF DECODE BODYPARSER

api.use(bodyParser.urlencoded({ extended: true }));

api.get("/api/movies", (request, response) => {
  fs.readFile("db/dbMovies.json", (err, data) => {
    if (err) throw err;
    const allMovies = JSON.parse(data);

    response.status(200).send({
      succes: true,
      message: "/api/movies",
      method: "GET",
      movies: allMovies,

    });
  });
});

api.post("/api/movie", (request, response) => {

  let title = request.body.title
  let director = request.body.director
  let genre = request.body.genre
  let year = request.body.year

  if (!title || !director || !genre || !year) {
    response.status(200).send({
      succes: false,
      url: "/api/pokemon",
      method: "POST",
      message: "At leas one of the values is empty",
    });
  } else {

    fs.readFile("db/dbMovies.json", (err, data) => {
      if (err) throw err;
      let allMovies = JSON.parse(data);
      let newId = 0

      if (allMovies.length === 0) {
        newId = 1
      } else {
        newId = allMovies[allMovies.length - 1].id + 1
      }

      const newMovie = {
        id: newId,
        title,
        director,
        genre,
        year
      }

      allMovies.push(newMovie);

      fs.writeFile("db/dbMovies.json", JSON.stringify(allMovies), (err) => {
        if (err) {
          response.status(400).send({
            succes: false,
            url: "/api/movie",
            method: "POST",
            movies: "No ha sido posible añadir la pelicula",
          });
        } else {
          response.status(200).send({
            succes: true,
            url: "/api/movie",
            method: "POST",
            movies: "Pelicula añadida correctamente",
          });
        };
      });
    });
  }
});

api.delete("/api/movie", (request, response) => {

  if (!request.body.id) {
    response.status(400).send({
      succes: false,
      url: "/api/movie",
      method: "DELETE",
      message: "id required"
    })
  } else {
    fs.readFile("db/dbMovies.json", (err, data) => {
      if (err) throw err;
      const allMovies = JSON.parse(data);

      const updatedMovies = allMovies.filter((value) => value.id !== parseInt(request.body.id))

      fs.writeFile("db/dbMovies.json", JSON.stringify(updatedMovies), (err) => {
        if (err) {
          response.status(400).send({
            succes: false,
            url: "/api/movie",
            method: "DELETE",
            message: "No ha podido eliminarse la pelicula"

          })
        } else {
          response.status(200).send({
            succes: true,
            url: "/api/movie",
            method: "DELETE",
            message: "Pelicula eliminada"
          })
        }
      })
    })
  }
})
//GET una pelicula
api.get("/api/movie", (request, response) => {

  fs.readFile("db/dbMovies.json", (err, data) => {
    if (err) throw err;
    const allMovies = JSON.parse(data);

    const getMovie = allMovies.find((value) => value.title === request.body.title)

    if (!getMovie) {
      response.status(400).send({
        succes: false,
        url: "/api/movie",
        method: "GET",
        message: "No existe esa pelicula en la BBDD"
      })
    } else {

      const getRightMovie = allMovies.find((value) => value.title === request.body.title)

      response.status(200).send({
        succes: true,
        url: "/api/movie",
        method: "GET",
        message: getRightMovie
      })
    }
  })
})

//GET genero

api.get("/api/movies/genre", (request, response) => {

  fs.readFile("db/dbMovies.json", (err, data) => {
    if (err) throw err;
    const allMovies = JSON.parse(data);

    const getMovies = allMovies.filter((value) => value.genre === request.body.genre)

    if (!getMovies) {
      response.status(400).send({
        succes: false,
        url: "/api/movies/genre",
        method: "GET",
        message: "No existe ese genero de pelicula en la BBDD"
      })
    } else {

      const getRightMovies = allMovies.filter((value) => value.genre === request.body.genre)

      response.status(200).send({
        succes: true,
        url: "/api/movies/genre",
        method: "GET",
        message: getRightMovies
      })
    }

  })
})

const port = "1111";
const host = "127.0.0.1";

api.listen(port, host, () => {
  console.log(`Servidor corriendo en http://${host}:${port}/api/movies`);
})
