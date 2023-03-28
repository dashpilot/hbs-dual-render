const { render } = require("./render");

module.exports = async (req, res) => {
  const result = await render();

  res.send(result);
};
