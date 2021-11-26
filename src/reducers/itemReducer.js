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
            list: [...state.list.filter(({ id }) => id !== action.payload.id)],
        }
    case 'UPDATE_ITEM':
        return {
            ...state,
            list: state.list.map((item) => item.id === action.payload.id ? 
                {   ...item,
                    update: !item.update,
                } : item 
            )
        }
    case 'SAVE_EDIT':
        return {
            list: state.list.map((item) => item.id === action.payload.id ? 
                {   ...item,
                    item: action.payload.item,
                    update: !action.payload.update,
                } : item
            )
        }
    case 'REQUEST_API':
        return {
            ...state,
        };
    case 'RESPONSE_API':
        return {
            ...state,
            list: action.payload.items,
        }
    default:
        return state;
    }
}
