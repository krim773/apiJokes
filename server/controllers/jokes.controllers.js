const Joke = require("../models/jokes.model");


// Exportar una función para obtener todos los chistes
// Obtener todas las bromas
module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then((allJokes) => res.json({ jokes: allJokes }))
    .catch((err) => res.json({ message: "Algo salió mal", error: err }));
};


// Exporta una función para obtener un chiste
// Obtener una sola broma por su ID
module.exports.findOneJoke = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then((oneJoke) => res.json({ joke: oneJoke }))
    .catch((err) =>
      res.json({ message: "Algo salió mal de nuevo", error: err })
    );
};


xportar una función para crear un chiste
// Crear una nueva broma
module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then((newJoke) => res.json({ joke: newJoke }))
    .catch((err) =>
      res.json({ message: "Algo salió mal (create)", error: err })
    );
};

// Actualizar una broma existente por su ID
module.exports.updateJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedJoke) => res.json({ joke: updatedJoke }))
    .catch((err) =>
      res.json({ message: "Algo salió mal en findAndUpdate", error: err })
    );
};

// Eliminar una broma por su ID
module.exports.deleteJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) =>
      res.json({ message: "Algo salió mal en delete", error: err })
    );
};

// Obtener una broma aleatoria
module.exports.findRandomJoke = (req, res) => {
  Joke.countDocuments().exec((err, count) => {
    if (err) {
      res.json({ message: "Algo salió mal", error: err });
    } else {
      var random = Math.floor(Math.random() * count);
      Joke.findOne()
        .skip(random)
        .then((randomJoke) => res.json({ joke: randomJoke }))
        .catch((err) => res.json({ message: "Algo salió mal...", error: err }));
    }
  });
};
