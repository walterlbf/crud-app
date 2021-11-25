export const addItemToList = (item) => ({
    type: 'ADD_ITEM',
    payload: {
        item,
    }
});

export const deleteItem = (id) => ({
    type: 'DELETE_ITEM',
    payload: {
        id,
    }
});

export const updateItem = ({id, update}) => ({
    type: 'UPDATE_ITEM',
    payload: {
        id,
        update,
    }
});


// exportfunction requestCurrency() {
//     return {
//       type: 'REQUEST_CURRENCY',
//     };
// }
