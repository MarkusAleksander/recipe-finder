const reducers = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.type
                }
            ]
        case 'REMOVE':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.type
                }
            ]
        default:
            return state
    }
}

export default reducers;