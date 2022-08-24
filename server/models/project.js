const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  name: { type: String },
  short_description: { type: String},
  long_description:{type:String},
  images :{type : Array},
  techno:{type : Array},
  github:{type:String},
  hosting_place:{type:String}

});

module.exports = mongoose.model('Project', projectSchema);