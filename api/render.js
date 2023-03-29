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
    res.status(403).send(`<!doctype html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width" />
        <title>Error 403 - Forbidden</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
      </head
      <body>
        <div class="container mt-5 text-center">
        <h1>Error 403 - Forbidden</h1>
        </div>
      </body>
      </html>`);
  }
};
