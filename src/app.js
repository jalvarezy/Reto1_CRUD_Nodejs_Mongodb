const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("../router/Webrouter");
const dotenv = require("dotenv");

//Cargar variables de entorno desde el archivo .env
dotenv.config();

const PORT = 8000;

const app = express();

//Si la conexión al servidor de Express es exitosa imprimir mensaje por consola
app.listen(PORT, async () => {
    console.log(`Servidor escuchando el puerto ${PORT}`);
});

//Conexión a MongoDb
mongoose
.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
//Si la conexión a MongoDb es exitosa imprima mensaje por consola
.then(() => {
    console.log("Conectado a MongoDB satisfactoriamente");
})
.catch((err) => {
    console.log(err);
});

//Cross-Origin Resource Sharing(CORS) middlewares
app.use(cors());

//Analisis de  solicitudes JSON entrantes y coloca los datos analizados en formato req.body, formato del controlador Persona.
app.use(express.json());

//Pasar solicitudes POST y PUT, estas solicitudes hacen envio de datos en forma de objeto de datos al servidor y le hace la peticion de aceptar o almacenar los datos enviados(objeto) que viajan a través de req.body 
app.use(express.urlencoded({ extended: false }));

app.use(router);

