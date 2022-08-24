const fs = require('fs');
const project = require('../models/project');
const misc = require('../misc/fonction.js')


exports.createProject = (req, res) => {

    let images = []
    /* Récupération des noms des fichiers pour envoi*/
    for (let i = 0; i < req.files.length; i++) {
        images[i] = req.files[i].filename
    }
    const newProject = new project({
        name: req.body.name,
        short_description: req.body.short_description,
        long_description: req.body.long_description,
        images: images,
        techno: req.body.techno,
        github: req.body.github,
        hosting_place: req.body.hosting_place,
    })
    newProject.save()
        .then(() => res.status(201).json({ message: "Nouveau project enregistré" }))
        .catch(error => res.status(500).json({ error }))
}
exports.updateProject = (req, res) => {
    project.findOne({ _id: req.body.id })
        .then(value => {
            let images = [];
            /* Récupère les images déjà présente en BDD */
            if (value.images) {
                for (let i = 0; i < value.images.length; i++) {
                    images[i] = value.images[i]
                }
            }
            /* Rajoute les images ajoutées */
            if (req.files) {
                for (let i = 0; i < req.files.length; i++) {
                    images.push(req.files[i].filename)
                }
            }
            project.updateOne({ _id: req.body.id }, {
                name: req.body.name,
                description_courte: req.body.description_courte,
                description_longue: req.body.description_longue,
                images: images,
                techno: req.body.techno,
                github: req.body.github,
                hebergement: req.body.hebergement,
            }).then(() => res.status(200).json({ message: "Update effectué" }))
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(404).json({ error }))
}

exports.deleteImage = (req, res) => {
    project.findOne({ _id: req.body.id })
        .then(value => {
            misc.deleteFile(req.body.nomImage)
            let images = [];
            for (let i = 0; i < value.images.length; i++) {
                if (value.images[i] != req.body.nomImage) {
                    images.push(value.images[i])
                }
            }
            project.updateOne({ _id: req.body.id }, {
                images: images
            }).then(() => res.status(200).json({ message: "Image effacée ou inexistante" }))
                .catch(error => res.status(500).json({ error }))
        })
        .catch(error => console.log(error))
}

exports.deleteProject = (req, res) => {
    project.findOne({ _id: req.params.id })
        .then(value => {
            if (value) {
                if (value.images) {
                    for(let image of value.images) {
                        misc.deleteFile(image)
                    }
                }
            }
            project.deleteOne({ _id: req.params.id })
                .then(() => res.status(200).json({ message: "project supprimé ou inexistant" }))
                .catch(error => res.status(500).json({ error }))
        }).catch(console.log("project non trouvé"))

}

exports.getAllProject = (req, res) => {
    project.find()
        .then(projects => res.status(200).json(projects))
        .catch(error => res.status(500).json({ error }))
}
exports.getOneProject = (req, res) => {

    project.findOne({ _id: req.params.id })
        .then(project => { res.status(200).json(project) })
        .catch(error => res.status(500).json({ error }))
}