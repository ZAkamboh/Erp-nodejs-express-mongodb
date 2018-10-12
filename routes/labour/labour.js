const express = require("express");
const router = express.Router();
const labour = require("../../models/labour");
const labourdi = require("../../models/labourdi");
const bank = require("../../models/bank");
const showrooms = require("../../models/showrooms");
const add = require("../../models/add");
const { adminAuthenticated } = require("../../helpers/authentication");

router.all("/*", (req, res, next) => {
  req.app.locals.layout = "home";
  next();
});

router.get("/edit/:id", (req, res) => {
  labour.findOne({ _id: req.params.id }).then(p => {
    //res.send("working");
    res.render("home/labour/edit.handlebars", { p: p });
    //console.log("work");
  });
  //
});

router.put("/edit/:id", (req, res) => {
  labour.findOne({ _id: req.params.id }).then(p => {
    p.date1 = req.body.date1;
    p.date2 = req.body.date2;
    p.date3 = req.body.date3;
    p.date4 = req.body.date4;
    p.date5 = req.body.date5;
    p.date6 = req.body.date6;
    p.date7 = req.body.date7;
    p.aa = req.body.aa;
    p.taf7 = req.body.taf7;
    p.quan1 = req.body.quan1;
    p.total1 = req.body.total1;
    p.GT = req.body.GT;
    p.k = req.body.k;
    p.pree = req.body.pree;
    p.body2 = req.body.body2;
    p.taf1 = req.body.taf1;
    p.quan2 = req.body.quan2;
    p.total2 = req.body.total2;
    p.body3 = req.body.body3;
    p.taf2 = req.body.taf2;
    p.quan3 = req.body.quan3;
    p.total3 = req.body.total3;
    p.body4 = req.body.body4;
    p.taf3 = req.body.taf3;
    p.quan4 = req.body.quan4;
    p.total4 = req.body.total4;
    p.body5 = req.body.body5;
    p.taf4 = req.body.taf4;
    p.quan5 = req.body.quan5;
    p.total5 = req.body.total5;
    p.body6 = req.body.body6;
    p.taf5 = req.body.taf5;
    p.quan6 = req.body.quan6;
    p.total6 = req.body.total6;
    p.body7 = req.body.body7;
    p.taf6 = req.body.taf6;
    p.quan7 = req.body.quan7;
    p.total7 = req.body.total7;
    p.save().then(saved => {
      req.flash("edit_messageshafiq", "post successfully updated");
      res.redirect("/record");
    });
  });

  // res.send("working");
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
    res.render("home/indeX.handlebars", {
      labourr: labourr,
      labourdii: labourdii,
      showroomss: showroomss,
      bankk: bankk,
      user: req.user
    });
  });
});

router.delete("/delete/:id", adminAuthenticated, (req, res) => {
  labour.remove({ _id: req.params.id }).then(posttt => {
    req.flash("delete_messageshafiq", "post successfully deleted");
    res.redirect("/record");
  });
});

router.delete("/deletethekedar/:id", adminAuthenticated, (req, res) => {
  add.remove({ _id: req.params.id }).then(kk => {
    req.flash("delete_messageshafiq", "post successfully deleted");
    res.redirect("/add");
  });
});

router.get("/record", adminAuthenticated, (req, res) => {
  //res.render("home/labour/shafiqrec.handlebars");
  //res.send("working");
  //res.render("home/labour/record.handlebars");
  // labour
  //   .find({})
  //   .then(post => {
  //     res.render("home/labour/record.handlebars", { post: post });
  //   })
  //   .catch(err => {
  //     if (err) return err;
  //   });

  add
    .find({})
    .then(st => {
      res.render("home/labour/record.handlebars", { st: st });
    })
    .catch(err => {
      if (err) return err;
    });
});

router.get("/create", adminAuthenticated, (req, res) => {
  add
    .find({})
    .then(po => {
      res.render("home/labour/create.handlebars", { po: po });
    })
    .catch(err => {
      if (err) return err;
    });
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

router.get("/create", adminAuthenticated, (req, res) => {
  res.render("home/labour/create.handlebars");
  //res.send("working");
});

router.post("/create", (req, res) => {
  console.log(req.body);
  const newlabour = new labour({
    name: req.body.name,
    date1: req.body.date1,
    date2: req.body.date2,
    date3: req.body.date3,
    date4: req.body.date4,
    date5: req.body.date5,
    date6: req.body.date6,
    date7: req.body.date7,
    aa: req.body.aa,
    taf7: req.body.taf7,
    quan1: req.body.quan1,
    total1: req.body.total1,
    GT: req.body.GT,
    k: req.body.k,
    pree: req.body.pree,
    body2: req.body.body2,
    taf1: req.body.taf1,
    quan2: req.body.quan2,
    total2: req.body.total2,
    body3: req.body.body3,
    taf2: req.body.taf2,
    quan3: req.body.quan3,
    total3: req.body.total3,
    body4: req.body.body4,
    taf3: req.body.taf3,
    quan4: req.body.quan4,
    total4: req.body.total4,
    body5: req.body.body5,
    taf4: req.body.taf4,
    quan5: req.body.quan5,
    total5: req.body.total5,
    body6: req.body.body6,
    taf5: req.body.taf5,
    quan6: req.body.quan6,
    total6: req.body.total6,
    body7: req.body.body7,
    taf6: req.body.taf6,
    quan7: req.body.quan7,
    total7: req.body.total7
  });

  newlabour.save().then(savedPost => {
    req.flash(
      "success_message",
      `posts ${savedPost.name} was created successfully`
    );
    console.log("successfully data saved");
    res.redirect("/record");
  });
});
router.post("/search", (req, res) => {
  labour
    .find({ name: req.body.name })
    .then((response, p) => {
      res.render("home/labour/record.handlebars", { post: response });
    })
    .catch(error => {
      console.log(error);
    });
});
module.exports = router;
