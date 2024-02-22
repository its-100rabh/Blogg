const jwt = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../helpers/authHelper");
const userModel = require("../models/userModel");
var { expressjwt: expjwt } = require("express-jwt");

//middleware
const requireSignIn = expjwt({
  secret: process.env.JWT_secret,
  algorithms: ["HS256"],
});

//register
const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name) {
      return res.status(400).send({
        success: false,
        message: "name is required",
      });
    }
    if (!email) {
      return res.status(400).send({
        success: false,
        message: "email is required",
      });
    }
    if (!password || password.length < 8) {
      return res.status(400).send({
        success: false,
        message: "password is required and 8 characters long",
      });
    }
    //check existing
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(500).send({
        success: false,
        message: "User Already exists",
      });
    }

    //Hash password
    const hashedPassword = await hashPassword(password);

    //save user
    const user = await userModel({
      name,
      email,
      password: hashedPassword,
    }).save();

    return res.status(201).send({
      success: true,
      message: "Registration successful.Please Login",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Register API",
      error,
    });
  }
};

//login
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(500).send({
        success: false,
        message: "Provide email or Password",
      });
    }

    //find user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(500).send({
        success: false,
        message: "User not found",
      });
    }

    //match password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(500).send({
        success: false,
        message: "Invalid username or Password",
      });
    }

    //token creation
    const token = await jwt.sign({ _id: user._id }, process.env.JWT_secret, {
      expiresIn: "7d",
    });

    //undefined
    user.password = undefined;
    res.status(200).send({
      success: true,
      message: "login successfully",

      token,
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in LOGIN API",
      error,
    });
  }
};

//Update user
const updateUserController = async (req, res) => {
  try {
    const { name, password, email } = req.body;
    //user find
    const user = await userModel.findOne({ email });
    //password validate
    if (password && password.length < 8) {
      return res.status(400).send({
        success: false,
        message: "Password is required and should be 8 characters long",
      });
    }
    const hashedPassword = password ? await hashPassword(password) : undefined;
    //updated user
    const updatedUser = await userModel.findOneAndUpdate(
      { email },
      {
        name: name || user.name,
        password: hashedPassword || user.password,
      },
      { new: true }
    );
    updatedUser.password = undefined;
    res.status(201).send({
      success: true,
      message: "Profile Updated Successfully. Please Login.",
      updatedUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in User Update API",
      error,
    });
  }
};

module.exports = {
  requireSignIn,
  registerController,
  loginController,
  updateUserController,
};
