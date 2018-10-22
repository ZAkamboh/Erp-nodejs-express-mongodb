const express = require("express");
const router = express.Router();
const labour = require("../models/labour");
const labourdi = require("../models/labourdi");
const bank = require("../models/bank");
const showrooms = require("../models/showrooms");
const dihadi = require("../models/dihadi");
const addroom = require("../models/addroom");

const add = require("../models/add");
const { adminAuthenticated } = require("../helpers/authentication");

router.all("/*", (req, res, next) => {
  req.app.locals.layout = "home";
  next();
});

router.get("/add", adminAuthenticated, (req, res) => {
  add
    .find({})
    .then(addlabb => {
      res.render("home/labour/addlab.handlebars", { addlabb: addlabb });
    })
    .catch(err => {
      if (err) return err;
    });
});

router.post("/add", adminAuthenticated, (req, res) => {
  const newadd = new add({
    ch: req.body.ch
  });
  newadd.save().then(() => {
    res.redirect("/add");
  });
});

router.get("/dihadi", adminAuthenticated, (req, res) => {
  // labourdi.find({}).then(rec => {
  //   res.render("home/labour/recorddi", { rec: rec });
  // });

  dihadi
    .find({})
    .then(owais => {
      res.render("home/labour/dihadi.handlebars", { owais: owais });
    })
    .catch(err => {
      if (err) return err;
    });
});

router.post("/dihadi", adminAuthenticated, (req, res) => {
  const newdihadi = new dihadi({
    dihadi: req.body.dihadi
  });
  newdihadi.save().then(() => {
    res.redirect("/dihadi");
  });
});

router.get("/addroom", adminAuthenticated, (req, res) => {
  addroom
    .find({})
    .then(adrom => {
      res.render("home/showrooms/addroom.handlebars", { adrom: adrom });
    })
    .catch(err => {
      if (err) return err;
    });
});

router.post("/addroom", adminAuthenticated, (req, res) => {
  const newaddroom = new addroom({
    chc: req.body.chc
  });
  newaddroom.save().then(() => {
    res.redirect("/rooms");
  });
});

router.get("/home", adminAuthenticated, (req, res) => {
  //res.render("home/index.handlebars", { user: req.user });
  //res.send("working");

  const promises = [
    labour.count().exec(),
    labourdi.count().exec(),
    showrooms.count().exec(),
    bank.count().exec()
  ];
  Promise.all(promises).then(([labourr, labourdii, showroomss, bankk]) => {
    res.render("home/index.handlebars", {
      labourr: labourr,
      labourdii: labourdii,
      showroomss: showroomss,
      bankk: bankk,
      user: req.user
    });
  });
});

module.exports = router;
