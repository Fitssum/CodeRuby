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

router.post('/events', function(req, res) {
  console.log('Announcing an event');
  var newEvent = new event();
  newEvent.title = req.body.title;
  newEvent.date = req.body.date;
  newEvent.description = req.body.description;
  newEvent.url = req.body.url;
  newEvent.save(function(err, addedEvent) {
    if (err) {
      console.log('Error inserting the event')
    } else {
      res.json(addedEvent);
    }
  });
});

Event.findById(req.params.eventId, function (err, event) {
    if (err) {
        res.status(500).send(err);
    } else {
        event.title = req.body.title || event.title;
        event.description = req.body.description || event.description;
        event.date = req.body.date || event.date;
        event.url = req.body.url || event.url;

        event.save(function (err, event) {
            if (err) {
                res.status(500).send(err)
            }
            res.json(event);
        });
    }
});

Event.findByIdAndRemove(req.params.eventId, function (err, event) {
    var response = {
        message: "Event successfully deleted",
        id: event._id
    };
    res.json(response);
});

module.exports = router;
