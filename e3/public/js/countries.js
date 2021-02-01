const opts = {
  method: "GET",
  headers: { "Content-Type": "application/json" },
};

const paisesCont = document.querySelector("#paisesCont")


const URL_COUNTRIES = "https://restcountries.eu/rest/v2/all"

const allCountries = fetch(URL_COUNTRIES)
  .then(function (response) {
    console.log("API RESPONSE SUCCESS");
    return response.json();
  })
  .then(function (data) {
    let paises = data.map((value) => value.name);

    let totalPaises = paises.reduce((acc, next) => acc +
      `<li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${next}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li>`, ""
    )
    paisesCont.innerHTML = totalPaises
  })
  .catch(function (err) {
    console.error(err);
  });