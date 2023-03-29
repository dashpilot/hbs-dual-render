const { compile } = require("./../lib/hbs_compile");

module.exports = async (req, res) => {
  if (req.headers["sec-fetch-dest"] == "iframe") {
    const category = req.query.category;
    if (category == "") {
      category = "home";
    }
    const result = await compile(category, true);

    res.send(result);
  } else {
    res.status(403).render();
  }
};
