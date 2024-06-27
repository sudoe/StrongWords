const Blog = require('../models/blog');
const mongoose = require('mongoose');

const blog_index = (req, res) => {
    Blog.find({'_id': { $in: [
      mongoose.Types.ObjectId('667c3858a999b2c0682926e5'),
      mongoose.Types.ObjectId('667c3858a999b2c0682926e6'), 
      mongoose.Types.ObjectId('4ed3f18132f50c491100000e')]}}).sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { blogs: result, title: 'All blogs' });
    })
    .catch(err => {
      console.log(err);
    });
}

const blog_details = (req, res) => {
  const id = req.params.id
  // console.log(req.params);
  // Blog.findOne({ _id: id })
  Blog.findOne({ StrongNumber: id })
    .then(result => {
      console.log(result);
      res.render('details', { blog: result, title: 'Blog Details' });
    })
    .catch(err => {
      console.log(err);
      res.render('404', { title: 'Blog not found' });
    });
}

const blog_create_get = (req, res) => {
  res.render('create', { title: 'Create a new blog' });
}

// const blog_create_post = (req, res) => {
//   const blog = new Blog(req.body);
//   blog.save()
//     .then(result => {
//       res.redirect('/blogs');
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }

// const blog_delete = (req, res) => {
//   const id = req.params.id;
//   Blog.findByIdAndDelete(id)
//     .then(result => {
//       res.json({ redirect: '/blogs' });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }

module.exports = {
  blog_index, 
  blog_details, 
  blog_create_get, 
  // blog_create_post, 
  // blog_delete
}