const {PORT,FRONT_URL} = require('./config');
const {Sequelize} = require("sequelize");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routeLoader = require("./routes");
const db = require("./models/index");
require("./config/associationsDb");
/*para iniciar servidor */
let app = express();
/*controlar endpoint que se ejecutan */
app.use(morgan("dev"));

//para controlar la seguridad de nuestro server
app.use(
    cors({
        origin: FRONT_URL,
        credentials: true,
    })
);

//Rutas
app.get("/", function (req, res) {
    res.send("YOUR API IS RUNNING");
});
app = routeLoader.load(app);

app.listen(PORT, () => {
    console.log("RUNNING IN PORT: ", PORT);
});
