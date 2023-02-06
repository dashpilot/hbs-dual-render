const Handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

async function render() {
  const resp = await fetch(
    "https://api.eu-central-1.linodeobjects.com/test/data.json"
  );
  var data = await resp.json();

  var partialPath = path.join(process.cwd(), "src", "main.hbs");
  var main = fs.readFileSync(partialPath, "utf-8");
  Handlebars.registerPartial("main", main);

  var file = path.join(process.cwd(), "src", "layout.hbs");
  var source = fs.readFileSync(file, "utf-8");

  var template = Handlebars.compile(source);
  var result = template(data);

  fs.mkdirSync("./public");

  fs.writeFileSync("./public/index.html", result, "utf-8");

  fs.writeFileSync("./public/_src/layout.hbs", source, "utf-8");
  fs.writeFileSync("./public/_src/main.hbs", main, "utf-8");
}
render();
