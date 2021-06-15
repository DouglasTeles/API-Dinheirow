const express = require("express");
const api = express();
require("dotenv").config();
const routes = require("./routes");
const authenticate = require("./app/middleware/auth/index")



api.use(express.json());

require("./app/database");



api.use(routes);

const PORT = 3000;
api.listen(PORT, (req, res) => {
  console.log("API running port:", PORT);
});
