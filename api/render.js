const Handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

module.exports = async (request, response) => {
  var source = fs.readFileSync("./src/home.hbs", "utf-8");
  var template = Handlebars.compile(source);

  var data = {
    title: "Hello world",
  };
  var result = template(data);

  res.send(result);
};
