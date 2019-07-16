import React, { useState } from 'react'
import BasicInfo from './BasicInfo';



const UserForm = () => {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        image: '',
        city: '',
        initials: '',
        occupation: '',
        step: 1
    });

    const handleChange = val => event => {
        setFormState({...formState, [val]: event.target.value})
    }
    return (
        <div>
            <BasicInfo formState={formState} handleChange={handleChange}/>
        </div>
    )
}

export default UserForm
