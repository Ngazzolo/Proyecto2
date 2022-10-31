var express = require('express');
var router = express.Router();

let AdminController = require('../controllers/AdminController')
let UserController = require('../controllers/UserController');
//const { removeListener } = require('../models/Users');

router.get('/', AdminController.home);

router.get('/dashboard', UserController.dashboard);

router.post('/login', AdminController.login);

router.post('/create', UserController.create);

router.post('/qr', UserController.qr);

router.get('/user', UserController.usuario);
router.get('/qrscan', UserController.qrscan);
router.post('/updateqr', UserController.updateqr);

module.exports = router;