import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../actions';


class Item extends Component {
    render() {
        const { item, toDelete} = this.props
        console.log(this.props.item);
        return (
            <div>
                <p key={item.id}>{item.item}</p>
                    <button>Editar</button>
                    <button onClick={() => toDelete(item.id)}>remover</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    toDelete: (id)=> dispatch(deleteItem(id)),
});

export default connect(null, mapDispatchToProps)(Item);