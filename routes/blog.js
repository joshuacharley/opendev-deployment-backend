const express = require('express');

const router = express.Router();

const blogController = require('../controllers/blog');

router.get('/blog', blogController.getAllBlog);
router.post('/blog', blogController.newBlog);
router.delete('/blog', blogController.deleteAllBlog);

router.get('/blog/:name', blogController.getOneBlog);
router.post('/blog/:name', blogController.newComment);
router.delete('/blog/:name', blogController.deleteOneBlog);




module.exports = router;