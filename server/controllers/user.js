const env = require("dotenv").config();
const jwt = require("jsonwebtoken")

exports.login = (req, res, next) => {
        if (req.body.pwd === process.env.mdp && req.body.user === process.env.user) {
        res.status(200).json({
            userId: "1",
            token: jwt.sign(
                { userId: "1" },
                process.env.jwt,
                { expiresIn: '1h' }
            )
        });
    }
    else {
        res.status(401).json({ message: "Accès non autorisé!" })
    }
};