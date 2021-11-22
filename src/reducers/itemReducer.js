const INITIAL_STATE = {
    list: [],
};

export const addItemList = (state = INITIAL_STATE, action) => {
    switch (action.type){
    case 'ADD_ITEM':
            return {
                ...state,
                list: [...state.list, action.payload.item],
            };
        default:
            return state;
    }
}
