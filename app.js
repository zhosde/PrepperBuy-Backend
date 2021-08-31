// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Packages used for authentication (Session & Passport)
const session = require('express-session');
const passport = require('passport');
 
// Passport initial setup
require('./config/passport');

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

// Session settings: allows app to maintain the sessions 
// and the users in it


// app.use(
//   session({
//     secret: "some secret goes here",
//     resave: true,
//     saveUninitialized: false,
//   })
// );

app.use(
  session({
    secret: process.env.SESSION_SECRET || "very secret stuff",
    resave: true,
    saveUninitialized: false,
    cookie: {
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // must be 'none' to enable cross-site delivery
      secure: process.env.NODE_ENV === "production", // must be true if sameSite='none'
    },
  })
);

// To allow app to use passport for auth
app.use(passport.initialize());
app.use(passport.session());

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// default value for title local
const projectName = "prepperbuy-backend";
const capitalized = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}`;

// 👇 Start handling routes here
const index = require("./routes/index");
app.use("/", index);

const productRouter = require("./routes/product.routes"); 
app.use("/api", productRouter);

const orderRouter = require("./routes/order.routes");
app.use("/api", orderRouter);

const authRouter = require("./routes/auth.routes");
app.use("/api", authRouter);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/public/index.html");
});

module.exports = app;
