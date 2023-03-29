const fs = require("fs");
const { compile } = require("./hbs_compile");

async function prerender() {
  // var result = await precompile();

  if (!fs.existsSync("./public")) {
    fs.mkdirSync("./public");
  }

  const resp = await fetch(
    "https://api.eu-central-1.linodeobjects.com/test/data.json"
  );
  var data = await resp.json();

  data.categories.forEach(async (cat) => {
    var result = await compile(cat.slug);

    if (cat.slug == "home") {
      fs.writeFileSync("./public/index.html", result, "utf-8");
    } else {
      fs.mkdirSync("./public/" + cat.slug);
      fs.writeFileSync("./public/" + cat.slug + "/index.html", result, "utf-8");
    }
  });
}

prerender();
