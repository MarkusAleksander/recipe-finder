const searchModes = [
    {
        'mode': 'all',
        'fn': function (recipe, ingredients, cb) {
            return cb();
        }
    },
    {
        'mode': 'exact',
        'fn': function (recipe, ingredients, cb) {
            if ((() => {
                // Go through each ingredient in the recipe
                return recipe.ingredients.every((l) => {
                    // Check in the user ingredients..
                    return ingredients.some((el) => {
                        // That we have a matching ingredient
                        return Object.keys(el).every((k) => {
                            if (k === 'id') return true;
                            // Return result of existence and comparison
                            return l[k] && l[k] === el[k];
                        });
                    });
                });
            })()) {
                return cb();
            }
        },
    },
    {
        'mode': 'some',
        'fn': function (recipe, ingredients, cb) {
            if ((() => {
                // Go through each ingredient in our list
                return ingredients.some(function (l) {
                    // Check each ingredient in the recipe...
                    return recipe.ingredients.some(el => {
                        // that we have a matching ingredient in our list
                        return Object.keys(l).every((k) => {
                            if (k === 'id') return true;
                            // Return result of existence and comparison
                            return el[k] && el[k] === l[k];
                        });
                    });
                });
            })()) {
                return cb();
            }
        }
    }
];

export default searchModes;