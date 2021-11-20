import React from 'react';
import * as Api from '../services/Api';
import { useEffect } from 'react';

export default function List() {


    useEffect(() => {
        fetchApi();
    })

    const fetchApi = async () => {
        const allItems = await Api.getItems();
        console.log(allItems);
    }
    
    return (
        <div>
            <p>Lista de Itens</p>
        </div>
    )
}
