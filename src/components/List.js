import React from 'react';
import * as Api from '../services/Api';
import { useEffect, useState } from 'react';

export default function List() {

    const [list, setList] = useState([]);

    useEffect(() => {
        fetchApi();
    });

    const fetchApi = async () => {
        const allItems = await Api.getItems();
        setList(allItems);
        console.log(list);
    }
    
    return (
        <>
            <h3>Lista de Itens</h3>

            {list.map((item, index) => <li key={index}>{item.item}</li>)}
        </>
    )
}
