//const Handlebars = require("handlebars");
const Handlebars = require("handlebars/runtime");
const { exec } = require("child_process");

async function precompile() {
  exec(
    "handlebars ./src/layout.hbs -f ./src/layout-compiled.js -c handlebars/runtime",
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
    }
  );
}

module.exports = { precompile };
