const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const methodoverride = require("method-override");
const fileupload = require("express-fileupload");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");

// mongoose
//   .connect("mongodb://localhost/postwdata")
//   .then(() => {
//     console.log("database successfully connected");
//   })
//   .catch(err => {
//     if (err) return err;
//     //console.log('database not connected');
//   });
if (
  mongoose.connect(
    "mongodb://interno:meanstackES6@ds151892.mlab.com:51892/interno"
  )
) {
  mongodb: console.log("connected");
} else {
  console.log("not connected");
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.use(methodoverride("_method"));
app.use(fileupload());
app.use(flash());
app.use(
  session({
    secret: "zubairkamboh",
    resave: true,
    saveUninitialized: true
  })
);

app.use((req, res, next) => {
  res.locals.regist = req.regist || null;

  res.locals.error_message = req.flash(" error_message");
  res.locals.delete_messageshafiq = req.flash("delete_messageshafiq");
  res.locals.edit_messageshafiq = req.flash("edit_messageshafiq");
  res.locals.error = req.flash("error");
  next();
});

app.use(passport.initialize());
app.use(passport.session());

app.engine("handlebars", exphbs({ defaultLayout: "home" }));
app.set("view engine", "handlebars");

const labour = require("./routes/labour/labour");
const labourdi = require("./routes/labour/labourdi");
const login = require("./routes/login/login");
const bank = require("./routes/banks/bank");
const showrooms = require("./routes/showrooms/showrooms");
app.use("/", login);
app.use("/", labour);
app.use("/", labourdi);
app.use("/", showrooms);
app.use("/", bank);

const port = process.env.PORT || 4500;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
