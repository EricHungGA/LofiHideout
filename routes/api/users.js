const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

// POST /api/users
router.post('/signup', usersCtrl.create);
// POST /api/users/login
router.post('/login', usersCtrl.login);
// POST /api/users/sendForm
router.post('/sendform', usersCtrl.sendForm);
// POST /api/users/deleteForm
router.post('/deleteform', usersCtrl.deleteForm)
// GET /api/users/getuserdata
router.get('/getuserdata', usersCtrl.getUserData)
// PUT /api/users/updateform
router.put('/updateform', usersCtrl.update)

module.exports = router;