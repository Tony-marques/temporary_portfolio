const express = require('express');
const router = express.Router();
const contactCtrl = require('../controllers/contact');
const auth = require('../middleware/auth')
const rateLimit = require("express-rate-limit")

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, 
	max: 10, 
	standardHeaders: true, 
	legacyHeaders: false, 
})

router.post('/createContact',limiter, contactCtrl.createContact);
router.delete('/deleteContact/:id',auth, contactCtrl.deleteContact);
router.get('/getAllContact',auth, contactCtrl.getAllContact);
router.get('/getOneContact/:id',auth, contactCtrl.getOneContact);


module.exports = router;