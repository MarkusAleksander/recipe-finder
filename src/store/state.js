export const initialState = {
    recipes: [
        {
            'id': 1,
            'title': 'Pasta Bolognese',
            'instruction': 'Lorem Ipsum',
            'ingredients': [
                {
                    'id': 3,
                    'amount': '100',
                    'quantifier': 'g'
                },
                {
                    'id': 1,
                    'amount': '200',
                    'quantifier': 'g'
                },
                {
                    'id': 4,
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
                    'id': 2,
                    'amount': '200',
                    'quantifier': 'g'
                },
                {
                    'id': 1,
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
                    'id': 3,
                    'amount': '100',
                    'quantifier': 'g'
                },
                {
                    'id': 1,
                    'amount': '200',
                    'quantifier': 'g'
                },
                {
                    'id': 4,
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
                    'id': 2,
                    'amount': '200',
                    'quantifier': 'g'
                },
                {
                    'id': 1,
                    'amount': '200',
                    'quantifier': 'g'
                }
            ]
        }
    ],
    recipeIngredients: [
        {
            'id': 1,
            'title': 'tomatoes'
        },
        {
            'id': 2,
            'title': 'beef'
        },
        {
            'id': 3,
            'title': 'pasta'
        },
        {
            'id': 4,
            'title': 'oregano'
        }
    ],
    quantifiers: [
        {
            'id': 'g',
            'title': 'grams',
        },
        {
            'id': 'kg',
            'title': 'kilograms',
        },
        {
            'id': 'ml',
            'title': 'millilitres'
        },
        {
            'id': 'tspn',
            'title': 'teaspoon'
        },
        {
            'id': 'tblspon',
            'title': 'tablespoon'
        }
    ],
    currentUserIngredient: {
        ingredient: '',
        quantity: 0,
        quantifier: ''
    },
    userIngredients: []
}