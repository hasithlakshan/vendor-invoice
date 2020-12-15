import React from "react"
import { PropTypes } from "prop-types"
import "./ToggleSwitch.scss"

export class ToggleSwitch extends React.PureComponent {
    state = {
        checked: false
    }

    handleClick = (event) => {
        if (!this.props.disabled) {
            this.setState(prevState => ({
                checked: !prevState.checked
            }), () => this.props.onChange(this.props.name,this.state.checked))
        }
    }

    render = () => {
        const { checked, checkedChild, label, uncheckedChild, disabled } = this.props
console.log("checked", checked)
        return (

            <div className={["wrapper", disabled].join(" ")}>
                { label && <label>{label}</label> }
                <div className="toggle">
                    <span className={["uncheckedChild",  !checked ? "active" : ""].join(" ")}>{uncheckedChild}</span>
                    <div className={["toggleComponent", checked ? "active" : ""].join(" ")} onClick={this.handleClick}>
                        <div className="toggleButton" />
                    </div>
                    <span className={["checkedChild", checked ? "active" : ""].join(" ")}>{checkedChild}</span>
                </div>
            </div>
        )
    }
}

ToggleSwitch.defaultProps = {
    disabled: false,
    label: ""
}

ToggleSwitch.propTypes = {
    checked: PropTypes.bool.isRequired,
    checkedChild: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    uncheckedChild: PropTypes.string.isRequired
}
