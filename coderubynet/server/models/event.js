const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: String,
  date: Date,
  description: String,
  url: String
});

module.exports = mongoose.model('event', eventSchema);
