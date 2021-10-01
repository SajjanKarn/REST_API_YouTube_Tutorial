const express = require("express");

const app = express();

require('./startup/db')();

// middlewares
require("./startup/middleware")(app);

// routes
require("./startup/route")(app);

// server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("server started listening on port: 3000"));
