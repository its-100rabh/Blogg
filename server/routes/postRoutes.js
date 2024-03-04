const express = require("express");
const { requireSignIn } = require("../controllers/userController");
const {
  createPostController,
  getAllPostsController,
  getUserPostsController,
  deletePostController,
  updatePostController,
} = require("../controllers/postController");

//router object
const router = express.Router();

//Create Post
router.post("/create-post", requireSignIn, createPostController);

//GET all post
router.get("/get-all-posts", getAllPostsController);

//GET all post
router.get("/get-user-posts", requireSignIn, getUserPostsController);

//delete post
router.delete("/delete-post/:id", requireSignIn, deletePostController);

//update post
router.put("/update-post/:id", requireSignIn, updatePostController);

//export
module.exports = router;
