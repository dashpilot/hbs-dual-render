const { hbs_render } = require("./hbs_render");

module.exports = async (req, res) => {
  console.log(req.headers["x-forwarded-for"]);

  const category = req.query.category;
  if (category == "") {
    category = "home";
  }
  const result = await hbs_render(category);

  res.send(result);
};
