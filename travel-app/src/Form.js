import React, { useState } from 'react';

function Form(props) {

    const [countriesTitle, setCountriesTitle] = useState('');

    const handleSubmit = e => {
        console.log('handleSubmit clicked')
        e.preventDefault()
        props.handleSubmit(countriesTitle)
        setCountriesTitle('')
    }

    const handleChange = e => {
        console.log('handleChange clicked');
        const title = e.target.value
        setCountriesTitle(title)
    };



    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor='countriesTitle'>Name</label>
            <input
            id={countriesTitle}
            type='text'
            value={countriesTitle}
            onChange={handleChange}
            />
            <input
            type='submit'
            value='Find Country Info'
            />
        </form>
        </>
    )
}

export default Form;