var express = require("express");
var router = express.Router();
const path = require("path");


const {
    getData
    
  } = require("../controllers/calorieApi");
  
  router.post("/getData", getData);

module.exports = router;