var express = require('express');
var router = express.Router();

const https = require('https');
const fs = require('fs');

const options = {
    hostname: 'localhost',
    port: 3000,
    method: 'GET',
    ca: fs.readFileSync('ca.crt'),
};
/*
const req = https.request(options, (res) => {
    res.on('data', (d) => {
      process.stdout.write(d);
    });
  }).on('error', (e) => {
    console.error(e);
  });
  req.end();
*/
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

module.exports = router;