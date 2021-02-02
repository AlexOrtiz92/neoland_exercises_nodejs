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

    let paises = data.map((value) => {
      let pais = {
        name: value.name,
        area: value.area
      }
      return pais
    });

    let ten = []
    let areas = paises.map((val) => val.area).sort((a, b) => b - a)

    for (let i = 0; i < 10; i++) {
      ten.push(areas[i])
    }

    tenCountries = paises.filter((val) => ten.includes(val.area))

    paisesCont.innerHTML = tenCountries.reduce((acc, next) => acc + `<li>Pais: ${next.name} --> Area = ${next.area}</li>`, "")


  })
  .catch(function (err) {
    console.error(err);
  });


