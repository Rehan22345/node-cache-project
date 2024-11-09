const express = require("express");
const { Postblog, UpdateBlog, DeleteBlog } = require("../controllers/blog");
const router = express.Router();



router.route("/add").post(Postblog);
router.route("/put/:id").put(UpdateBlog);
router.route("/delete/:id").delete(DeleteBlog);

module.exports = router