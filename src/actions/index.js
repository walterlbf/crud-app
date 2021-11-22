const addItemToList = (item) => ({
    type: 'ADD_ITEM',
    payload: {
        item,
    }
})

function requestCurrency() {
    return {
      type: 'REQUEST_CURRENCY',
    };
}

export default addItemToList;