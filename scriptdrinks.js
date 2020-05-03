

$(document).ready(function(){
    $("#get-drinks").on("click",function () {
        var drinks = [];

        for (var i = 1; i <= 3; i++) {
            drinks.push(
                $.ajax({
                    url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
                    method: "GET",
                }),
            );

            $('#drink0').html('');
            $('#drink1').html('');
            $('#drink2').html('');
        }

        Promise.all(drinks)
            .then(function(responses) {
                for (var j = 0; j < responses.length; j++) {
                    var drink = responses[j].drinks[0];
                    console.log(drink);

                    $('#drink' + j).append('<p><strong>Name: ' + drink.strDrink + '</strong></p>');
                    $('#drink' + j).append('<h3>Ingredients</h3>');

                    var k = 1;
                    while (drink['strIngredient' + k] != null) {
                        console.log(drink['strIngredient' + k])
                        $('#drink' + j).append('<p>' + drink['strIngredient' + k] + '</p>');
                        k ++;
                    }

                    $('#drink' + j).append('<p>Instructions: ' + drink.strInstructions + '</p>');
                }
                drinks = [];
            });
    });
})





