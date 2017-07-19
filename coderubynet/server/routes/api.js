const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const event = require('../models/event');

const db = "mongodb://fitsum.wolde:habeshawi2012@ds163672.mlab.com:63672/coderubynet";

mongoose.Promise = global.Promise;
mongoose.connect(db, function(err) {
  if(err) {
    console.log('Connection error');
  }
});

router.get('/events', function(req, res) {
  console.log('Requesting events');
  event.find({})
  .exec(function(err, events) {
    if (err) {
      console.log('Error getting the events');
    } else {
      res.json(events);
    }
  });
});

router.get('/details/:id', function(req, res) {
  console.log('Requesting event');
  event.findById(req.params.id)
  .exec(function(err, event) {
    if (err) {
      console.log('Error getting the event');
    } else {
      res.json(event);
    }
  });
});

module.exports = router;
