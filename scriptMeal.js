$(document).ready(function(){ 
$(".meals").on("click", function(){

    var meals = $(this).val();
    meals= 
    var queryURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + meals + "&apikey=1";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response){
        console.log(response);
        var meals = response.meals;
        for (var i=0; i<meals.length;i++) {

            var mealId= meals[i].idMeal;
            let mealName = meals[i].strMeal;
            var queryURL2 =
        }
    })
});

})

