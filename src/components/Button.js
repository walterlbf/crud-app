import React from 'react'

export default function Button() {

     
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit');
    }

    return (
        <>
           <button type='submit'>Criar Tarefa</button>
        </>
    )
}
