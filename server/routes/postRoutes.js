const express = require("express");
const { requireSignIn } = require("../controllers/userController");
const {
  createPostController,
  getAllPostsController,
} = require("../controllers/postController");

//router object
const router = express.Router();

//Create Post
router.post("/create-post", requireSignIn, createPostController);

//GET all post
router.get("/get-all-posts", getAllPostsController);

//export
module.exports = router;
