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



// ROUTES  |
//         V

app.get("/", (req, res, next) => {
  res.render("home-page-view.ejs");
});


 //         search form stuff starts here:
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




app.listen(3000);
