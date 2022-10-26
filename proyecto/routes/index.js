var express = require('express');
var router = express.Router();

let AdminController = require('../controllers/AdminController')
let UserController = require('../controllers/UserController')

router.get('/', AdminController.home);

router.get('/dashboard', UserController.dashboard);

router.post('/login', AdminController.login);


module.exports = router;