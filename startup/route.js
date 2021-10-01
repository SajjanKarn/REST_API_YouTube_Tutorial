module.exports = app => {
  app.use(require('./routes/index'));
  app.use(require("./routes/user"));
};
