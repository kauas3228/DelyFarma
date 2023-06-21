const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const clientSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  number: {
    type: String,
    require: true
  },
  usuario: {
    type: String,
    require: true
  }
})

const Client = mongoose.model('Client', clientSchema)

module.exports = Client;