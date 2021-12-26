const https = require("https");
const bodyParser = require("body-parser");
const request = require("request");

exports.getData = (req, res) => {
  var query = req.body.foodItem;

  request.get(
    {
      url: "https://api.calorieninjas.com/v1/nutrition?query=" + query,
      headers: {
        "X-Api-Key": "NidnBMrMCDT8WCkcKqueQ7VtkrGnPdimy0pecOHp",
      },
    },
    function (error, response, body) {
      if (error) return console.error("Request failed:", error);
      else if (response.statusCode != 200)
        return console.error(
          "Error:",
          response.statusCode,
          body.toString("utf8")
        );
      else {
        const items = JSON.parse(body);

        console.log("JaPAn - Jainendra Priya Ansh");

        const Name = items.items[0].name;
        const Serving_Size = items.items[0].serving_size_g;
        const Calories = items.items[0].calories;
        const Total_Fat = items.items[0].fat_total_g;
        const Saturated_Fat = items.items[0].fat_saturated_g;
        const Cholesterol = items.items[0].cholesterol_mg;
        const Sodium = items.items[0].sodium_mg;
        const Carbohydrates = items.items[0].carbohydrates_total_g;
        const Fiber = items.items[0].fiber_g;
        const Sugar = items.items[0].sugar_g;
        const Protein = items.items[0].protein_g;

        res.render("calorieApi", {
          Name: Name,
          Serving_Size: Serving_Size,
          Calories: Calories,
          Total_Fat: Total_Fat,
          Saturated_Fat: Saturated_Fat,
          Cholesterol: Cholesterol,
          Sodium: Sodium,
          Carbohydrates: Carbohydrates,
          Fiber: Fiber,
          Sugar: Sugar,
          Protein: Protein,
        });
      }
    }
  );
};
