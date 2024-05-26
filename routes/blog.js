const express = require("express")
const router = express.Router();

// Import controllers
const { dummyLink } = require('../controllers/likeController')


//Mapping Create
router.get("/dummyroute",dummyLink);

//export
module.exports = router;