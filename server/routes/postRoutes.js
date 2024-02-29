const express = require("express");
const { requireSignIn } = require("../controllers/userController");
const {
  createPostController,
  getAllPostsController,
  getUserPostsController,
} = require("../controllers/postController");

//router object
const router = express.Router();

//Create Post
router.post("/create-post", requireSignIn, createPostController);

//GET all post
router.get("/get-all-posts", getAllPostsController);

//GET all post
router.get("/get-user-posts", requireSignIn, getUserPostsController);

//export
module.exports = router;
