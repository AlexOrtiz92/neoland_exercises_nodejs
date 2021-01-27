const opts = {
  method: "GET",
  headers: { "Content-Type": "application/json" },
}

const listadoCursos = document.querySelector("#cursos-list");


const cursList = fetch("http://127.0.0.1:1234/api/cursos").then(function (response) {
  console.log("API RESPONSE SUCCESS");
  return response.json();
})
  .then(function (data) {

    listadoCursos.innerHTML = `
        <li>Nombre del curso: ${data.cursos[0].name} - Duracion: ${data.cursos[0].duration}</li>
        <br>
        <li>Nombre del curso: ${data.cursos[1].name} - Duracion: ${data.cursos[1].duration}</li>
        <br>
        <li>Nombre del curso: ${data.cursos[2].name} - Duracion: ${data.cursos[2].duration}</li>
        <br>
        <li>Nombre del curso: ${data.cursos[3].name} - Duracion: ${data.cursos[3].duration}</li>
        <br>
        <li>Nombre del curso: ${data.cursos[4].name} - Duracion: ${data.cursos[4].duration}</li>
        <br>
        <li>Nombre del curso: ${data.cursos[5].name} - Duracion: ${data.cursos[5].duration}</li>
        `

  })
  .catch(function (err) {
    console.error(err);
  });



