const express = require('express');
const router  = express.Router();
// const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");
// const Kiosk  = require("../models/Kiosk");

router.get('/',(req, res, next) => {
 
  Kiosk.find()
  .then(kiosk => {
    res.json('maps', {kiosk: JSON.stringify(kiosk)}); 
    // nombre q me devuelve cuando hago el find lo meto en stringify para q convierta un val de JS a string
  
  })
 
});





module.exports = router;


module.exports = router;