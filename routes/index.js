const express = require('express');

const router = express.Router();

const ourController= require('../controllers/index');

const testController = require('../controllers/test');

router.get('/', ourController.giveResponse);

router.get('/say-hello', ourController.sayHello);

router.get('/test', testController.test);

router.post('/user-info', ourController.userInfo);

router.post('/create-user', ourController.createUser);

router.get('/user-list', ourController.getList);

router.post('/add-user', ourController.addUser);

module.exports = router;