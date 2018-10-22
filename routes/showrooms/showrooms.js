const express = require("express");
const router = express.Router();
const showrooms = require("../../models/showrooms");
const addroom = require("../../models/addroom");
const { adminAuthenticated } = require("../../helpers/authentication");
router.all("/*", (req, res, next) => {
  req.app.locals.layout = "login";
  next();
});

router.get("/rooms", adminAuthenticated, (req, res) => {
  addroom
    .find({})
    .then(rom => {
      res.render("home/showrooms/rooms.handlebars", { rom: rom });
    })
    .catch(err => {
      if (err) return err;
    });
});

router.get("/rooms/edit/:id", adminAuthenticated, (req, res) => {
  showrooms.findOne({ _id: req.params.id }).then(posd => {
    //req.flash("delete_messageshafiq", "post successfully deleted");
    res.render("home/showrooms/roomsedit.handlebars", { posd: posd });
  });
});

router.put("/rooms/edit/:id", adminAuthenticated, (req, res) => {
  showrooms.findOne({ _id: req.params.id }).then(posd => {
    posd.date1 = req.body.date1;
    posd.date2 = req.body.date2;
    posd.date3 = req.body.date3;
    posd.date4 = req.body.date4;
    posd.date5 = req.body.date5;
    posd.date6 = req.body.date6;
    posd.date7 = req.body.date7;
    posd.a = req.body.a;
    posd.b = req.body.b;
    posd.c = req.body.c;
    posd.d = req.body.d;
    posd.e = req.body.e;
    posd.f = req.body.f;
    posd.g = req.body.g;
    posd.h = req.body.h;
    posd.i = req.body.i;
    posd.j = req.body.j;
    posd.k = req.body.k;
    posd.l = req.body.l;
    posd.m = req.body.m;
    posd.n = req.body.n;
    posd.o = req.body.o;
    posd.p = req.body.p;
    posd.q = req.body.q;
    posd.r = req.body.r;
    posd.s = req.body.s;
    posd.t = req.body.t;
    posd.u = req.body.u;
    posd.v = req.body.v;
    posd.w = req.body.w;
    posd.x = req.body.x;
    posd.z = req.body.z;
    posd.aa = req.body.aa;
    posd.bb = req.body.bb;
    posd.cc = req.body.cc;
    posd.dd = req.body.dd;
    posd.ee = req.body.ee;
    posd.ff = req.body.ff;
    posd.gg = req.body.gg;
    posd.hh = req.body.hh;
    posd.ii = req.body.ii;
    posd.jj = req.body.jj;
    posd.kk = req.body.kk;
    posd.ll = req.body.ll;
    posd.mm = req.body.mm;
    posd.nn = req.body.nn;
    posd.oo = req.body.oo;
    posd.pp = req.body.pp;
    posd.qq = req.body.qq;
    posd.rr = req.body.rr;
    posd.ss = req.body.ss;
    posd.tt = req.body.tt;
    posd.uu = req.body.uu;
    posd.vv = req.body.vv;
    posd.ww = req.body.ww;

    posd.save().then(saved => {
      req.flash("edit_message", "post successfully updated");
      res.redirect("/roomrec");
    });
  });
});

router.delete("/rooms/delete/:id", adminAuthenticated, (req, res) => {
  showrooms.remove({ _id: req.params.id }).then(post => {
    req.flash("delete_messageshafiq", "post successfully deleted");
    res.redirect("/roomrec");
  });
});
router.delete("/deleterom/:id", adminAuthenticated, (req, res) => {
  addroom.remove({ _id: req.params.id }).then(pot => {
    //req.flash("delete_messageshafiq", "post successfully deleted");
    res.redirect("/addroom");
  });
});

router.get("/roomrec", adminAuthenticated, (req, res) => {
  //showrooms.find({}).then(wood => {
  // res.render("home/showrooms/roomsrecord.handlebars");
  //});

  addroom
    .find({})
    .then(sts => {
      res.render("home/showrooms/roomsrecord.handlebars", { sts: sts });
    })
    .catch(err => {
      if (err) return err;
    });
});

router.get("/rooms", adminAuthenticated, (req, res) => {
  res.render("home/showrooms/rooms.handlebars");
  //res.send("working");
});

router.post("/rooms", adminAuthenticated, (req, res) => {
  const newrooms = new showrooms({
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
    z: req.body.z,
    aa: req.body.aa,
    bb: req.body.bb,
    cc: req.body.cc,
    dd: req.body.dd,
    ee: req.body.ee,
    ff: req.body.ff,
    gg: req.body.gg,
    hh: req.body.hh,
    ii: req.body.ii,
    jj: req.body.jj,
    kk: req.body.kk,
    ll: req.body.ll,
    mm: req.body.mm,
    nn: req.body.nn,
    oo: req.body.oo,
    pp: req.body.pp,
    qq: req.body.qq,
    rr: req.body.rr,
    ss: req.body.ss,
    tt: req.body.tt,
    uu: req.body.uu,
    vv: req.body.vv,
    ww: req.body.ww
  });

  newrooms
    .save()
    .then(savedpost => {
      console.log("successfully data saved");
      res.redirect("/roomrec");
    })
    .catch(err => {
      return err;
    });
});

router.post("/rooms/search", adminAuthenticated, (req, res) => {
  showrooms
    .find({ name: req.body.name })
    .then(wood => {
      addroom.find({}).then(sts => {
        res.render("home/showrooms/roomsrecord.handlebars", {
          wood,
          sts
        });
      });
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
