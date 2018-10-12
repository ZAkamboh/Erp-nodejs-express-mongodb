const express = require("express");
const router = express.Router();
const login = require("../../models/login");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const showrooms = require("../../models/showrooms");
const labour = require("../../models/labour");
const Localstrategy = require("passport-local").Strategy;
const { adminAuthenticated } = require("../../helpers/authentication");
router.all("/*", (req, res, next) => {
  req.app.locals.layout = "login";
  next();
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
  //res.send("working");
});

router.get("/login", (req, res) => {
  res.render("login/loginindex.handlebars");
});

passport.use(
  new Localstrategy({ usernameField: "email" }, (email, password, done) => {
    login.findOne({ email: email }).then(response => {
      if (!response) return done(null, false, { message: "user not found" });
      bcrypt.compare(password, response.password, (err, res) => {
        if (err) return err;
        if (res) {
          return done(null, response);
        } else {
          return done(null, false, { message: "incorrect password" });
        }
      });
    });
  })
);
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  login.findById(id, function(err, user) {
    done(err, user);
  });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/",
    failureFlash: true
  })
);

router.get("/signup", (req, res) => {
  res.render("login/signup.handlebars");
});

router.post("/signup", (req, res) => {
  let file = req.files.file;
  let filename = file.name;

  file.mv("./public/" + filename, err => {
    if (err) throw err;
  });

  const newlogin = new login({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    file: filename
  });
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newlogin.password, salt, (err, hash) => {
      if (err) return err;
      newlogin.password = hash;
      newlogin.save().then(post => {
        req.flash("error_message", "registration successfull");

        res.redirect("/");
        //res.send('inserted');
      });
    });
  });
});

//

module.exports = router;
