const containerCards = document.getElementById("containerCards")
const refresh = document.getElementById("refresh")
const deleteALL = document.getElementById("deleteAll")
const update = document.getElementById("update")

//Paginado de 4
const getPage = (page = 1) => {

  const urlApi = `http://127.0.0.1:2929/api/videogames/page/${page}`

  fetch(urlApi).then((response) => {
    return response.json()
  }).then((data) => {
    const allVideogames = data.videogameList.map((videojuego) => {
      return `<div class="col-6 col-sm-6 col-md-4 col-lg-3">
      <div class="card" id="videojuego-${videojuego.id}">
        <img src="${videojuego.image}" class="card-img-top" alt="..." height="300">
        <div class="card-header">
          ${videojuego.name}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><span>Dev:</span> ${videojuego.developer}</li>
          <li class="list-group-item"><span>Genr:</span> ${videojuego.genre}</li>
        </ul>
        <div class="card-body">
        <button id="edit-${videojuego.id}"type="button" class="btn btn-success">Editar</button>
        <button id="delete-${videojuego.id}"type="button" class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>`
    }).join("");

    // <a href="update"></a>


    containerCards.innerHTML = allVideogames

    data.videogameList.forEach((videogame) => {
      const del = document.getElementById(`delete-${videogame.id}`)

      del.addEventListener("click", (event) => {
        deleteOne(parseInt(event.target.id.split("-")[1]));

      })
    })

    data.videogameList.forEach((videogame) => {
      const upd = document.getElementById(`edit-${videogame.id}`)

      upd.addEventListener("click", (event) => {
        const id = parseInt(event.target.id.split("-")[1]);
        const name = videogame.name;
        const developer = videogame.developer;
        const genre = videogame.genre;
        const image = videogame.image.split("/")[1];


        editOne(id, name, developer, genre, image);

      })
    })

    const ulPagination = document.getElementById("ulPagination");

    ulPagination.innerHTML = "";

    let ul = []

    for (let i = 1; i <= data.numbOfPages; i++) {

      if (i === data.pageNumber) {
        ul.push(`<li class="page-item"><a class="page-link act" id="${i}">${i}</a></li>`)
      } else {
        ul.push(`<li class="page-item"><a class="page-link nonAct" id="${i}">${i}</a></li>`)
      };
    };

    ul.unshift(`
  <li class="page-item">
    <a class="page-link nonAct" href="#" aria-label="Previous">
      <span aria-hidden="true" id="prev">&laquo;</span>
    </a>
  </li>`);
    ul.push(`
  <li class="page-item">
    <a class="page-link nonAct" href="#" aria-label="Next">
      <span aria-hidden="true" id="next">&raquo;</span>
    </a>
  </li>`)


    ulPagination.innerHTML = ul.join("");

    for (let i = 1; i <= data.numbOfPages; i++) {

      const a = document.getElementById(i);

      a.addEventListener("click", (event) => {
        getPage(event.target.id)
      })
    }

    //configurar botones prev y next
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    prev.addEventListener("click", () => {
      let page = 1
      if ((data.pageNumber - 1) === 0) {
        page = 1
      } else {
        page = data.pageNumber - 1
      }
      getPage(page)
    })

    next.addEventListener("click", () => {
      let page = 1
      if ((data.pageNumber + 1) > data.numbOfPages) {
        page = data.numbOfPages
      } else {
        page = data.pageNumber + 1
      }
      getPage(page)
    })


  }).catch((err) => {
    console.error(err)
  })
}

getPage()


//Conseguir toda la BBDD
// const getAll = () => {

//   const urlApi = "http://127.0.0.1:2929/api/videogames"

//   fetch(urlApi).then((response) => {
//     return response.json();
//   }).then((data) => {
//     console.log(data);
//     const allVideogames = data.videogame.map((videojuego) => {
//       return `<div class="col-6 col-sm-6 col-md-4 col-lg-3">
//       <div class="card" id="${videojuego.id}{">
//         <img src="${videojuego.image}" class="card-img-top" alt="..." height="300">
//         <div class="card-header">
//           ${videojuego.name}
//         </div>
//         <ul class="list-group list-group-flush">
//           <li class="list-group-item">${videojuego.developer}</li>
//           <li class="list-group-item">${videojuego.genre}</li>
//         </ul>
//         <div class="card-body">
//           <a href="#" class="card-link text-success">Editar</a>
//           <a href="#" class="card-link text-danger">Eliminar</a>
//         </div>
//       </div>
//     </div>`
//     }).join("");

//     containerCards.innerHTML = allVideogames

//   }).catch((err) => {
//     console.error(err)
//   })

// }
// getAll();

//Boton de refrescar
refresh.addEventListener("click", () => {
  getPage();
})

//Eliminar toda la BBDD
deleteALL.addEventListener("click", () => {

  const deleteAllVideg = () => {
    const urlApi = "http://127.0.0.1:2929/api/videogames"

    const opts = {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    }

    fetch(urlApi, opts).then((response) => {
      return response.json();
    }).then((data) => {
      alert("La BBDD se ha vaciado correctamente")
    })
  };
  deleteAllVideg();
})



//eliminar Videojuego y recargar la pagina:

const deleteOne = (id) => {
  const urlApi = `http://127.0.0.1:2929/api/videogames/${id}`

  const opts = {
    method: "DELETE",
    headers: { "content-type": "application/json" },
  }

  fetch(urlApi, opts).then((response) => {
    return response.json();
  }).then((data) => {
    alert("Videojuego eliminado de la BBDD")
    getPage();
  })

}


const editOne = (id, name, developer, genre, image) => {

  localStorage.setItem("id", id);
  localStorage.setItem("name", name);
  localStorage.setItem("developer", developer);
  localStorage.setItem("genre", genre);
  localStorage.setItem("image", image);

  window.location.replace("http://127.0.0.1:5555/update")

}
