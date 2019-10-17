const initialState = {
    items: []
};
export const productReducer = (state = initialState, action) => {
        switch (action.type) {
            case 'FETCH_PRODUCTS':
                return {...state, items: action.payload}
              default:
                return state;
        }
}