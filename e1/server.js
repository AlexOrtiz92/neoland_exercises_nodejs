
const http = require("http");
const fs = require("fs")
const PATH_HOME = "public/html/home.html"


const server = http.createServer((request, response) => {

  fs.appendFile("Marca.log", `\n${request.url}|${new Date().toLocaleString()}`, (error) => {

    if (error) {
      console.error("algo ha ido mal y no se ha podido añadir en el fichero")
    } else {
      console.log("fichero actualizado correctamente")
    }
  })

  let extension = request.url.split(".")[request.url.split(".").length - 1]

  let ruta = "";
  let contentType = "";
  if (extension !== "") {
    switch (extension) {
      case 'js':
        ruta = `./public/src${request.url}`;
        contentType = 'text/javascript';
        break;
      case 'css':
        ruta = `./public/style${request.url}`;
        contentType = 'text/css';
        break;
      case 'html':
        ruta = `./public/html${request.url}`;
        contentType = 'text/html';
        break;
      case 'png':
        ruta = `./public/images${request.url}`;
        contentType = 'image/png';
        break;
      default:
        ruta = "";
        contentType = "";
    }



    console.log(ruta);

    fs.readFile(ruta, (err, data) => {

      if (err) {
        fs.readFile(PATH_HOME, (error, data) => {

          if (error) {

            response.writeHead(404, { "Content-Type": "text/html" });
            response.write("Error: Page not found");
            response.end();

          } else {

            response.writeHead(200, { "Context-Type": "text/html" })
            response.write(data)
            response.end()
          }
        })

      } else {
        response.writeHead(200, { 'content-Type': contentType });
        response.write(data);
        response.end();
      }
    });
  }
})



const port = "1234";
const host = "127.0.0.1";

server.listen(port, host, () => {
  console.log(`Servidor corriendo en http://${host}:${port}`)
})
