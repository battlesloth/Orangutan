const mongoose = require('mongoose');
const User = mongoose.model('User');


module.exports.profileRead = (req, res, next) => {
  if (!req.payload._id) {
    res.status(400).json({
      message: "UnauthorizedError: private profile"
    });
  } else {
    User.findById(req.payload._id).exec(function (err, user) {
      res.status(200).json(user);
    });
  }
};