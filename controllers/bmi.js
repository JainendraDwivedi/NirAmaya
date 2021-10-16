const bodyParser = require("body-parser");

exports.bmi = (req,res)=>{
  
        heigh = parseFloat(req.body.Height);
        weigh = parseFloat(req.body.Weight);
        bmi = weigh / (heigh * heigh);
     
        //number to string format
        bmi = bmi.toFixed();
     
        // req_name = req.body.Name;
     
        // CONDITION FOR BMI
        if (bmi < 19) {
            res.send("<h3>Hey! "  +
                     " Your BMI is around: " + bmi +
                     "<centre><h1>You are Underweight!");
        } else if (19 <= bmi && bmi < 25) {
            res.send("<h3>Hey! " + 
                     " Your BMI is around: " + bmi +
                     "<centre><h1>You are Normalweight!");
        } else if (25 <= bmi && bmi < 30) {
            res.send("<h3>Hey! " + 
                     " Your BMI is around: " + bmi +
                     "<centre><h1>You are Overweight!");
        } else {
            res.send("<h3>Hey! " + 
                     " Your BMI is around: " + bmi +
                     "<centre><h1>You are Obese!");
        }
    };
