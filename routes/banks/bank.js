const express = require("express");
const router = express.Router();
const bank = require("../../models/bank");

const { adminAuthenticated } = require("../../helpers/authentication");
router.all("/*", (req, res, next) => {
  req.app.locals.layout = "home";
  next();
});

// router.get("/bank", adminAuthenticated, (req, res) => {
//   res.render("home/bank/bank.handlebars");
//   //res.send("working");
// });

// router.get("/rooms", adminAuthenticated, (req, res) => {
//     addroom
//         .find({})
//         .then(rom => {
//             res.render("home/showrooms/rooms.handlebars", { rom: rom });
//         })
//         .catch(err => {
//             if (err) return err;
//         });
// });

router.get("/bank/edit/:id", adminAuthenticated, (req, res) => {
  bank.findOne({ _id: req.params.id }).then(ba => {
    res.render("home/bank/bankedit.handlebars", { ba: ba });
  });
});

router.put("/bank/edit/:id", adminAuthenticated, (req, res) => {
  bank.findOne({ _id: req.params.id }).then(ba => {
    ba.date1 = req.body.date1;
    ba.date2 = req.body.date2;
    ba.date3 = req.body.date3;
    ba.date4 = req.body.date4;
    ba.date5 = req.body.date5;
    ba.date6 = req.body.date6;
    ba.date7 = req.body.date7;
    ba.a = req.body.a;
    ba.b = req.body.b;
    ba.c = req.body.c;
    ba.d = req.body.d;
    ba.e = req.body.e;
    ba.f = req.body.f;
    ba.g = req.body.g;
    ba.h = req.body.h;
    ba.i = req.body.i;
    ba.j = req.body.j;
    ba.k = req.body.k;
    ba.l = req.body.l;
    ba.m = req.body.m;
    ba.n = req.body.n;
    ba.o = req.body.o;
    ba.p = req.body.p;
    ba.q = req.body.q;
    ba.r = req.body.r;
    ba.s = req.body.s;
    ba.t = req.body.t;
    ba.u = req.body.u;
    ba.v = req.body.v;
    ba.w = req.body.w;
    ba.x = req.body.x;
    ba.y = req.body.y;
    ba.z = req.body.z;
    ba.aa = req.body.aa;
    ba.bb = req.body.bb;

    ba.save().then(saved => {
      req.flash("edit_messageshafiq", "post successfully updated");
      res.redirect("/bankrec");
    });
  });
});

router.delete("/bank/delete/:id", adminAuthenticated, (req, res) => {
  bank.remove({ _id: req.params.id }).then(post => {
    req.flash("delete_messageshafiq", "post successfully deleted");
    res.redirect("/bankrec");
  });
});

router.get("/bankrec", adminAuthenticated, (req, res) => {
  //   bank
  //     .find({})
  //     .then(ba => {
  //       res.render("home/bank/bankrecord.handlebars", { ba: ba });
  //     })
  //     .catch(err => {
  //       if (err) return err;
  //     });
  res.render("home/bank/bankrecord.handlebars");
});

router.get("/bank", adminAuthenticated, (req, res) => {
  res.render("home/bank/bank.handlebars");
  //res.send("working");
});

router.post("/bank", adminAuthenticated, (req, res) => {
  console.log(req.body);
  const newbank = new bank({
    name: req.body.name,
    date1: req.body.date1,
    date2: req.body.date2,
    date3: req.body.date3,
    date4: req.body.date4,
    date5: req.body.date5,
    date6: req.body.date6,
    date7: req.body.date7,
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
    s: req.body.s,
    t: req.body.t,
    u: req.body.u,
    v: req.body.v,
    w: req.body.w,
    x: req.body.x,
    y: req.body.y,
    z: req.body.z,
    aa: req.body.aa,
    bb: req.body.bb
  });

  newbank
    .save()
    .then(savedpost => {
      console.log("successfully data saved");
      res.redirect("/bankrec");
    })
    .catch(err => {
      return err;
    });
});

router.post("/bank/search", (req, res) => {
  bank
    .find({ name: req.body.name })
    .then(ba => {
      res.render("home/bank/bankrecord.handlebars", { ba: ba });
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
