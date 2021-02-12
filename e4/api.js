const express = require("express");
const fs = require("fs");

const bodyParser = require("body-parser");

const api = express();

//CONF DECODE BODYPARSER

api.use(bodyParser.urlencoded({ extended: true }));

//conseguir todas la peliculas

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


//añadir una pelicula
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


//Eliminar una pelicula
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


//GET segun su genero

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

//GET one por params y segun ID

api.get("/api/movies/:id", (request, response) => {

  if (!request.params.id) {
    response.status(400).send({
      succes: false,
      url: "/api/movies/:id",
      method: "GET",
      message: "Debe intrioducir un numero de ID"
    })

  } else {

    fs.readFile("db/dbMovies.json", (err, data) => {

      if (err) throw err;
      const allMovies = JSON.parse(data);
      const oneMovie = allMovies.find((movie) => movie.id === parseInt(request.params.id))

      if (!oneMovie) {
        response.status(200).send({
          succes: true,
          url: "/api/movies/:id",
          method: "GET",
          message: "El numero de ID que indica no existe"
        })
      } else {
        response.status(200).send({
          succes: true,
          url: "/api/movies/:id",
          method: "GET",
          message: oneMovie
        })
      }
    })
  }
})

//Actualizo una pelicula

api.put("/api/movie/:id", (request, response) => {

  fs.readFile("db/dbMovies.json", (err, data) => {

    const allMovies = JSON.parse(data);
    const oneMovie = allMovies.find((movie) => movie.id === parseInt(request.params.id))

    const updatedMov = {
      id: oneMovie.id,
      title: request.body.title || oneMovie.title,
      director: request.body.director || oneMovie.director,
      genre: request.body.genre || oneMovie.genre,
      year: request.body.year || oneMovie.year
    }

    const updAllMovies = allMovies.map((movie) => {
      if (movie.id === parseInt(request.params.id)) {
        return movie = updatedMov
      } else {
        return movie
      }
    })

    fs.writeFile("db/dbMovies.json", JSON.stringify(updAllMovies), (err) => {
      if (err) {
        response.status(400).send({
          succes: false,
          url: "/api/movie/:id",
          method: "PUT",
          message: "No ha podido actualizarse la pelicula"

        })
      } else {
        response.status(200).send({
          succes: true,
          url: "/api/movie/:id",
          method: "PUT",
          message: "Pelicula actualizada correctamente"
        })
      }
    })
  })
})

// consigo todos los actores de una pelicula

api.get("/api/movies/:id/actors", (request, response) => {

  fs.readFile("db/dbMovies.json", (err, data) => {
    if (err) throw err;
    const allMovies = JSON.parse(data);

    const actores = allMovies.find((movie) => movie.id === parseInt(request.params.id))

    if (!actores || !actores.actors) {
      response.status(400).send({
        succes: false,
        url: "/api/movies/:id/actors",
        method: "GET",
        message: "No hay actores en esta pelicula"
      })
    } else {

      response.status(200).send({
        succes: true,
        url: "/api/movies/:id/actors",
        method: "GET",
        message: actores.actors
      })
    }
  })
})

//Conseguir un actor de una peli

api.get("/api/movies/:movieID/actors/:actorID", (request, response) => {

  fs.readFile("db/dbMovies.json", (err, data) => {
    if (err) throw err;
    const allMovies = JSON.parse(data);

    const { movieID, actorID } = request.params

    const actor = allMovies.map((movie) => {
      if (movie.id === parseInt(movieID)) {
        return movie.actors.find((actor) => actor.id === parseInt(actorID))
      }
    }).filter((value) => !!value)

    if (!actor[0]) {
      response.status(400).send({
        succes: false,
        url: "/api/movies/:id/actors",
        method: "GET",
        message: "No hay actores en esta pelicula o no existe la pelicula"
      })
    } else {
      response.status(200).send({
        succes: true,
        url: "/api/movies/:id/actors",
        method: "GET",
        message: actor
      })
    }
  })
})

//Actualizar info de actor

