const express = require('express');
const mongoose = require('mongoose');
const env = require("dotenv").config();
const projetRoutes = require('./routes/projects');
const userRoute = require('./routes/user');
const contactRoute = require('./routes/contact');
const path = require('path');
const helmet = require("helmet")
const cors = require("cors")

const app = express();//création de la fonction express permettant de créer le serveur.
app.use(express.json());//permet d'écouter les requêtes avec un content-type JSON cela le met dans req.body

mongoose.connect(process.env.bdd,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(helmet());
app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/contact', contactRoute);
app.use('/api/auth', userRoute);
app.use('/api', projetRoutes);
module.exports = app;
