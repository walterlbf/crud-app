import React from 'react'
import Button from './Button'
import { useState } from 'react'

export default function Form() {

    const [item, setItem] = useState({
        item:''
    });

    const handleChange = ({target: {value, id}}) => {
        setItem({
            ...item,
            [id]: value, 
        });
    } 
    console.log(item);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' id='item' onChange={handleChange}/>
            <Button />
        </form>
    )
}
