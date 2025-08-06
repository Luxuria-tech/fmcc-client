const Blog = require('../models/blogModel');

exports.getBlogById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.json(blog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};


exports.getBlogs = async (_req, res, next) => {
  try { res.json(await Blog.findAll()); }
  catch (err) { next(err); }
};

exports.addBlog = async (req, res, next) => {
  try {
    const image_url = req.file ? `/uploads/${req.file.filename}` : null;
    const saved = await Blog.create({ ...req.body, image_url });
    res.status(201).json(saved);
  } catch (err) { next(err); }
};





exports.updateBlog = async (req, res, next) => {
  try {
    const image_url = req.file ? `/uploads/${req.file.filename}` : req.body.image_url;
    const updated = await Blog.update(req.params.id, { ...req.body, image_url });
    res.json(updated);
  } catch (err) { next(err); }
};

exports.deleteBlog = async (req, res, next) => {
  try {
    await Blog.remove(req.params.id);
    res.status(204).end();
  } catch (err) { next(err); }
};
