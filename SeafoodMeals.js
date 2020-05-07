$(document).ready(function () {
    function getMeal1 () {
      var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood &apikey=1";
  //     var globalMeals=[];
  //     var randomMeal= globalMeals[Math.floor(Math.random() * globalMeals.length)];
  // console.log("this is the random meal" + randomMeal);
  // var globalMeals=[];
  
      $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        console.log(response);
      var Meals= response.meals;  
      var randomMeal=response.meals[Math.floor(Math.random() *Meals.length)]
         var mealImg= response.meals[0].strMealThumb;
         console.log(mealImg);
        var mealId= response.meals[0].stridMeal;
        var mealTitle= response.meals[0].strMeal;
        $("#meal1Title").text(mealTitle);
        var imageEl = $("<img>");
        imageEl.attr("src", mealImg);
        $("#meal1img").append(imageEl);
      });
    };
    getMeal1();
  });
  //need second api for full description by ID https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealId