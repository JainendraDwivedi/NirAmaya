var express = require("express");
var router = express.Router();
const { bmi } = require("../controllers/bmi");

router.post("/bmi", bmi);

module.exports = router;
