const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  name: { type: String },
  message: { type: String},
  email:{type:String},
});

module.exports = mongoose.model('contact', contactSchema);