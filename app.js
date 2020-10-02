const express = require("express");
const mongoose = require('mongoose')

const app = express();

// * connect to the mongoose database
mongoose.connect("mongodb://localhost/restapi_tutorial", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("connection to mongodb was successful!")
})


// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// routes
app.use(require('./routes/index'))
app.use(require("./routes/user"))


// server configurations
app.listen(3000, () => {
  console.log("server started listening on port: 3000");
});
