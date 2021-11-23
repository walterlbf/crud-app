import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as Api from '../services/Api';

class List extends Component {
    render() {

        const { listItems } = this.props;
        return (
            <>
                <h3>Lista de Itens</h3>

                {listItems.map((item, index) =>
                    <li key={index}>
                        {item.item}
                        <button>Editar</button>
                        <button>remover</button>
                    </li>)
                }
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    listItems: state.itemListReducer.list,
});

export default connect(mapStateToProps)(List);
