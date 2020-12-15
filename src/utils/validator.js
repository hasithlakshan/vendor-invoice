import validate from "validate.js"
import addParty from "./validatorRules/addParty"

const rules = {
    ...addParty
}

const validator = (fieldName, value) => {
    const formValues = {}
    const formFields = {}
    formValues[fieldName] = value
    formFields[fieldName] = rules[fieldName]
    const result = validate(formValues, formFields)
    if (result) {
        return result[fieldName][0]
    }
    return null
}

validate.validators.optionalEmail = (value) => {
    if (value === "") {
        return null
    }
    return validate.single(value, { email: true })
}

export default validator
