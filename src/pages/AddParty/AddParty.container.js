import React, { PureComponent } from "react"
import AddPartyView from "./AddParty.view"
import validator from "../../utils/validator"
import { addParty } from "./addParty.Action"
import { connect } from "react-redux"
import { addRedirectPath } from "../../actions/appRoutAction"

class AddParty extends PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            fields: {
                addPartySelectedParty: {
                    value: "",
                    error: null
                },
                addPartySelectedEntryCategory: {
                    value: "",
                    error: null
                },
                addPartyEnterParticulars: {
                    value: "",
                    error: null
                },
                addPartyAmount: {
                    value: "",
                    error: null
                },
                addPartyDate: {
                    value: "",
                    error: null
                },
                addPartyAmountType: {
                    value: false,
                    error: null
                }
            }
        }
    }

    get generateProps(){
        const { fields } = this.state
        return {
            userTitleOptions: this.userTitleOptions,
            onChange: this.onChange,
            handleOnSelect: this.handleOnSelect,
            onDateChange: this.onDateChange,
            onToggleChange: this.onToggleChange,
            fields: fields,
            handleOnSubmit: this.handleOnSubmit,
            cancel: this.cancel
        }
    }
    get userTitleOptions() {

        return [{label: "dummy 1", value: "dummy1"}, {label: "dummy 2", value: "dummy2"}, {label: "dummy 3", value: "dummy3"}]
    }
    onChange = (value, name) => {
        const error = validator(name, value)
        const { fields } = this.state
        this.setState({
            fields: {
                ...fields,
                [name]: {
                    value: error ? fields[name].value : value,
                    error: error
                }
            }
        })}
    onToggleChange = (name, value) => {
        const { fields } = this.state
        this.setState({
            fields: {
                ...fields,
                [name]: {
                    value:!value,
                    error: null
                }
            }
        })}
    handleOnSelect = (value, name) => {
        const { fields } = this.state
        this.setState({
            fields: {
                ...fields,
                [name]: {
                    value,
                    error: null
                }
            }
        })
    }
    onDateChange = (moment, date) => {
        const { fields } = this.state
        this.setState({
            fields: {
                ...fields,
                addPartyDate: {
                    value: date,
                    error: null
                }
            }
        })
    }
    _validate = () => {
        const { fields } = this.state
        let newState = Object.create({})
        const errors = Object
            .keys(fields)
            .map(fieldName => {
                const error = validator(fieldName, fields[fieldName].value)
                newState = {
                    ...newState,
                    fields: {
                        ...newState.fields,
                        [fieldName]: {
                            ...fields[fieldName],
                            error
                        }
                    }
                }
                return error
            })
            .filter(error => Boolean(error))
        if (errors.length) {
            this.setState({ fields: newState.fields })
        }
        return !errors.length
    }
    handleOnSubmit = () => {
        const { fields } = this.state
        const { addParty, addRedirectPath } = this.props
        const isValidated = this._validate()
        if(isValidated){
            const fieldData = Object.keys(fields)
                .map(fieldName => ({ [fieldName]: fields[fieldName].value }))
                .reduce((accumulator, currentValue) => ({ ...accumulator, ...currentValue }))
            const {
                addPartySelectedParty: part,
                addPartySelectedEntryCategory: category,
                addPartyEnterParticulars: particulars,
                addPartyAmount: amount,
                addPartyDate: date,
                addPartyAmountType: amountType
            } = fieldData
            const data = { part, category, particulars, date, credit: amountType ? amount : 0, debit: amountType ? 0 : amount }
            addParty(data)
            addRedirectPath("/dashboard", "dashboard")
        }
    }

    cancel = () => {
        this.setState({
            fields: {
                addPartySelectedParty: {
                    value: "",
                    error: null
                },
                addPartySelectedEntryCategory: {
                    value: "",
                    error: null
                },
                addPartyEnterParticulars: {
                    value: "",
                    error: null
                },
                addPartyAmount: {
                    value: "",
                    error: null
                },
                addPartyDate: {
                    value: "",
                    error: null
                },
                addPartyAmountType: {
                    value: false,
                    error: null
                }
            }
        })
    }

    render() {
        return <AddPartyView { ...this.generateProps} />
    }

}
const mapStateToProps = ({}) => ({

})

const mapDispatchToProps = (dispatch) => ({
    addRedirectPath: (path, selectedTab) => dispatch(addRedirectPath(path, selectedTab)),
    addParty: (party) => dispatch(addParty(party))
})
export default connect(mapStateToProps, mapDispatchToProps)(AddParty)
