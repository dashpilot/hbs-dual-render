//const Handlebars = require("handlebars");
const Handlebars = require("handlebars/runtime");
const { exec } = require("child_process");
const fs = require("fs");

async function precompile() {
  if (!fs.existsSync("./compiled")) {
    fs.mkdirSync("./compiled");
  }

  exec(
    "handlebars ./src/layout.hbs -f ./compiled/layout.js -c handlebars/runtime",
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

      exec(
        "handlebars ./src/main.hbs -f ./compiled/main.js -c handlebars/runtime",
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
    }
  );
}

module.exports = { precompile };
