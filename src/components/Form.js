import React from 'react'
import Button from './Button'
import { useState } from 'react'

export default function Form() {

    const [tarefa, setTarefa] = useState({
        task:''
    });

    handleSubmit = (event) => {
        setTarefa()
    } 

    return (
        <form onSubmit='submit'>
            <input type='text' />
            <Button />
        </form>
    )
}
