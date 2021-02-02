const opts = {
  method: "GET",
  headers: { "Content-Type": "application/json" },
};

const container = document.querySelector("#container4")

let url = window.location.href;
let ext = url.split("/")[url.split("/").length - 1];

console.log(ext)

const continent = `https://restcountries.eu/rest/v2/region/${ext}`


const oneContinent = fetch(continent)
  .then(function (response) {
    console.log("API RESPONSE SUCCESS");
    return response.json();
  })
  .then(function (data) {
    console.log(data)

    const lang = (next) => next.languages.map((obj) => obj.name).join(",")

    let infoPais = data.reduce((acc, next) =>

      acc + `<ul><h3>País: ${next.name}</h3>
            <li>Población: ${next.population} personas</li>
            <br>
            <li>Lenguas Oficiales: <span id="lang">${lang(next)}</apan></li>
            <br>
            <li><img src="${next.flag}" alt="flag" title="flag" width="50" class="flag"></li>
            </ul>
            <hr>`, ""
    )


    container.innerHTML = infoPais

  })
  .catch(function (err) {
    console.error(err);
  });



