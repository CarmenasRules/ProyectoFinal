// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Car = require("../models/Car");

const bcryptSalt = 10;

mongoose
  .connect('mongodb://localhost/server', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let users = [
  {
    username: "alice",
    password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
    email: "alice@hotmail.com"
  },
  {
    username: "bob",
    password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
    email: "a@hotmail.com"
  }
]


let cars = [
  {
    modelo: "Audi Q5",
  matrícula: "1345CYR",
  distintivoCeroEmisiones: true,
  distintivoECO: false,
  distintivoC: false,
  distintivoB: false,  
  },

  {
    modelo: "BMW X5",
  matrícula: "2245DYR",
  distintivoCeroEmisiones: false,
  distintivoECO: true,
  distintivoC: false,
  distintivoB: false,  
  }
];


// User.deleteMany()
// .then(() => {
//   return User.create(users)
// })
// .then(usersCreated => {
//   console.log(`${usersCreated.length} users created with the following id:`);
//   console.log(usersCreated.map(u => u._id));
// })
// .then(() => {
//   // Close properly the connection to Mongoose
//   mongoose.disconnect()
// })
// .catch(err => {
//   mongoose.disconnect()
//   throw err
// })



const Promise1 = User.deleteMany().then(() => {
  return User.create(users);
});

const Promise2 = Car.deleteMany().then(() => {
  return Car.create(cars);
});

Promise.all([Promise1, Promise2])
  .then(data => {
    return Comment.deleteMany().then(() => {
      comments.user = data[0][0]._id;
      comments.car = data[1][0]._id;
      return Car.create(cars);
    });
  })
  .then(() =>
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  )
  .catch(err => {
    console.log(err)
    throw err;
  });