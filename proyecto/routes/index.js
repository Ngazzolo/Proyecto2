var express = require('express');
var router = express.Router();

let AdminController = require('../controllers/AdminController')

router.get('/', AdminController.home);

router.get('/dashboard', AdminController.dashboard);

router.post('/login', AdminController.login);


module.exports = router;
  

