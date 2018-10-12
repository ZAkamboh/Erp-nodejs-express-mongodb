const express = require("express");
const router = express.Router();
const labourdi = require("../../models/labourdi");
const dihadi = require("../../models/dihadi");
//const bcrypt = require("bcrypt");
const { adminAuthenticated } = require("../../helpers/authentication");

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

router.get("/createdi", adminAuthenticated, (req, res) => {
  dihadi
    .find({})
    .then(di => {
      res.render("home/labour/createdi.handlebars", { di: di });
    })
    .catch(err => {
      if (err) return err;
    });
});

router.delete("/dellabourdi/:id", adminAuthenticated, (req, res) => {
  labourdi.remove({ _id: req.params.id }).then(post => {
    req.flash("delete_messageshafiq", "post successfully deleted");
    res.redirect("/recorddi");
  });
});
router.delete("/deletedihadi/:id", adminAuthenticated, (req, res) => {
  dihadi.remove({ _id: req.params.id }).then(post => {
    req.flash("delete_messageshafiq", "post successfully deleted");
    res.redirect("/dihadi");
  });
});

router.get("/editlabourdi/:id", adminAuthenticated, (req, res) => {
  labourdi.findOne({ _id: req.params.id }).then(pos => {
    res.render("home/labour/editdi", { pos: pos });
  });
  // res.send("working");
});

router.put("/editlabourdi/:id", (req, res) => {
  labourdi.findOne({ _id: req.params.id }).then(pos => {
    pos.a = req.body.a;
    pos.b = req.body.b;
    pos.c = req.body.c;
    pos.d = req.body.d;
    pos.e = req.body.e;
    pos.f = req.body.f;
    pos.g = req.body.g;
    pos.h = req.body.h;
    pos.i = req.body.i;
    pos.j = req.body.j;
    pos.k = req.body.k;
    pos.l = req.body.l;
    pos.m = req.body.m;
    pos.n = req.body.n;
    pos.o = req.body.o;
    pos.p = req.body.p;
    pos.q = req.body.q;
    pos.r = req.body.r;
    pos.ppp = req.body.ppp;
    pos.htp = req.body.htp;
    pos.http = req.body.http;
    pos.v = req.body.v;
    pos.w = req.body.w;
    pos.x = req.body.x;
    pos.y = req.body.y;
    pos.z = req.body.z;
    pos.aa = req.body.aa;
    pos.bb = req.body.bb;
    pos.cc = req.body.cc;
    pos.dd = req.body.dd;

    pos.save().then(saved => {
      req.flash("edit_messageshafiq", "post successfully updated");
      res.redirect("/recorddi");
    });
  });

  // res.send("working");
});

router.get("/recorddi", adminAuthenticated, (req, res) => {
  // labourdi.find({}).then(rec => {
  //   res.render("home/labour/recorddi", { rec: rec });
  // });

  dihadi
    .find({})
    .then(dit => {
      res.render("home/labour/recorddi.handlebars", { dit: dit });
    })
    .catch(err => {
      if (err) return err;
    });
});

router.get("/createdi", adminAuthenticated, (req, res) => {
  res.render("home/labour/createdi");
});

router.post("/createdi", adminAuthenticated, (req, res) => {
  console.log(req.body);
  const newlabourdi = new labourdi({
    name: req.body.name,
    a: req.body.a,
    b: req.body.b,
    c: req.body.c,
    d: req.body.d,
    e: req.body.e,
    f: req.body.f,
    g: req.body.g,
    h: req.body.h,
    i: req.body.i,
    j: req.body.j,

    k: req.body.k,
    l: req.body.l,
    m: req.body.m,
    n: req.body.n,
    o: req.body.o,
    p: req.body.p,
    q: req.body.q,
    r: req.body.r,
    ppp: req.body.ppp,
    htp: req.body.htp,
    http: req.body.http,
    v: req.body.v,
    w: req.body.w,
    x: req.body.x,
    y: req.body.y,
    z: req.body.z,
    aa: req.body.aa,
    bb: req.body.bb,
    cc: req.body.cc,
    dd: req.body.dd
  });

  newlabourdi
    .save()
    .then(savedpost => {
      console.log("successfully data saved");
      res.redirect("/recorddi");
    })
    .catch(err => {
      return err;
    });
});

router.post("/sear", (req, res) => {
  labourdi
    .find({ name: req.body.name })
    .then(rec => {
      res.render("home/labour/recorddi.handlebars", { rec: rec });
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
