const Handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

module.exports = async (request, response) => {
  var file = path.join(process.cwd(), "src", "home.hbs");
  var source = fs.readFileSync(file, "utf8");

  var template = Handlebars.compile(source);

  var data = {
    title: "Hello world",
  };
  var result = template(data);

  res.send(result);
};
