import React, { useState } from 'react'
import { connect } from 'react-redux';
import Item from './Item';
// import * as Api from '../services/Api';
import Edit from './Edit';
import {requestApi} from '../actions';

function List ({listItems}) {
    const [isFetching, setIsFetchin] = useState(false);
    const [saveApi, setSaveApi] = useState(listItems);
    // console.log(props);

    // componentDidMount(){
        
    // }

    return (
        <>
            <h3>Lista de Itens</h3>
                
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

// const mapDispatchToProps = (dispatch) => ({
//     requestApi: () => dispatch(requestApi()),
// })

export default connect(mapStateToProps, null)(List);
