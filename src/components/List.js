import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteItem } from '../actions';
import Item from './Item';
import * as Api from '../services/Api';

class List extends Component {
    render() {

        const { listItems, toDelete } = this.props;
        return (
            <>
                <h3>Lista de Itens</h3>

                {listItems.map((item, index) => <Item key={index} item={item}/>)}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    listItems: state.itemsList.list,
});

// const mapDispatchToProps = (dispatch) => ({
//     toDelete: (id)=> dispatch(deleteItem(id)),
// });

export default connect(mapStateToProps, null)(List);
