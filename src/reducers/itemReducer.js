const INITIAL_STATE = {
    list: [],
};

export const itemReducer = (state = INITIAL_STATE, action) => {
    console.log(action);

    switch (action.type){
    case 'ADD_ITEM':
        return {
            ...state,
            list: [...state.list, action.payload.item],
        };
    case 'DELETE_ITEM':
        return {
            ...state,
            list: [...state.list.filter(({ id }) => id !== action.payload.id)],
        }
    case 'UPDATE_ITEM':
        return {
            ...state,
        }
    default:
        return state;
    }
}


