const Blog = require('../models/blog'); // Import the blog model
const mongoose = require('mongoose'); // Connect to MongoDB

const blog_index = (req, res) => {
    Blog.find(
      ({ StrongNumber: 1, 
        StrongNumber: { $exists: true, $ne: null} //also check for nulls
      }))
      .limit(10) // limit results to 10
      // .sort({ StrongNumber: 1 }) // sort by StrongNumber in ascending order
      .then(result => {
      res.render('index', { blogs: result, title: 'All Words' }); // render the index page with the blog data
    })
    .catch(err => {
      console.log(err);
    });
}

const blog_details = (req, res) => {
  const id = req.params.id // Get the blog ID from the URL parameter
  Blog.findOne({ StrongNumber: id })
    .then(result => {
      res.render('details', { blog: result, title: 'Word Details' });
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