import React, { useState } from 'react'
import FormSignUp from './FormSignUp'
import FormSuccess from './FormSuccess'

const Form = () => {
    const[issubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }
    return (
        <div>
            {!issubmitted ? (<FormSignUp submitForm={submitForm}/>) : (<FormSuccess/>)}
        </div>
    )
}

export default Form
