export const addItemToList = (item) => ({
    type: 'ADD_ITEM',
    payload: {
        item,
    }
})

export const deleteItem = (id) => ({
    type: 'DELETE_ITEM',
    payload: {
        id,
    }
})

// exportfunction requestCurrency() {
//     return {
//       type: 'REQUEST_CURRENCY',
//     };
// }
