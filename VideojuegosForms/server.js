const express = require("express");
const app = express()



app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/html", { extensions: ["html"] }))
app.use(express.static(__dirname + "/public/images"))
app.use(express.static(__dirname + "/public/css"))
app.use(express.static(__dirname + "/public/js"))

app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"))
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"))
app.use("/js", express.static(__dirname))
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist"))

//Gestionar el error y redireccion
app.use((req, res, next) => {
  res.status(404);

  if (req.accepts('html')) {
    res.redirect("/home");
    return;
  }
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }
  res.type('txt').send('Not found');
});

const port = "5555";
const host = "127.0.0.1";

app.listen(port, host, () => {
  console.log(`Servidor corriendo en http://${host}:${port}/home`)
})
