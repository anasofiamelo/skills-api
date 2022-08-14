const express = require("express");
const routes = require("./app/routes");
const cors = require("cors");
require("dotenv").config();

const AuthMiddleware = require("./app/Middleware/AuthMiddleware");

const app = express();
const port = process.env.API_PORT || 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Expose-Headers",
    "Authorization, X-WP-Total, X-WP-TotalPages"
  );
  res.header("Access-Control-Allow-Methods", "*");
  app.use(cors());
  // app.use(AuthMiddleware);
  next();
});
routes(app);

app.listen(port, () => console.log(`servidor na porta ${port}`));

module.exports = app;
