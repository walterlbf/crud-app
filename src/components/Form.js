import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItemToList } from '../actions';
import * as Api from '../services/Api';

// butao adcionar a lista
// remover com Remover e digite com D maiusculo
// regex nos inputs (/[^a-z0-9]+/gi)

function Form ({ addItem, listItems }) {
    
    // let nextId = listItems[listItems.length - 1].id + 1;
    const [item, setItem] = useState({
        id: 3,
        item: '',
        update: false,
    })

    
    const handleChange = ({target: {value, id}}) => {
        console.log(item.id);
        setItem({
            ...item,
            [id]: value,
        });
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
                placeholder={item.item.length <= 0 ? 'digite seu item' : ' '}
                onChange={handleChange}
            />
            <button
                type='submit'
                disabled={item.item.length <= 0 || (/[^a-z0-9]+/gi).test(item.item)}
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
