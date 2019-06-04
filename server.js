// Required dependencies
const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");

// Set up our port to be either the host's designated port, or 3000
const PORT = process.env.PORT || 3000;

// Initiate express
const app = express();

// Reference required routes
const routes = require("./routes");

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect and initiate Handlebars html templeting
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Require the use of routes middleware
app.use(routes);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);

// Listen on the port
app.listen(PORT, function() {
  console.log("Listening on http://localhost:" + PORT);
});
