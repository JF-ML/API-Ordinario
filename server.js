require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const cfenv = require("cfenv");
const app = express();
const dbConfig = require('./config/database.config.js');
var db = "";
//  dbConfig.url esta es la variable con la que se estaba probando la api de forma local

const port = process.env.PORT || 4000;
try {
    mongoose.connect(process.env.MONGODB, { useNewUrlParser: true });

    db = mongoose.connection;

    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log("Conectando a la base de datos.."));
} catch {
    console.log("No se pudo conectar");
}

const lotesRouter = require('./app/routes/lotes.routes.js');


app.use(cors());
app.use(express.json());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use("/lotes", lotesRouter);
app.listen(port, () => {
    console.log("El servidor esta escuchando...");
});

