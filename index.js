const Handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

var file = path.join(process.cwd(), "src", "home.hbs");
var source = fs.readFileSync(file, "utf-8");

var template = Handlebars.compile(source);

var data = {
  title: "Hello world",
};
var result = template(data);

fs.mkdirSync("./public");

fs.writeFileSync("./public/index.html", result, "utf-8");
