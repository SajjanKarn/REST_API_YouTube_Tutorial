const mongoose = require('mongoose');

module.exports = () => {
  // * connect to the mongoose database
  mongoose.connect("mongodb://localhost/restapi_tutorial", {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }).then(() => console.log("connection to db initialized...")).catch(err => console.log(err));
}
