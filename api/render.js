const { compile } = require("./../lib/hbs_compile");

module.exports = async (req, res) => {
  console.log(req.headers);

  const category = req.query.category;
  if (category == "") {
    category = "home";
  }
  const result = await compile(category, true);

  res.send(result);
};
