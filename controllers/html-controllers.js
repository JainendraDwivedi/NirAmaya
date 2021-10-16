const path = require("path");


exports.loginHTML = function (req, res) {
  res.render("login");
};
exports.homeHTML = function (req, res) {
  res.render("home");
};
exports.signupHTML = function (req, res) {
  res.render("signup");
};

exports.bmiHTML = function (req, res) {
  res.render("bmi");
};
