import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
// import * as Api from '../services/Api';
import Edit from './Edit';
import { fetchCurr } from '../actions';

function List (props) {
    
    const {fetchApi, listItems } = props;

    useEffect(() => {
        fetchApi();
    }, [fetchApi]);

    while(listItems.length === 0) return(
        <>
            <h1>carregando lista</h1>
        </>
    )

    return (
        <>
            <h3>Lista de Compras</h3>
                
                {listItems.map((item, index) => (
                <div key={index}>
                    {item.update ? <Edit key={index} item={item}/> : <Item key={index} item={item}/>}
                </div>    
            ))}
                
        </>
    )
}

const mapStateToProps = (state) => ({
    listItems: state.itemsList.list,
});

const mapDispatchtoProps = (dispatch) => ({
    fetchApi: () => dispatch(fetchCurr()),
});

export default connect(mapStateToProps, mapDispatchtoProps)(List);
