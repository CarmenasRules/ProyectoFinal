const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  pictureUrl: {type:String, default:"https://s.libertaddigital.com/2015/10/22/300/325/manuela-carmena-ayuntamiento-madrid.png"},
  coche: String,
  check: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;