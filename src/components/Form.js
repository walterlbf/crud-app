import React from 'react'
import Button from './Button'
import { useState } from 'react'

export default function Form() {

    const [tarefa, setTarefa] = useState({
        task:''
    });

    const handleChange = ({target: {value, id}}) => {
        setTarefa({
            ...tarefa,
            [id]: value, 
        });
    } 
    console.log(tarefa);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' id='task' onChange={handleChange}/>
            <Button />
        </form>
    )
}
