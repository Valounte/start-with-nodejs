const express = require("express");
const router = express.Router();

const userController = require("../controllers/UserController");

router.get("/users", userController.listAllUsers);

router.post("/user", userController.createUser);

module.exports = router;
