const fs = require("fs");
const { precompile, compile } = require("./api/hbs_render");

async function prerender() {
  // var result = await precompile();

  if (!fs.existsSync("./public")) {
    fs.mkdirSync("./public");
  }

  var result = await compile("home");
  fs.writeFileSync("./public/index.html", result, "utf-8");

  var result = await compile("about");
  fs.mkdirSync("./public/about");
  fs.writeFileSync("./public/about/index.html", result, "utf-8");

  var result = await compile("contact");
  fs.mkdirSync("./public/contact");
  fs.writeFileSync("./public/contact/index.html", result, "utf-8");

  // fs.writeFileSync("./public/tpl/layout.html", source, "utf-8");
  // fs.writeFileSync("./public/tpl/main.html", main, "utf-8");
}

prerender();
