const Handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

module.exports = async (req, res) => {
  const result = await fetch(
    "https://api.eu-central-1.linodeobjects.com/test/data.json"
  );
  var data = await result.json();

  var file = path.join(process.cwd(), "src", "home.hbs");
  var source = fs.readFileSync(file, "utf-8");

  var template = Handlebars.compile(source);
  var result = template(data);

  res.send(result);
};
