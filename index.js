const Handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

var source = fs.readFileSync("./src/home.hbs", "utf-8");
var template = Handlebars.compile(source);

var data = {
  title: "Hello world",
};
var result = template(data);

console.log(result);
