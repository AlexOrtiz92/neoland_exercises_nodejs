const http = require("http");
const fs = require("fs");
const PATH_HOME = "./public/html/home.html"



const server = http.createServer((request, response) => {

  let extension = request.url.split(".")[request.url.split(".").length - 1];
  let path = "";
  let contentType = "";

  if (extension !== "") {
    switch (extension) {
      case 'js':
        path = `./public/js${request.url}`;
        contentType = 'text/javascript';
        break;
      case 'css':
        path = `./public/style${request.url}`;
        contentType = 'text/css';
        break;
      case 'html':
        path = `./public/html${request.url}`;
        contentType = 'text/html';
        break;
      case 'png':
        path = `./public/images${request.url}`;
        contentType = 'image/png';
        break;
      case 'svg':
        path = `./public/images${request.url}`;
        contentType = 'image/svg+xml';
        break;
      default:
        path = `./public/html${request.url}.html`;
        contentType = 'text/html';
    }
  }

  fs.readFile(path, (error, data) => {
    if (error) {
      fs.readFile(PATH_HOME, (err, data) => {
        if (err) {
          response.writeHead(404, { "Content-Type": "text/html" });
          response.write("Error: Page not found")
          response.end();
        } else {
          response.writeHead(200, { "Content-Type": "text/html" });
          response.write(data);
          response.end();
        }
      })
    } else {
      response.writeHead(200, { "Content-Type": contentType });
      response.write(data);
      response.end()
    }
  })
})

const port = "3333"
const host = "127.0.0.1"

server.listen(port, host, () => {
  console.log(`Servidor corriendo en http://${host}:${port}`)
})