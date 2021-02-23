//Añadir nuevo Videojuego

update.addEventListener("click", () => {

  const addVideogame = () => {
    const urlApi = "http://127.0.0.1:2929/api/videogames"

    const newVid = {
      name: document.getElementById("name").value,
      developer: document.getElementById("developer").value,
      genre: document.getElementById("genre").value,
      image: document.getElementById("image").value

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
