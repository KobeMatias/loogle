

$(document).ready(function(){

    var Drink1Title = $("#drink1Title");
    var Drink1IMG = $("#drink1IMG");
    var Drink1TitleModal = $("#drink1TitleModal");
    var Drink1IMGModal = $("#drink1IMGModal");
    var Drink1Instructions = $("#drink1Instructions");
    var Drink1Ingredients = $("#drink1Ingredients");

    function getDrinks1() {
        $.ajax({
            url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
            method: "GET",
            }).then(function(response) {
                var drink = response.drinks[0];
                console.log(drink);

                Drink1Title.text(drink.strDrink);
                Drink1TitleModal.text(drink.strDrink);
                    
                var k = 1;

                    while (drink['strIngredient' + k] != null) {
                        // console.log(drink['strIngredient' + k])
                        // console.log(stringredient);
                        var stringredient= drink['strIngredient' + k];
                        var ingredient = $("<p>").text(stringredient);
                        Drink1Ingredients.append(ingredient);

                        var strIMG = drink.strDrinkThumb;
                        Drink1IMG.attr("src", strIMG);
                        Drink1IMGModal.attr("src", strIMG);
                        k ++;
                    }
                Drink1Instructions.text(drink.strInstructions);
            });
    };

    var Drink2Title = $("#drink2Title");
    var Drink2IMG = $("#drink2IMG");
    var Drink2TitleModal = $("#drink2TitleModal");
    var Drink2IMGModal = $("#drink2IMGModal");
    var Drink2Instructions = $("#drink2Instructions");
    var Drink2Ingredients = $("#drink2Ingredients");

    function getDrinks2() {
        $.ajax({
            url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
            method: "GET",
            }).then(function(response) {
                var drink = response.drinks[0];
                console.log(drink);

                Drink2Title.text(drink.strDrink);
                Drink2TitleModal.text(drink.strDrink);
                    
                var k = 1;
                    while (drink['strIngredient' + k] != null) {
                        // console.log(drink['strIngredient' + k])
                        // console.log(stringredient);
                        var stringredient= drink['strIngredient' + k];
                        var ingredient = $("<p>").text(stringredient);
                        Drink2Ingredients.append(ingredient);

                        var strIMG = drink.strDrinkThumb;
                        Drink2IMG.attr("src", strIMG);
                        Drink2IMGModal.attr("src", strIMG);
                        k ++;
                    }
                Drink2Instructions.text(drink.strInstructions);
            });
    };
    var Drink3Title = $("#drink3Title");
    var Drink3IMG = $("#drink3IMG");
    var Drink3TitleModal = $("#drink3TitleModal");
    var Drink3IMGModal = $("#drink3IMGModal");
    var Drink3Instructions = $("#drink3Instructions");
    var Drink3Ingredients = $("#drink3Ingredients");
    function getDrinks3() {
        $.ajax({
            url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
            method: "GET",
            }).then(function(response) {
                var drink = response.drinks[0];
                console.log(drink);

                Drink3Title.text(drink.strDrink);
                Drink3TitleModal.text(drink.strDrink);
                    
                var k = 1;
                    while (drink['strIngredient' + k] != null) {
                        // console.log(drink['strIngredient' + k])
                        // console.log(stringredient);
                        var stringredient= drink['strIngredient' + k];
                        var ingredient = $("<p>").text(stringredient);
                        Drink3Ingredients.append(ingredient);

                        var strIMG = drink.strDrinkThumb;
                        Drink3IMG.attr("src", strIMG);
                        Drink3IMGModal.attr("src", strIMG);
                        k ++;
                    }
                Drink3Instructions.text(drink.strInstructions);
            });
    };

    $("#refreshdDrinkBtn").on("click", function() {
        Drink1Title.empty();
        Drink1IMG.empty();
        Drink1TitleModal.empty();
        Drink1IMGModal.empty();
        Drink1Instructions.empty();
        Drink1Ingredients.empty();

        Drink2Title.empty();
        Drink2IMG.empty();
        Drink2TitleModal.empty();
        Drink2IMGModal.empty();
        Drink2Instructions.empty();
        Drink3Ingredients.empty();

        Drink3Title.empty();
        Drink3IMG.empty();
        Drink3TitleModal.empty();
        Drink3IMGModal.empty();
        Drink3Instructions.empty();
        Drink3Ingredients.empty();

        getDrinks1();
        getDrinks2();
        getDrinks3();
    })

    getDrinks1();
    getDrinks2();
    getDrinks3();
})
