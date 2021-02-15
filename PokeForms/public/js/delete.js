//reutilizamos codigo del getALL
const ulPokemon = document.querySelector("#listadoPok")
const urlApi = "http://127.0.0.1:5555/api/pokemon"
const boton = document.getElementById("boton");


const getAll = () => {


  fetch(urlApi).then((response) => {
    return response.json()
  }).then((data) => {


    //FORMA 1 con map()
    // const pokemon = data.pokemon
    //   .map((pokemon) => `<li class="list-group-item list-group-item-action">${pokemon.name}<button id="${pokemon.id}"type="button" class="btn btn-danger float-right">Borrar</button></li>`
    //   )
    //   .reduce((acc, next) => acc + next, "");

    // ulPokemon.innerHTML = pokemon

    //ó

    //FORMA 2 con forEach()

    ulPokemon.innerHTML = "";
    data.pokemon.forEach((pokemon) => {

      //creamos el li
      const li = document.createElement("li");//creamos un <li>
      li.innerText = pokemon.name;//
      li.className = "d-flex align-items-center list-group-item list-group-item-action justify-content-between";

      //creamos el boton borrado
      const button = document.createElement("button");
      button.type = "button";
      button.innerText = "Borrar";
      button.className = "btn btn-danger float-right";
      button.id = pokemon.id;


      //añado el ecento de borrado al boton

      button.addEventListener("click", (event) => {
        deletePokemon(event.currentTarget.id);
      })

      li.appendChild(button);//añadimos el boton al li
      ulPokemon.appendChild(li)//añadimos el li al ul
    })
  }).catch((err) => {
    console.error(err)
  })

}

getAll();

const deletePokemon = (id) => {
  alert(`Borrando Pokemon ${id}`);

  const idPokemon = {
    id: id
  }

  const opts = {
    method: "DELETE",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(idPokemon)
  }


  fetch(urlApi, opts).then((response) => {

    return response.json();

  }).then((data) => {

    alert("pokemon eliminado correctamente")
    getAll();

  }).catch((err) => {
    console.error(err)
  })
}

boton.addEventListener("click", () => {
  getAll();
})
