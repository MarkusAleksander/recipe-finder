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
                return recipe.ingredients.every((l) => {
                    return ingredients.indexOf(l) >= 0;
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
                return ingredients.some(function (v) {
                    return recipe.ingredients.indexOf(v) >= 0;
                });
            })()) {
                return cb();
            }
        }
    }
];

export default searchModes;