import {useEffect, useState } from 'react'

const UseForm = (callback, Validate) => {
    const [values, setValues] = useState({
        fullName: "",
        email: "",
        mobile: "",
        dateOfBirth: "",
        StateOfOrigin: "",
        gender: "",
        experience: "",
        maritalStatus: "",
        HouseNo: "",
        city: "",
        country: "",
        education: "",
        resume: ""
    })

    const [errors, setErrors] = useState({})

    const[isSubmitting, setIsSubmitting] = useState(false)
    const handleChange = (e) => {
        const {name, value} = e.target
        
        setValues({
            ...values,
            [name]: value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        setErrors(Validate(values ))

        setIsSubmitting(true)
    }

    useEffect(()=>{
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback()
        }
    },[errors, callback,isSubmitting])
    return { handleChange, values, handleSubmit, errors,}
}

export default UseForm
