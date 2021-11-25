import React, { Component } from 'react'
import { connect } from 'react-redux';
import Item from './Item';
import * as Api from '../services/Api';
import Edit from './Edit';

class List extends Component {
    render() {

        const { listItems } = this.props;
        
        return (
            <>
                <h3>Lista de Itens</h3>

                {listItems.map((item, index) =>(
                    <div key={index}>
                        {item.update ? <Edit key={index} item={item}/> : <Item key={index} item={item}/>}
                    </div>    
                ))}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    listItems: state.itemsList.list,
});

export default connect(mapStateToProps, null)(List);
