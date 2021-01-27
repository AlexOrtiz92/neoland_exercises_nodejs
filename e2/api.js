const express = require("express");

const app = express();

// CONFIGURACION: CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  // authorized headers for preflight requests
  // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
  app.options('*', (req, res) => {
    // allowed XHR methods  
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    res.send();
  });
});


const dbCursos = require("./dbCursos");

app.get("/api/cursos", (require, response) => {
  response.status(200).send(
    {
      succes: true,
      message: "API cursos",
      cursos: dbCursos.cursos

    }
  )
})

const port = "1234";
const host = "127.0.0.1";

app.listen(port, host, () => {
  console.log(`Servidor corriendo en http://${host}:${port}/api/cursos`)
})


