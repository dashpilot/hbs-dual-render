const fs = require("fs");
const { hbs_render } = require("./render");

async function prerender() {
  const result = await hbs_render();

  fs.mkdirSync("./public");
  fs.mkdirSync("./public/tpl");

  fs.writeFileSync("./public/index.html", result, "utf-8");

  // fs.writeFileSync("./public/tpl/layout.html", source, "utf-8");
  // fs.writeFileSync("./public/tpl/main.html", main, "utf-8");
}

prerender();
