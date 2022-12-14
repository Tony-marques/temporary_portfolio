const jwt = require('jsonwebtoken');
const env = require("dotenv").config();

module.exports = (req, res, next) => {

  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token,process.env.jwt );
    const userId = decodedToken.userId;

    if (req.body.userId && req.body.userId != userId) {
      throw 'Id de l\'utilisateur invalide';
    } else {
      next();
    }
  } catch {
    res.status(401).json({error : 'Droits insuffisants'});
  }
};