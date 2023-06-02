const mongoose = require("mongoose");

//nuevo esquema
const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup es requerido"],
        minlength: [10, "la configuracion debera tener al menos 10 caracteres "]
    }, 
    punchline:
    {
        type: String,
        required : [true,"Punchline es requerido"],
        minlenght: [3, "Punchline debera tener al menos 4 caracteres"]
    }
},
// esta opción permite que se registren automáticamente las marcas de tiempo (timestamps) asociadas a cada registro o entrada en la base de datos o en los eventos registrados.
    {timestamps: true}
)

const Joke = mongoose.model('Joke', JokesSchema);

module.exports = Joke