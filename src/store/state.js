import * as SEARCHTYPES from './search_types';

export const initialState = {
    recipes: [
        {
            'id': 1,
            'title': 'Pasta Bolognese',
            'instruction': 'Lorem Ipsum',
            'ingredients': [
                {
                    'id': 1,
                    'ingredient': 3,
                    'amount': 100,
                    'quantifier': 'g'
                },
                {
                    'id': 2,
                    'ingredient': 1,
                    'amount': 200,
                    'quantifier': 'g'
                },
                {
                    'id': 3,
                    'ingredient': 4,
                    'amount': 1,
                    'quantifier': 'tspn'
                }
            ]
        }, {
            'id': 2,
            'title': 'Goulash',
            'instruction': 'Lorem Ipsum',
            'ingredients': [
                {
                    'id': 1,
                    'ingredient': 2,
                    'amount': 200,
                    'quantifier': 'g'
                },
                {
                    'id': 2,
                    'ingredient': 1,
                    'amount': 200,
                    'quantifier': 'g'
                }
            ]
        }, {
            'id': 3,
            'title': 'Pasta Bolognese',
            'instruction': 'Lorem Ipsum',
            'ingredients': [
                {
                    'id': 1,
                    'ingredient': 3,
                    'amount': 100,
                    'quantifier': 'g'
                },
                {
                    'id': 2,
                    'ingredient': 1,
                    'amount': 200,
                    'quantifier': 'g'
                },
                {
                    'id': 3,
                    'ingredient': 4,
                    'amount': 1,
                    'quantifier': 'tspn'
                }
            ]
        }, {
            'id': 4,
            'title': 'Goulash',
            'instruction': 'Lorem Ipsum',
            'ingredients': [
                {
                    'id': 1,
                    'ingredient': 2,
                    'amount': 200,
                    'quantifier': 'g'
                },
                {
                    'id': 2,
                    'ingredient': 1,
                    'amount': 200,
                    'quantifier': 'g'
                }
            ]
        }
    ],
    ingredients: [
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
        id: 0,
        ingredient: 0,
        amount: 0,
        quantifier: ''
    },
    userIngredients: [],
    searchType: SEARCHTYPES.ALL
}