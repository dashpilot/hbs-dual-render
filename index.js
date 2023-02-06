const Handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

async function render() {
  const res = await fetch(
    "https://api.eu-central-1.linodeobjects.com/test/data.json"
  );
  var data = await res.json();

  var file = path.join(process.cwd(), "src", "home.hbs");
  var source = fs.readFileSync(file, "utf-8");

  var template = Handlebars.compile(source);
  var result = template(data);

  fs.mkdirSync("./public");

  fs.writeFileSync("./public/index.html", result, "utf-8");
}
render();
