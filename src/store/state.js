export const initialState = {
    recipes: [
        {
            'id': 1,
            'title': 'Pasta Bolognese',
            'instruction': 'Lorem Ipsum',
            'ingredients': [
                {
                    'ingredient_id': 3,
                    'amount': '100',
                    'quantifier': 'g'
                },
                {
                    'ingredient_id': 1,
                    'amount': '200',
                    'quantifier': 'g'
                },
                {
                    'ingredient_id': 4,
                    'amount': '1',
                    'quantifier': 'tspn'
                }
            ]
        }, {
            'id': 2,
            'title': 'Goulash',
            'instruction': 'Lorem Ipsum',
            'ingredients': [
                {
                    'ingredient_id': 2,
                    'amount': '200',
                    'quantifier': 'g'
                },
                {
                    'ingredient_id': 1,
                    'amount': '200',
                    'quantifier': 'g'
                }
            ]
        }, {
            'id': 3,
            'title': 'Pasta Bolognese',
            'instruction': 'Lorem Ipsum',
            'ingredients': [
                {
                    'ingredient': 'pasta',
                    'amount': '100',
                    'quantifier': 'g'
                },
                {
                    'ingredient': 'tomatoes',
                    'amount': '200',
                    'quantifier': 'g'
                },
                {
                    'ingredient': 'oregano',
                    'amount': '1',
                    'quantifier': 'tspn'
                }
            ]
        }, {
            'id': 4,
            'title': 'Goulash',
            'instruction': 'Lorem Ipsum',
            'ingredients': [
                {
                    'ingredient_id': 2,
                    'amount': '200',
                    'quantifier': 'g'
                },
                {
                    'ingredient_id': 1,
                    'amount': '200',
                    'quantifier': 'g'
                }
            ]
        }


    ],
    recipeIngredients: [
        {
            'id': 1,
            'ingredient': 'tomatoes'
        },
        {
            'id': 2,
            'ingredient': 'beef'
        },
        {
            'id': 3,
            'ingredient': 'pasta'
        },
        {
            'id': 4,
            'ingredient': 'oregano'
        }
    ],
    userIngredients: []
}