import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteItem, updateItem } from '../actions';


class Item extends Component {
    render() {
        const { item, toDelete, toUpdate} = this.props
        console.log(this.props.item.id);
        return (
            <>
                <p>{item.item}</p>
                <button onClick={() => toUpdate(item)}>Editar</button>
                <button onClick={() => toDelete(item.id)}>remover</button>  
            </>
        )
    }
    }

const mapDispatchToProps = (dispatch) => ({
    toDelete: (id)=> dispatch(deleteItem(id)),
    toUpdate: (id) => dispatch(updateItem(id)),
});

export default connect(null, mapDispatchToProps)(Item);