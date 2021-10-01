const express = require("express");
const mongoose = require('mongoose')

const app = express();

// * connect to the mongoose database
mongoose.connect("mongodb://localhost/restapi_tutorial", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("connection to db initialized...")).catch(err => console.log(err));


// middlewares
require("./startup/middleware")(app);

// routes
require("./startup/route")(app);

// server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("server started listening on port: 3000"));
