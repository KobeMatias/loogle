$(document).ready(function () {

  var Meal1Title= $("#meal1Title");
  var Meal1IMG= $("#meal1img");
  var Meal1TitleModal= $("#meal1TitleModal");
  var Meal1Instructions= $("#meal1Instructions");
  var Meal1IMGModal= $("#meal1modalimg");
  var Meal1Ingredients= $("#meal1Ingredients");

function getMeal1 () {
  var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken&apikey=1";

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
  //second meal
  var Meal2Title= $("#meal2Title");
  var Meal2IMG= $("#meal2img");
  var Meal2TitleModal= $("#meal2TitleModal");
  var Meal2Instructions= $("#meal2Instructions");
  var Meal2IMGModal= $("#meal2modalimg");
  var Meal2Ingredients= $("#meal2Ingredients");

function getMeal2 () {
  var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken&apikey=1";

      $.ajax({
      url: queryURL,
      method: "GET",
      }).then(function (response) {
          var meal=response.meals;
          console.log(meal);
          var randomMeal = meal[Math.floor(Math.random() * meal.length)];
          console.log(randomMeal);

          Meal2Title.text(randomMeal.strMeal);
          Meal2TitleModal.text(randomMeal.strMeal);
          
          var mealstrIMG= randomMeal.strMealThumb;
          console.log(randomMeal.strMealThumb);
          Meal2IMG.attr("src", mealstrIMG);
          Meal2IMGModal.attr("src", mealstrIMG);

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
              Meal2Ingredients.append(ingredient);
              k ++;
            }
            Meal2Instructions.text(food.strInstructions);
          })
      });
  };
  //meal 3
  var Meal3Title= $("#meal3Title");
  var Meal3IMG= $("#meal3img");
  var Meal3TitleModal= $("#meal3TitleModal");
  var Meal3Instructions= $("#meal3Instructions");
  var Meal3IMGModal= $("#meal3modalimg");
  var Meal3Ingredients= $("#meal3Ingredients");

function getMeal3 () {
  var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken&apikey=1";

      $.ajax({
      url: queryURL,
      method: "GET",
      }).then(function (response) {
          var meal=response.meals;
          console.log(meal);
          var randomMeal = meal[Math.floor(Math.random() * meal.length)];
          console.log(randomMeal);

          Meal3Title.text(randomMeal.strMeal);
          Meal3TitleModal.text(randomMeal.strMeal);
          
          var mealstrIMG= randomMeal.strMealThumb;
          console.log(randomMeal.strMealThumb);
          Meal3IMG.attr("src", mealstrIMG);
          Meal3IMGModal.attr("src", mealstrIMG);

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
              Meal3Ingredients.append(ingredient);
              k ++;
            }
            Meal3Instructions.text(food.strInstructions);
          })
      });
  };
  //meal 4
  var Meal4Title= $("#meal4Title");
  var Meal4IMG= $("#meal4img");
  var Meal4TitleModal= $("#meal4TitleModal");
  var Meal4Instructions= $("#meal4Instructions");
  var Meal4IMGModal= $("#meal4modalimg");
  var Meal4Ingredients= $("#meal4Ingredients");

function getMeal4() {
  var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken&apikey=1";

      $.ajax({
      url: queryURL,
      method: "GET",
      }).then(function (response) {
          var meal=response.meals;
          console.log(meal);
          var randomMeal = meal[Math.floor(Math.random() * meal.length)];
          console.log(randomMeal);

          Meal4Title.text(randomMeal.strMeal);
          Meal4TitleModal.text(randomMeal.strMeal);
          
          var mealstrIMG= randomMeal.strMealThumb;
          console.log(randomMeal.strMealThumb);
          Meal4IMG.attr("src", mealstrIMG);
          Meal4IMGModal.attr("src", mealstrIMG);

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
              Meal4Ingredients.append(ingredient);
              k ++;
            }
            Meal4Instructions.text(food.strInstructions);
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

      Meal2Title.empty();
      Meal2IMG.empty();
      Meal2TitleModal.empty();
      Meal2Instructions.empty();
      Meal2IMGModal.empty();
      Meal2Ingredients.empty();

      Meal3Title.empty();
      Meal3IMG.empty();
      Meal3TitleModal.empty();
      Meal3Instructions.empty();
      Meal3IMGModal.empty();
      Meal3Ingredients.empty();

      Meal4Title.empty();
      Meal4IMG.empty();
      Meal4TitleModal.empty();
      Meal4Instructions.empty();
      Meal4IMGModal.empty();
      Meal4Ingredients.empty();

      getMeal1();
      getMeal2();
      getMeal3();
      getMeal4();
  });

  getMeal1();
  getMeal2();
  getMeal3();
  getMeal4();
});
