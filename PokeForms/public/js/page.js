
const ulPokemon = document.querySelector("#listadoPok")
const boton = document.getElementById("boton");


const getPokemonPage = (page = 1) => {
  //metemos un valor predefinido si no se manda nada
  const urlApi = `http://127.0.0.1:5555/api/pokemons/page/${page}`


  fetch(urlApi).then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data);

    //rellenamos el listado del ul de Pokemon
    const pokemon = data.pokemon
      .map((pokemon) => `<li class="d-flex align-items-center list-group-item list-group-item-action justify-content-between">Nº ${pokemon.id}: 
      ${pokemon.name} - ${pokemon.type}<button type="button" class="btn btn-danger float-right">Borrar</button></li>`
      )
      .reduce((acc, next) => acc + next, "");

    ulPokemon.innerHTML = pokemon;

    //rellenar el navegador de paginado

    //METODO 1: con map y reduce
    const ulPagination = document.getElementById("ulPagination");

    ulPagination.innerHTML = "";

    let ul = []

    for (let i = 1; i <= data.noPages; i++) {
      if (data.pagina === i) {
        ul.push(`<li class="page-item active"><a class="page-link" id="${i}">${i}</a></li>`)
      } else {
        ul.push(`<li class="page-item "><a class="page-link" id="${i}">${i}</a></li>`)
      }
    }

    ulPagination.innerHTML = ul.reduce((acc, next) => acc + next, "");

    for (let i = 1; i <= data.noPages; i++) {

      const a = document.getElementById(i);

      a.addEventListener("click", (event) => {
        getPokemonPage(event.target.id)
      })
    }
    //ó

    //METODO 2: creando cada elemento por separado

    // for (let i = 1; i <= data.noPages; i++) {

    //   const li = document.createElement("li");
    //   li.className = "page-item";
    //   if (parseInt(page) === i) li.classList.add("active");

    //   //creamos a del li
    //   const a = document.createElement("a");
    //   a.id = i;
    //   a.innerText = i;
    //   a.className = "page-link";

    //   //añadimos evento al a para volver a llamar a la API
    //   a.addEventListener("click", (event) => {
    //     getPokemonPage(event.target.id);
    //   })

    //   li.appendChild(a);
    //   ulPagination.appendChild(li)
    // }


  }).catch((err) => {
    console.error(err)
  })


}

getPokemonPage();

boton.addEventListener("click", () => {
  getPokemonPage();
})
