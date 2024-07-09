const Word = require('../models/word');
const mongoose = require('mongoose');

const word_index = (req, res) => {
    Word.find({'_id': { $in: [
      mongoose.Types.ObjectId('667c3858a999b2c0682926e5'),
      mongoose.Types.ObjectId('667c3858a999b2c0682926e6'), 
      mongoose.Types.ObjectId('4ed3f18132f50c491100000e')]}}).sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { words: result, title: 'All words' });
    })
    .catch(err => {
      console.log(err);
    });
}

const word_details = (req, res) => {
  const id = req.params.id
  // console.log(req.params);
  // word.findOne({ _id: id })
  word.findOne({ StrongNumber: id })
    .then(result => {
      console.log(result);
      res.render('details', { word: result, title: 'word Details' });
    })
    .catch(err => {
      console.log(err);
      res.render('404', { title: 'word not found' });
    });
}

const word_create_get = (req, res) => {
  res.render('create', { title: 'Create a new word' });
}

// const word_create_post = (req, res) => {
//   const word = new word(req.body);
//   word.save()
//     .then(result => {
//       res.redirect('/words');
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }

// const word_delete = (req, res) => {
//   const id = req.params.id;
//   word.findByIdAndDelete(id)
//     .then(result => {
//       res.json({ redirect: '/words' });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }

module.exports = {
  word_index, 
  word_details, 
//   word_create_get, 
  // word_create_post, 
  // word_delete
}