const path = require("path");



exports.loginHTML = (req, res) => {
    res.sendFile(path.join(__dirname,  "../public/views/login.html"));
  };
exports.homeHTML = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/views/home.html"));
  };
exports.signupHTML = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/views/signup.html"));
  };
  
exports.bmiHTML = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/views/bmi.html"));
  };
