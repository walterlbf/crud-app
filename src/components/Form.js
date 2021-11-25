import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItemToList } from '../actions';
import * as Api from '../services/Api';

function Form ({ addItem }) {
    const inicitalInput = {
        id: 0,
        item: '',
        update: false,
    }

    const [item, setItem] = useState(inicitalInput)
    const [isFetching, setIsFetchin] = useState(false);

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
                placeholder={item.item.length <= 0 ? 'digite para acionar o botão' : ' '}
                onChange={handleChange}
            />
            <button
                type='submit'
                disabled={item.item.length <= 0}
            >
                Adcionar Item
            </button>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItemToList(item)),
});

export default connect(null, mapDispatchToProps)(Form);
