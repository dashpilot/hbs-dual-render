const Handlebars = require("handlebars/runtime");
const hbstemplate = require("./../compiled/layout.js");
const hbstemplate2 = require("./../compiled/main.js");
const fs = require("fs");
const path = require("path");

async function compile(category, ssr = false) {
  const resp = await fetch(
    "https://api.eu-central-1.linodeobjects.com/test/data.json"
  );
  var data = await resp.json();

  data.ssr = ssr;
  data.posts = data.posts.filter((x) => x.category == category);

  Handlebars.registerHelper("ifEq", function (v1, v2, options) {
    if (v1 === v2) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

  Handlebars.registerPartial("main", Handlebars.templates["main.hbs"]);

  var template = Handlebars.templates["layout.hbs"];

  var result = template(data);

  return result;
}
// render();

module.exports = { compile };
