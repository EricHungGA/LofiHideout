// routes/api/users.js

const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

// POST /api/users
router.post('/signup', usersCtrl.create);
// POST /api/users/login
router.post('/login', usersCtrl.login);
// POST /api/users/sendForm
router.post('/sendform', usersCtrl.sendForm);

module.exports = router;
