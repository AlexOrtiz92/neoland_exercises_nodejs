const postPokemon = () => {
  alert("Ejecuta la funcion postPokemon")

  const newpokemon = {
    name: document.getElementById("name").value,
    type: document.getElementById("type").value
  };

  console.log(newpokemon)

  //en caso de ser por query params, se generaria con una url sin mandar nada en el body
  const urlApi = "http://127.0.0.1:5555/api/pokemon"



  //se tiene que indicar al fetch que clase de accion hacer, por que sino sera siempre GET (por defecto)
  const opts = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(newpokemon)
  }



  fetch(urlApi, opts).then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data)

    //responder si ha ido bien o ha ido mal

    alert("Pokemon añadido correctamente");
    document.getElementById("name").value = "";
    document.getElementById("type").value = "";

  }).catch((err) => {
    console.error(err)
  })
}