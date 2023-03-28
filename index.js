const fs = require("fs");
const { hbs_render } = require("./api/hbs_render");

async function prerender() {
  fs.mkdirSync("./public");
  fs.mkdirSync("./public/tpl");

  var result = await hbs_render("home");
  fs.writeFileSync("./public/index.html", result, "utf-8");

  var result = await hbs_render("about");
  fs.mkdirSync("./public/about");
  fs.writeFileSync("./public/about/index.html", result, "utf-8");

  var result = await hbs_render("contact");
  fs.mkdirSync("./public/contact");
  fs.writeFileSync("./public/contact/index.html", result, "utf-8");

  // fs.writeFileSync("./public/tpl/layout.html", source, "utf-8");
  // fs.writeFileSync("./public/tpl/main.html", main, "utf-8");
}

prerender();
