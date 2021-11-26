import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItemToList } from '../actions';
import * as Api from '../services/Api';

function Form ({ addItem, listItems }) {
    
    const [item, setItem] = useState({
        id: 0,
        item: '',
        update: false,
    })

    const handleChange = ({target: {value, id}}) => {
        console.log(item.id);
        let newId = listItems[listItems.length -1].id + 1;

        console.log(newId)

        setItem({
            ...item,
            id: newId,
            [id]: value,
        });
        console.log(item.id);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setItem((prev) => ({ 
            id: prev.id + 1,
            item: '',
            update: false,
        }));

        addItem(item);
        Api.createItem(item);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                id='item'
                value={item.item}
                placeholder={item.item.length <= 0 ? 'digite seu item' : ' '}
                onChange={handleChange}
            />
            <button
                type='submit'
                disabled={item.item.length <= 0}
            >
                Adicionar Item
            </button>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItemToList(item)),
});

const mapStateToProps = (state) => ({
    listItems: state.itemsList.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
