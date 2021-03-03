//Añadir nuevo Videojuego
const update = document.getElementById("update")
const imgList = document.getElementById("imageList")

const idVideo = parseInt(localStorage.id)
const nameVideo = localStorage.name
const devVideo = localStorage.developer
const genreVideo = localStorage.genre
const imgVideo = localStorage.image

document.getElementById("name").value = nameVideo
document.getElementById("developer").value = devVideo
document.getElementById("genre").value = genreVideo
document.getElementById("imageList").value = imgVideo



//Añadir un videojuego
update.addEventListener("click", () => {



  const updateVideogame = () => {
    const urlApi = `http://127.0.0.1:2929/api/videogames/${idVideo}`


    const newVid = {
      name: document.getElementById("name").value,
      developer: document.getElementById("developer").value,
      genre: document.getElementById("genre").value,
      image: document.getElementById("imageList").value
    };

    const opts = {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newVid)
    };

    fetch(urlApi, opts).then((response) => {
      return response.json()
    }).then((data) => {
      console.log(data)
      alert("Videojuego actualizado correctamente!")
      window.location.replace("http://127.0.0.1:5555/index")
    }).catch((err) => {
      console.error(err)
    });
  };

  updateVideogame();
})

//Añadir imagenes de la lista desplegable
const imagesList = () => {

  const opts = {
    method: "GET",
    headers: { "content-type": "application/json" },
  };

  const urlApi = "http://127.0.0.1:2929/api/images"

  fetch(urlApi, opts).then((response) => {
    return response.json();
  }).then((data) => {

    const list = data.videogames.map((img) => {
      if (imgVideo === img.image) {
        return `<option  selected value="${img.image}">${img.image}</option>`
      } else {
        return `<option value="${img.image}">${img.image}</option>`
      }
    });


    const totalList = list.reduce((acc, next) => acc + next, "")

    imgList.innerHTML = totalList

    console.log(data)
  }).catch((err) => {
    console.error(err)
  })
}

imagesList();