const searchModes = [
    {
        'mode': 'all',
        'fn': function (recipe, ingredients, servings, cb) {
            return cb();
        }
    },
    {
        'mode': 'exact',
        'fn': function (recipe, ingredients, servings, cb) {
            if ((() => {
                // Go through each ingredient in the recipe
                return recipe.ingredients.every((recipe_ingredient) => {
                    // Check in the user ingredients..
                    return ingredients.some((user_ingredient) => {

                        /**
                         * Compare
                         * - Ingredient exists in the recipe
                         * - We have the correct quantifier for the ingredient TODO: Create function to cpmpare values
                         * - We have enough of the ingredient (for the amount of servings)
                         */
                        return (recipe_ingredient.ingredient === user_ingredient.ingredient) && (recipe_ingredient.quantifier === user_ingredient.quantifier) && ((Number(recipe_ingredient.amount) * servings) <= user_ingredient.amount);

                    });
                });
            })()) {
                return cb();
            }
        },
    },
    {
        'mode': 'some',
        'fn': function (recipe, ingredients, servings, cb) {
            if ((() => {
                // Go through each ingredient in our list
                return ingredients.some(function (user_ingredient) {
                    // Check each ingredient in the recipe...
                    return recipe.ingredients.some(recipe_ingredient => {

                        /**
                         * Compare
                         * - Ingredient exists in the recipe
                         * - We have the correct quantifier for the ingredient TODO: Create function to cpmpare values
                         * - We have enough of the ingredient (for the amount of servings)
                         */
                        return (recipe_ingredient.ingredient === user_ingredient.ingredient) && (recipe_ingredient.quantifier === user_ingredient.quantifier) && ((Number(recipe_ingredient.amount) * servings) <= user_ingredient.amount);

                    });
                });
            })()) {
                return cb();
            }
        }
    }
];

export default searchModes;