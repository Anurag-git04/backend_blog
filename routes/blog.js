const express = require("express")
const router = express.Router();

// Import controllers
const { dummyLink, unlikePost, } = require('../controllers/likeController')
const {createComment} = require("../controllers/CommentsController")
const {createPost,getAllPosts}=require("../controllers/PostController")

//Mapping Create
router.get("/dummyroute",dummyLink);
router.post("/comments/create",createComment);
router.post("posts/create",createPost);
router.post("/posts",getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost)

//export
module.exports = router;