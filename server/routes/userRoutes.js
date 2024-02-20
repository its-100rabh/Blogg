const express = require("express");
const {
  registerController,
  loginController,
  updateUserController,
} = require("../controllers/userController");

//router object
const router = express.Router();

//routes

//REGSTER || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//UPDATE // PUT
router.put("/update-user", updateUserController);

module.exports = router;
