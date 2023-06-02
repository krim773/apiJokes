// importar mongose y asignar a la variable mongoose
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://jokestarea:12345678jokes@cluster0.4qt07ge.mongodb.net/", {
    // La opción useNewUrlParser: true se utiliza para indicar a Mongoose que utilice el nuevo analizador de URL para la cadena de conexión. Esto es necesario para evitar posibles advertencias o errores relacionados con el analizador de URL obsoleto.
    useNewUrlParser: true,
    // La opción useUnifiedTopology: true se utiliza para habilitar la nueva capa de topología unificada en el controlador de MongoDB. Esto ayuda a asegurar una conexión estable y sin problemas.
    useUnifiedTopology: true
})
    .then(() => console.log("conexion establecida"))
    .catch((error) => console.log("algo no anda bien", error));