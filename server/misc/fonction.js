const env=require("dotenv").config();

exports.deleteFile = (filename) => {
    const fs = require('fs');
    fs.stat(`./images/${filename}`
        , (err, stats) => {
            if (!err) {
                fs.unlink(`./images/${filename}`, (err) => {
                    if (err) {
                        console.log(err)
                    }
                })
            }
        })
}

exports.envoiMail = (req) => {
    const nodemailer = require('nodemailer');
    let transporter = nodemailer.createTransport({
        host: process.env.host,
        port: process.env.portMail,
        auth: {
          user: process.env.userMail,
          pass: process.env.userPass,
        },
        tls: {
          rejectUnauthorized: false
      },
      });
    let mailOptions = {
    from: 'zangetsu@gmail.com', 
      to: 'kerkar.kevin@gmail.com', 
     subject: "Un nouveau message de contact", 
      text: `La personne : ${req.body.username} à laissé le message suivant :\n
      ${req.body.message}\n\n\n 
      Tu peux le contacter à cette adresse mail : ${req.body.email}
      `
    };

    return transporter.sendMail(mailOptions)
}