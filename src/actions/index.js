import * as Api from '../services/Api';

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

export const saveEdit = ({id, item, update}) => ({
    type: 'SAVE_EDIT',
    payload: {
        id,
        item,
        update,
    }
});

const requestApi = () => ({
    type: 'REQUEST_API',
});

const responseApi = (items) => ({
    type: 'RESPONSE_API',
    payload: {
        items,
    }
})

export function fetchCurr() {
    return async (dispatch) => {
        dispatch(requestApi());
        const response = await Api.getItems();
        return dispatch(responseApi(response));
    };
    
}