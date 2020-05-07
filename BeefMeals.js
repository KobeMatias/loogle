$(document).ready(function () {

    var Meal1Title= $("#meal1TItle");
    var Meal1IMG= $("#meal1IMG");
    var Meal1TitleModal= $("#meal1TItleModal");
    var Meal1Instruction= $("#meal1Instructions");
    var Meal1IMGModal= $("#meal1IMGModal");
    var Meal1Ingredients= $("#meal1Ingredients");

  function getMeal1 () {
    var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef&apikey=1";

        $.ajax({
        url: queryURL,
        method: "GET",
        }).then(function (response) {
            var meal=response.meals;
      console.log(meal);
      meal[Math.floor(Math.random() * meal.length)];
      for (var i=1; i<=4; i++){
            Meal1Title.text(meal.strMeal);
            Mral1TItleModal.text(meal.strMeal);
//is a while loop needed?
            var mealstrIMG= meal.strMealThumb;
            Meal1IMG.attr("src", mealstrIMG);
            Meal1IMGModal.attr("src", mealstrIMG);
            var mealId= response.meals[0].stridMeal;

            // $.ajax({
            //     url: "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealId,
            //     methond: "GET",
            // }).then(function(response){
            //     var Meal1Ingredients= $("#meal1Ingredients");
            //     meal=response.meals[0]
            //     Meal1Ingredients.text(meal.strIngredient);

            // });
        });
  
    
       
    }
    getMeal1();
      
 
});
