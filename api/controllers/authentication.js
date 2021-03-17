const mongoose = require('mongoose');
const passport = require('passport');
const User = mongoose.model('User');


module.exports.register = (req, res, next) => {
  const user = new User();

  //TODO: validate values

  user.name = req.body.name;
  user.email = req.body.email;

  user.setPassword(req.body.password);
  
  try{
    user.save(() => {
      const token = user.generateJwt();
      res.status(200);
      res.json({
        token: token
      })
    });
  } catch  {
    res.status(500);
    res.json({
      message: "Error saving user"
    })
  };
  
};

module.exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info)=>{
    if (err){
      res.status(404).json(err);
        return;
    }

    if (user) {
      const token = user.generateJwt();
      res.status(200);
      res.json({
        token: token
      });
    } else {
      res.status(401).json(info);
    }
  })(req, res, next);
};