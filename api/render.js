const { compile } = require("./../run/_hbs_compile");

module.exports = async (req, res) => {
  // console.log(req.headers["x-forwarded-host"]);

  const category = req.query.category;
  if (category == "") {
    category = "home";
  }
  const result = await compile(category, true);

  res.send(result);
};
