const express = require("express");
const router = express.Router();
const UserController = require('../Controllers/user')

router.post('/register',UserController.register);
router.post('/login',UserController.login)
router.post('/send-otp',UserController.sendOtp);
router.post('/verify-otp',UserController.verifyOtp);
router.post('/reset-password',UserController.resetPassword)
module.exports = router;