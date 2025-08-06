const express = require('express');
const path = require('path');
const multer = require('multer');
const router = express.Router();
const ctrl = require('../controllers/blogController');

/* Multer for images */
const storage = multer.diskStorage({
  destination: path.join(__dirname, '..', 'public', 'uploads'),
  filename: (_req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });


router.get('/:id', ctrl.getBlogById);
router.get('/', ctrl.getBlogs);
router.post('/', upload.single('image'), ctrl.addBlog);
router.put('/:id', upload.single('image'), ctrl.updateBlog);
router.delete('/:id', ctrl.deleteBlog);

module.exports = router;
