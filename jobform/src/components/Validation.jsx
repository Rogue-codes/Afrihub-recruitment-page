export default function Validate(values){

    let errors = {}
    if (!values.fullName) {
        errors.fullName = "*Field can't be left empty"
    }

    if (!values.email) {
        errors.email = "*Field can't be left empty"
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "*Email is not valid"
    }

    if (!values.mobile) {
        errors.mobile = "*Field can't be left empty"
    }

    if (!values.dateOfBirth) {
        errors.dateOfBirth = "*Field can't be left empty"
    }

    if (!values.StateOfOrigin) {
        errors.StateOfOrigin = "*Field can't be left empty"
    }

    if (!values.gender) {
        errors.gender = "*Field can't be left empty"
    }

    if (!values.experience) {
        errors.experience = "*Field can't be left empty"
    }

    if (!values.HouseNo) {
        errors.HouseNo = "*Field can't be left empty"
    }

    if (!values.city) {
        errors.city = "*Field can't be left empty"
    }

    if (!values.country) {
        errors.country = "*Field can't be left empty"
    }

    if (!values.education) {
        errors.education = "*Field can't be left empty"
    }

    if (!values.resume) {
        errors.resume = "*Field can't be left empty"
    }

    return errors
}