const Handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

async function hbs_render(category) {
  const resp = await fetch(
    "https://api.eu-central-1.linodeobjects.com/test/data.json"
  );
  var data = await resp.json();

  data.posts = data.posts.filter((x) => x.category == category);

  var partialPath = path.join(process.cwd(), "src", "main.hbs");
  var main = fs.readFileSync(partialPath, "utf-8");
  Handlebars.registerPartial("main", main);

  var file = path.join(process.cwd(), "src", "layout.hbs");
  var source = fs.readFileSync(file, "utf-8");

  var template = Handlebars.compile(source);
  var result = template(data);

  return result;
}
// render();

module.exports = { hbs_render };
