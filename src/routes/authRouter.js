const express = require("express");
const router = express.Router();
const fs = require("fs");
const authController = require("../controllers/AuthController");

router.post("/login", authController.login);

router.post("/register", authController.register);

router.get("/logout", authController.logout);

module.exports = router;
