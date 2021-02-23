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
    console.log(data)
    const allVideogames = data.videogameList.map((videojuego) => {
      return `<div class="col-6 col-sm-6 col-md-4 col-lg-3">
      <div class="card" id="${videojuego.id}{">
        <img src="${videojuego.image}" class="card-img-top" alt="..." height="300">
        <div class="card-header">
          ${videojuego.name}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><span>Dev:</span> ${videojuego.developer}</li>
          <li class="list-group-item"><span>Genr:</span> ${videojuego.genre}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link text-success">Editar</a>
          <a href="#" class="card-link text-danger">Eliminar</a>
        </div>
      </div>
    </div>`
    }).join("");

    containerCards.innerHTML = allVideogames

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

    ulPagination.innerHTML = ul.join("");

    for (let i = 1; i <= data.numbOfPages; i++) {

      const a = document.getElementById(i);

      a.addEventListener("click", (event) => {
        getPage(event.target.id)
      })
    }


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
//     const allVideogames = data.pokemon.map((videojuego) => {
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
  getAll();
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



