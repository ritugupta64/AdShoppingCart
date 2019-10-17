const initialState = {
    items: 1
};
export const IncrementReducer = (state = initialState, action) => {
        switch (action.type) {
            case 'INCREMENTED_ITEM':
                return {...state, items: action.payload}
                case 'DECREMENTED_ITEM':
                    return {...state, items: action.payload}   
              default:
                return state;
        }
}