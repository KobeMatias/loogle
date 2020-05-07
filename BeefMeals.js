$(document).ready(function () {
  function getMeal1 () {
    var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef&apikey=1";
    var globalMeals=[];
//     var randomMeal= globalMeals[Math.floor(Math.random() * globalMeals.length)];
// console.log("this is the random meal" + randomMeal);
for (var i=1; i<=4; i++){
    globalMeals.push(
        $.ajax({
        url: queryURL,
        method: "GET",
        }),
    );

    $("#mealButton1").html('');
    $("#mealButton2").html('');
    $("#mealButton3").html('');
    $("#mealButton4").html('');

}

Promise.all(globalMeals)
    .then(function (responses) {
      console.log(responses);
        for(var k=0; k<responses.length; k++) {
            var Meals= responses[k].globalMeals[0];
            console.log(Meals);
            var mealImg= response.meals[0].strMealThumb;
        }
  
    // var globalMeals=[];
    //    var randomMeal= globalMeals[Math.floor(Math.random() * globalMeals.length)];
    //    console.log("this is the random meal" + randomMeal);
       
       
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