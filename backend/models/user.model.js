const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// schema has only one field which is username
const userSchema = new Schema({
  username: {
      //validations for the username
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
    // creates fields for when the username was created and modified
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;