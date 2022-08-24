const express = require('express');
const router = express.Router();
const projetCtrl = require('../controllers/projects');
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')


router.post('/createProject',auth,multer, projetCtrl.createProject);
router.put('/updateProject',auth,multer, projetCtrl.updateProject);
router.put('/deleteImage',auth,projetCtrl.deleteImage);
router.delete('/deleteProject/:id',auth, projetCtrl.deleteProject);
router.get('/getAllProjects', projetCtrl.getAllProject);
router.get('/getOneProject/:id', projetCtrl.getOneProject);


module.exports = router;