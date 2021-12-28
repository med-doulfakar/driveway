const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema({
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  seen: Boolean,
  broadcast: Boolean,
  text: String,
  type: String,
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
