const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  // modelo: String,
  // matrícula: String,
  // distintivoCeroEmisiones: Boolean,
  // distintivoECO: Boolean,
  // distintivoB: Boolean, 
  // distintivoC: Boolean,
  pictureUrl: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;