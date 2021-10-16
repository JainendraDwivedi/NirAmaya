var express = require("express");
var router = express.Router();
const path = require("path");

const {
  loginHTML,
  homeHTML,
  signupHTML,
  bmiHTML,
} = require("../controllers/html-controllers");

router.get("/", loginHTML);

router.get("/home", homeHTML);

router.get("/signup", signupHTML);

router.get("/bmi", bmiHTML);

module.exports = router;

