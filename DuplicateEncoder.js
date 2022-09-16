function cakes(recipe, available) {
    console.table( recipe )
    console.table( available );
    console.log( recipe);
}
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 