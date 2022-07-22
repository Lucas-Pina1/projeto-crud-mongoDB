const express = require("express");
const path = require("path");
const db = require("./database/index")

const app = express();

db.connect();



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

//routes
app.use("/", (request, response) => {
  response.render("index", {
    title: "titulo teste",
  });
});

app.use((request, response) => {
  response.send("Página não encontrada!");
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Serve is listening on port ${port}`));
