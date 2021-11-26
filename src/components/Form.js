import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItemToList } from '../actions';
import * as Api from '../services/Api';

// butao adcionar a lista
// remover com Remover e digite com D maiusculo
// regex nos inputs (/[^a-z0-9]+/gi)

function Form ({ addItem, listItems }) {
    console.log(listItems.length)
    const inicitalInput = {
        id: listItems.length,
        item: '',
        update: false,
    }

    const [item, setItem] = useState(inicitalInput)

    const handleChange = ({target: {value, id}}) => {
        console.log(item);
        setItem({
            ...item,
            [id]: value,
        });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setItem((prev) => ({ 
            id: prev.id + 1,
            item: inicitalInput.item,
            update: inicitalInput.update
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
