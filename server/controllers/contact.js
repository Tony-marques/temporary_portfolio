const Contact = require('../models/contact');
const misc = require('../misc/fonction.js')
const yup = require("yup")

exports.createContact = (req, res) => {
    const contact = new Contact({
        name: req.body.username,
        message: req.body.message,
        email: req.body.email,
    })
    let schema = yup.object().shape({
        name: yup.string().required("Veuillez indiquer votre nom."),
        message: yup.string().required("Veuillez laisser un message"),
        email: yup.string().email().required("Veuillez saisir votre adresse mail")
    })
    schema.validate({
        name: contact.name,
        message: contact.message,
        email: contact.email,
    }).then(() => {
        contact.save()
            .then(() => {
                misc.envoiMail(req)
                    .then(() => res.status(201).json({ message: "Demande enregistrée" }))
            })
            .catch(error => res.status(500).json({ error }))
    }).catch(() => res.status(400).json({ message: " Donnée manquante ou incorrecte" }))
}
exports.getAllContact = (req, res) => {
    Contact.findAll()
        .then(resultat => res.status(200).json({ resultat }))
        .catch(error => res.status(500).json({ error }))
}
exports.getOneContact = (req, res) => {
    Contact.findOne({ _id: req.params.id })
        .then(resultat => res.status(200).json({ resultat }))
        .catch(error => res.status(500).json({ error }))
}
exports.deleteContact = (req, res) => {
    Contact.findOne({ _id: req.params.id })
        .then(resultat => {
            if (resultat != null) {
                Contact.deleteOne({ _id: req.params.id })
                    .then(() => res.status(200).json({ message: "Contact effacé" }))
            }
        })
        .catch(error => res.status(500).json({ error }))
}
