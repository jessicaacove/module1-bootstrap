const express = require("express");

const app = express();





app.set("views", "views");

app.set("view engine", "ejs");

app.use(express.static("public"));



// LAYOUTS |
//         V

const expressLayouts = require("express-ejs-layouts");

app.use(expressLayouts);

app.set("layout", "layout.ejs");


// Body-parser stuff v
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true}));



// ROUTES  |
//         V

app.get("/", (req, res, next) => {
  res.render("home-page-view.ejs");
});


 //     Search Form stuff starts here:
app.get("/search", (req, res, next) => {
  res.render("search-form-view.ejs");
});

//          search form step 2
app.get("/results", (req, res, next) => {
  //  v referring to "query string": (?food=pizza&price=888)
  const myTerm = req.query.searchTerm;
  const myCheckbox = req.query.interestThing;

  if(myCheckbox === "on") {
    res.render("pizza-results.ejs", {
    theSearch: myTerm
  });
}
  else {
    res.render("results-view.ejs", {
    theSearch: myTerm
  });
}
});


//      Login Form starts here
app.get("/login", (req, res, next) => {
  res.render("login-form-view.ejs");
});

//            step 2 of login-form
app.post("/check-login", (req, res, next) => {
  const userEmail = req.body.emailValue;
  const userPass = req.body.passwordValue;

  if (userEmail === "a@a.a" && userPass === "swordfish") {
    res.render("welcome-view.ejs");
  }
  else {
    res.render("go-away-view.ejs");
  }
  res.render("go-away-view.ejs");
});




app.listen(3000);
