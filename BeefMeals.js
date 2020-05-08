$(document).ready(function () {

  var Meal1Title= $("#meal1Title");
  var Meal1IMG= $("#meal1img");
  var Meal1TitleModal= $("#meal1TitleModal");
  var Meal1Instructions= $("#meal1Instructions");
  var Meal1IMGModal= $("#meal1modalimg");
  var Meal1Ingredients= $("#meal1Ingredients");

function getMeal1 () {
  var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef&apikey=1";

      $.ajax({
      url: queryURL,
      method: "GET",
      }).then(function (response) {
          var meal=response.meals;
          console.log(meal);
          var randomMeal = meal[Math.floor(Math.random() * meal.length)];
          console.log(randomMeal);

          Meal1Title.text(randomMeal.strMeal);
          Meal1TitleModal.text(randomMeal.strMeal);
          
          var mealstrIMG= randomMeal.strMealThumb;
          console.log(randomMeal.strMealThumb);
          Meal1IMG.attr("src", mealstrIMG);
          Meal1IMGModal.attr("src", mealstrIMG);

          var mealID = randomMeal.idMeal;
          console.log("MEALID", mealID);
          $.ajax({
            url: "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID,
            method: "GET",
          }).then(function(response) {
            console.log("MEAL DETAILS",response);
            var k = 1;
            var food = response.meals[0];
            while (food['strIngredient' + k] != null) {
              var stringredient= food['strIngredient' + k];
              console.log(stringredient);
              var ingredient = $("<p>").text(stringredient);
              Meal1Ingredients.append(ingredient);
              k ++;
            }
            Meal1Instructions.text(food.strInstructions);
          })
      });
  };

    $("#refreshMealBtn").on("click", function() {
      Meal1Title.empty();
      Meal1IMG.empty();
      Meal1TitleModal.empty();
      Meal1Instructions.empty();
      Meal1IMGModal.empty();
      Meal1Ingredients.empty();

      // Meal2Title.empty();
      // Meal2IMG.empty();
      // Meal2TitleModal.empty();
      // Meal2Instructions.empty();
      // Meal2IMGModal.empty();
      // Meal2Ingredients.empty();

      // Meal3Title.empty();
      // Meal3IMG.empty();
      // Meal3TitleModal.empty();
      // Meal3Instructions.empty();
      // Meal3IMGModal.empty();
      // Meal3Ingredients.empty();

      // Meal4Title.empty();
      // Meal4IMG.empty();
      // Meal4TitleModal.empty();
      // Meal4Instructions.empty();
      // Meal4IMGModal.empty();
      // Meal4Ingredients.empty();

      getMeal1();
      // getMeal2();
      // getMeal3();
      // getMeal4();
  });

  getMeal1();
  // getMeal2();
  // getMeal3();
  // getMeal4();
});
