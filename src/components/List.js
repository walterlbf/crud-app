import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteItem } from '../actions';
import * as Api from '../services/Api';

class List extends Component {
    render() {



        const { listItems, toDelete } = this.props;
        return (
            <>
                <h3>Lista de Itens</h3>

                {listItems.map((item, index) =>
                    <li key={index}>
                        {item.item}
                        <button>Editar</button>
                        <button onClick={() => toDelete(item.id)}>remover</button>
                    </li>)
                }
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    listItems: state.itemsList.list,
});

const mapDispatchToProps = (dispatch) => ({
    toDelete: (id)=> dispatch(deleteItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
