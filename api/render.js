const { hbs_render } = require("./hbs_render");

module.exports = async (req, res) => {
  const result = await hbs_render();

  res.send(result);
};
