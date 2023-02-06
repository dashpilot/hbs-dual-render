const Handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

var partialPath = path.join(process.cwd(), "src", "home.hbs");
var partial = fs.readFileSync(partialPath, "utf-8");
Handlebars.registerPartial("home", partial);

async function render() {
  const resp = await fetch(
    "https://api.eu-central-1.linodeobjects.com/test/data.json"
  );
  var data = await resp.json();

  var file = path.join(process.cwd(), "src", "layout.hbs");
  var source = fs.readFileSync(file, "utf-8");

  var template = Handlebars.compile(source);
  var result = template(data);

  fs.mkdirSync("./public");

  fs.writeFileSync("./public/index.html", result, "utf-8");
}
render();
