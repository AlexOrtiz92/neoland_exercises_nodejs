//Añadir nuevo Videojuego
const update = document.getElementById("update")
const imgList = document.getElementById("imageList")


//Añadir un videojuego
update.addEventListener("click", () => {

  const addVideogame = () => {
    const urlApi = "http://127.0.0.1:2929/api/videogames"

    const newVid = {
      name: document.getElementById("name").value,
      developer: document.getElementById("developer").value,
      genre: document.getElementById("genre").value,
      image: document.getElementById("imageList").value
    };

    const opts = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newVid)
    };

    fetch(urlApi, opts).then((response) => {
      return response.json()
    }).then((data) => {
      console.log(data)
      alert("Videojuego añadido correctamente!")
      window.location.replace("http://127.0.0.1:5555/index")
    }).catch((err) => {
      console.error(err)
    });
  };

  addVideogame();
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

    const list = data.videogames.map((img) => `<option value="${img.image}">${img.image}</option>`);

    list.push(`<option value="." selected>Seleccione una imagen de la lista...</option>`)

    const totalList = list.reduce((acc, next) => acc + next, "")

    imgList.innerHTML = totalList

    console.log(data)
  }).catch((err) => {
    console.error(err)
  })
}

imagesList();