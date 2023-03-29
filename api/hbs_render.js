//const Handlebars = require("handlebars");
const Handlebars = require("handlebars/runtime");
const hbstemplate = require("./../src/layout-compiled.js");
const hbstemplate2 = require("./../src/main-compiled.js");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

async function precompile() {
  exec(
    "handlebars ./src/main.hbs -f ./src/main-compiled.js -c handlebars/runtime",
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    }
  );

  /*
  Handlebars.registerHelper("ifEq", function (v1, v2, options) {
    if (v1 === v2) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

  var partialPath = path.join(process.cwd(), "src", "main.hbs");
  var main = fs.readFileSync(partialPath, "utf-8");
  Handlebars.registerPartial("main", main);

  var file = path.join(process.cwd(), "src", "layout.hbs");
  var source = fs.readFileSync(file, "utf-8");

  var result = Handlebars.precompile(source);

  fs.writeFileSync("./src/precompiled.js", result, "utf-8");
  */
}

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
  //var source = fs.readFileSync("./src/precompiled.js", "utf-8");
  // var template = Handlebars.compile(source);
  var template = Handlebars.templates["layout.hbs"];

  var result = template(data);

  return result;
}
// render();

module.exports = { precompile, compile };
