const INITIAL_STATE = {
    list: [],
};

export const itemReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
    case 'ADD_ITEM':
            return {
                ...state,
                list: [...state.list, action.payload.item],
            };
    case 'DELETE_ITEM':
            return {
                ...state,
                list: [...state.list.filter(({ id }) => id !== action.payload)],
            }
    default:
        return state;
    }
}


