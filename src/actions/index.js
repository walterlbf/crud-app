const addItem = (item) => ({
    type: 'ADD_ITEM',
    payload: {
        item,
    }
})

export default addItem;