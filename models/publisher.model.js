const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const publisherSchema = new Schema({
  id: {
      type: String,
      required: true
  },
  username : {
    type: String,
    required: true
  },
  email : {
    type: String,
    required: true
  },
  fullname : {
    type: String,
    required: true
  },
  password :{
    type: String,
    required: true 
  }
});

mongoose.model('user', publisherSchema);