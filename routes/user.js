const router = require("express").Router();
const User = require("../models/User");

router
  .get("/all", async (req, res) => {
    const allUser = await User.find();
    res.json({ user: allUser });
  })
  .post("/add/user", async (req, res) => {
    const { name, age, profession } = req.body;
    const newUser = new User({ name, age, profession });
    // save the user
    newUser
      .save()
      .then(() => {
        res.json({ msg: "User Added Successfully!" });
      })
      .catch((err) => console.log(err));
  })
  .delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    User.deleteOne({ _id: id })
      .then(() => {
        res.json({ msg: `Successfully Delete The User of ${id}` });
      })
      .catch((err) => console.log(err));
  })
  .get("/user/:name", async (req, res) => {
    const { name } = req.params;
    const getUser = await User.findOne({ name });
    if (!getUser) {
      return res.json({ msg: "No User found with that name!" });
    }

    // else we will send the response to the user
    res.json({ user: getUser });
  })
  .delete("/dlt/all/user", (req, res) => {
    User.deleteMany({})
      .then(() => {
        res.json({ msg: "Deleted all the User from the database!" });
      })
      .catch((err) => console.log(err));
  })
  .put("/update/user/:id", (req, res) => {
    const { id } = req.params;
    const { name, age, profession } = req.body;

    User.update({ _id: id }, { name, age, profession })
      .then(() => {
        res.json({ msg: `Updated User of id: ${id}` });
      })
      .catch((err) => console.log(err));
  });

module.exports = router;
