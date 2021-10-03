import React from 'react'
import UseForm from './UseForm'
import Validate from './Validation'
import Footer from './Footer'

const FormSignUp = ({submitForm}) => {
    const{handleChange, values, handleSubmit, errors} = UseForm(submitForm, Validate)
    return (
        <div className="form">
        <h1>
            Recruitment Portal
        </h1>
        <form onSubmit={handleSubmit}>
            <label For="name">Name:</label>
            <input type="text" name="fullName" value = {values.fullName} onChange = {handleChange} placeholder="Enter full name"/>
            {errors.fullName && <p className="warning">{errors.fullName}</p>}
            <label For="name">Email:</label>
            <input type="email" name="email" placeholder="Enter your email" value = {values.email} onChange = {handleChange}/>
            {errors.email && <p className="warning">{errors.email}</p>}


            <label For="name">Mobile</label>
            <input type="text" name="mobile" placeholder="Enter your mobile no_" value = {values.mobile} onChange = {handleChange} />
            {errors.mobile && <p className="warning">{errors.mobile}</p>}

            <label For="name">Date Of Birth:</label>
            <input type="date" name="dateOfBirth" placeholder="Enter your Date of birth" value = {values.dateOfBirth} onChange = {handleChange}/>
            {errors.dateOfBirth && <p className="warning">{errors.dateOfBirth}</p>}


            <label For="name">State Of Origin:</label>
            <input type="text" name="StateOfOrigin" placeholder="Enter your state of origin" value = {values.StateOfOrigin} onChange = {handleChange}/>
            {errors.StateOfOrigin && <p className="warning">{errors.StateOfOrigin}</p>}

            <select name="gender" value = {values.gender} onChange = {handleChange}>
                <option>---  Gender ---</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            {errors.gender && <p className="warning">{errors.gender}</p>}

            <label For="name">Years of Experience:</label>
            <select name="experience" value = {values.experience} onChange = {handleChange}>
                <option>---  0 ---</option>
                <option value="male">1-3</option>
                <option value="female">3-5</option>
                <option value="female">above 5</option>
            </select>
            {errors.gender && <p className="warning">{errors.gender}</p>}
            
            <label For="">marital Status:</label>
            <input type="radio" name="yes" id=""/> Married
            <input type="radio" name="yes" id=""/> Single  

            <label For="name">House No_ / Address:</label>
            <input type="text" name="HouseNo" placeholder="Enter your Address" value = {values.HouseNo} onChange = {handleChange}/>
            {errors.HouseNo && <p className="warning">{errors.HouseNo}</p>}

            <label For="name">State of Residence:</label>
            <input type="text" name="city" placeholder="Enter your State of Residence" value = {values.city} onChange = {handleChange}/>
            {errors.city && <p className="warning">{errors.city}</p>}

            <label For="name">Country</label>
            <input type="text" name="country" placeholder="Enter your Country" value = {values.country} onChange = {handleChange}/>
            {errors.country && <p className="warning">{errors.country}</p>}


            <label For="name">Educational Background</label>
            <select name="education" value = {values.education} onChange = {handleChange}>
                <option>---none---</option>
                <option value="OND">OND</option>
                <option value="SSCE">SSCE</option>
                <option value="Vocational Training">Vocational Training</option>
                <option value="Primary Education">Primary Education</option>
                <option value="Other">Other</option>
            </select>
            {errors.education && <p className="warning">{errors.education}</p>}

            <label For="">Do you Have a valid Driver's License</label>
            <input type="radio" name="license" id=""/> yes
            <input type="radio" name="license" id="" /> No

            <label For="resume">Resume*</label>
            <input type="file" name="resume" id="" placeholder="Browse" value = {values.resume} onChange = {handleChange}/>
            {errors.resume && <p className="warning">{errors.resume}</p>}

            <label For=""> Why do you think you are a Good fit for this job</label>
            <textarea name="comment" id="" cols="30" rows="10"></textarea>

            <input type="submit" name="btn-submit" value="Submit"  />






        </form>
        <Footer/>
    </div>

    )
}

export default FormSignUp