api.put("/api/movies/:movieID/actors/:actorID", (request, response) => {

  fs.readFile("db/dbMovies.json", (err, data) => {
    if (err) throw err;
    const allMovies = JSON.parse(data);

    const { movieID, actorID } = request.params

    const movie = allMovies.find((movie) => movie.id === parseInt(movieID))

    const actor = allMovies.map((movie) => {
      if (movie.id === parseInt(movieID)) {
        return movie.actors.find((actor) => actor.id === parseInt(actorID))
      }
    }).filter((value) => !!value)

    if (!actor[0]) {
      response.status(400).send({
        succes: false,
        url: "/api/movies/:id/actors",
        method: "PUT",
        message: "No hay actores en esta pelicula o no existe la pelicula"
      })
    } else {


      const actorsUpd = movie.actors.map((value) => {
        if (value.id === parseInt(actorID)) {
          value = {
            id: actor[0].id,
            name: request.body.name || actor[0].name,
            age: request.body.age || actor[0].age,
            character: request.body.character || actor[0].character,
          }
          return value
        } else {
          return value
        }
      })

      const newAllMovies = allMovies.map((movie) => {
        if (movie.id !== parseInt(movieID)) {
          return movie
        } else {
          movie = { ...movie, actors: actorsUpd };
          return movie
        }
      })

      fs.writeFile("db/dbMovies.json", JSON.stringify(newAllMovies), (err) => {
        if (err) {
          response.status(400).send({
            succes: false,
            url: "/api/movies/:id/actors",
            method: "PUT",
            message: "Algo ha ido mal"
          })
        } else {
          response.status(200).send({
            succes: true,
            url: "/api/movies/:id/actors",
            method: "PUT",
            message: `El actor se ha actualizado correctamente`
          })
        }
      })
    }
  })
})


//añadir un nuevo actor a una pelicula

api.post("/api/movies/:movieID/actors", (request, response) => {

  fs.readFile("db/dbMovies.json", (err, data) => {
    const allMovies = JSON.parse(data);
    const { movieID } = request.params;

    let movieActor = allMovies.find((movie) => movie.id === parseInt(movieID));

    if (!movieActor) {
      response.status(400).send({
        succes: false,
        url: "/api/movies/:movieID/actors",
        method: "POST",
        message: `No existe esa pelicula`
      })
    } else {

      const actors = movieActor.actors

      let idActor = 0

      if (actors[actors.length - 1] == null) {

        idActor = 1
      } else {
        idActor = actors[actors.length - 1].id + 1
      }

      if (!request.body.name || !request.body.age || !request.body.character) {
        response.status(400).send({
          succes: false,
          url: "/api/movies/:movieID/actors",
          method: "POST",
          message: "Debe introducir todos los campos"
        })
      } else {
        const newActor = {
          id: idActor,
          name: request.body.name,
          age: parseInt(request.body.age),
          character: request.body.character
        };
        actors.push(newActor)
      }

      movieActor = { ...movieActor, actors: actors }

      const newAllMovies = allMovies.map((movie) => {
        if (movie.id === movieID) {
          return movieActor
        } else {
          return movie
        }
      })

      fs.writeFile("db/dbMovies.json", JSON.stringify(newAllMovies), (err) => {
        if (err) {
          response.status(400).send({
            succes: false,
            url: "/api/movies/:id/actors",
            method: "POST",
            message: "Algo ha ido mal"
          })
        } else {
          response.status(200).send({
            succes: true,
            url: "/api/movies/:id/actors",
            method: "POST",
            message: `Se ha añadido el actor correctamente`
          })
        }
      })
    }
  })
})

//paginado por parametros


api.get("/api/movies/page/:pageN", (request, response) => {

  if (!request.params.pageN) {
    response.status(200).send({
      succes: false,
      url: "/api/pokemons",
      method: "GET",
      message: "number is required",
    });
  } else {
    if (isNaN(parseInt(request.params.pageN))) {
      response.status(400).send({
        succes: false,
        url: "/api/pokemons",
        method: "GET",
        message: "Por favor, introduzca un numero",
      })

    } else {

      fs.readFile("db/dbMovies.json", (err, data) => {
        const allMovies = JSON.parse(data);
        const PAGE_SIZE = 3
        const { pageN } = request.params;

        const getMovies = allMovies.slice((pageN * PAGE_SIZE) - PAGE_SIZE, (pageN * PAGE_SIZE));

        if (getMovies.length === 0) {
          response.status(400).send({
            succes: true,
            url: "/api/movies/page/:pageN",
            method: "GET",
            message: "No hay peliculas en esta pagina"
          })
        } else {
          response.status(200).send({
            succes: true,
            url: "/api/movies/page/:pageN",
            method: "GET",
            message: getMovies
          })
        }
      })
    }
  }
})






const port = "1111";
const host = "127.0.0.1";

api.listen(port, host, () => {
  console.log(`Servidor corriendo en http://${host}:${port}/api/movies`);
})

