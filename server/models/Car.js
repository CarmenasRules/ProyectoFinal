const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const carSchema = new Schema({
  modelo: String,
  matrícula: String,
  distintivoCeroEmisiones: Boolean,
  distintivoECO: Boolean,
  distintivoC: Boolean,
  distintivoB: Boolean,  
  
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Car = mongoose.model('Car', carSchema);
module.exports = Car;