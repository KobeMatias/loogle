

$(document).ready(function(){
    $(".Vodka").on("click", function () {
        var liquor = $(this).val();
        var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + liquor + "&apikey=1";
        
        $.ajax({
            url: queryURL,
            method: "GET"
            
            }).then(function(response){
                var drinks = getRandomDrinks(response);
                    for (var i = 0; i < drinks.length; i++) {
                        console.log(drinks[i].idDrink);
                        var drinkId = drinks[i].idDrink;
                        var queryURL2 = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list" + drinkId+ "&apikey=1";
                        $.ajax({
                            url: queryURL2,
                            method: "GET"
                        }).then(function(response) {
                            console.log(response);
                        })

                        //$('#drinks').append(`
                            //<p>${drinks[i].idDrink}</p>
                        //`);
                    }
                    // var drinkId = (response.drinks.idDrink);
                    //     console.log(response.drinks[0].idDrink);

                    //     var queryURL2 = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list" + response.idDrink + "&apikey=1";
                    //     $.ajax({
                    //         url: queryURL2,
                    //         method: "GET"
                    //     }).then(function(response){
                    //         console.log(response);
                    //     })
        })

    
       
    });

    $(".Gin").on("click", function () {
        var liquor = $(this).val();
        var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + liquor + "&apikey=1";
        $.ajax({
            url: queryURL,
            method: "GET"
            
            })
            .then(function(response){
                var drinks = getRandomDrinks(response);
                    for (var i = 0; i < drinks.length; i++) {
                        $('#drinks').append(`
                            <p>${drinks[i].strDrink}</p>
                        `);
                    }
        })
    });

    $(".Tequila").on("click", function () {
        var liquor = $(this).val();
        var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + liquor + "&apikey=1";
        $.ajax({
            url: queryURL,
            method: "GET"
            
            })
            .then(function(response){
                var drinks = getRandomDrinks(response);
                    for (var i = 0; i < drinks.length; i++) {
                        $('#drinks').append(`
                            <p>${drinks[i].strDrink}</p>
                        `);
                    }
        })
    });

    $(".Rum").on("click", function () {
        var liquor = $(this).val();
        var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + liquor + "&apikey=1";
        $.ajax({
            url: queryURL,
            method: "GET"
            
            })
            .then(function(response){
                    
                    var drinks = getRandomDrinks(response);
                    for (var i = 0; i < drinks.length; i++) {
                        $('#drinks').append(`
                            <p>${drinks[i].strDrink}</p>
                        `);
                    }
            })
    });

})

function getRandomDrinks(response) {
var randomDrinks = [];
for (var i = 0; i < 1; i++) {
    randomDrinks.push(response.drinks[Math.floor(Math.random() * response.drinks.length)]);
}
console.log(randomDrinks)
return randomDrinks;
}



