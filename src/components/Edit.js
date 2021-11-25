import React, { useState } from 'react';
import { connect } from 'react-redux';
import { saveEdit } from '../actions';

function Edit ({ saveEdit, item }) {
    const [editItem, setEditItem] = useState({
        id: item.id,
        item: item.item,
        update: item.update
    })

    const handleChange = ({target: {value, id}}) => {
        setEditItem({
            ...editItem,
            [id]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        saveEdit(editItem);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                id='item'
                value={editItem.item}
                onChange={handleChange}
            />

            <button
                type='submit'
                disabled={editItem.item.length <= 0}
            >
                Salvar
            </button>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => ({
    saveEdit: (item) => dispatch(saveEdit(item)),
});

export default connect(null, mapDispatchToProps)(Edit);
