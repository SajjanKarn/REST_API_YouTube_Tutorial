const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ msg: "Welcome to the REST api build by programmers squad!" });
});

module.exports = router;
