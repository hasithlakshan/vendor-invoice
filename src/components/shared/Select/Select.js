import React, { memo, useCallback, useState } from "react"
import PropTypes from "prop-types"
import { Select as AntSelect } from "antd"
import "./Select.stylesheet.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import fontawesome from "@fortawesome/fontawesome"
import faChevronDown from "@fortawesome/fontawesome-free-solid/faChevronDown"
fontawesome.library.add(
    faChevronDown
)
const { Option: AntOption } = AntSelect



const Select = memo((
    {
        data,
        name,
        onChange = () => { /* Nothing here */ },
        onFocus = () => { /* Nothing here */ },
        onBlur = () => { /* Nothing here */ },
        options = [],
        containerClassName = "",
        labelClassName = "",
        labelContainerClassName = "",
        requiredLabelClassname = "",
        selectClassname = "",
        errorMsg = "",
        label = "",
        required = false,
        isInvalid = false,
        errorClassName = "",
        ...props
    }) => {

    const [isFocused, setIsFocused] = useState(false)

    const _handleOnChange = useCallback((value) => {
        if (data) onChange(value, name, false, data)
        else onChange(value, name, false)
    }, [])

    const _handleFocus = useCallback(() => {
        setIsFocused(true)
        if (onFocus) onFocus()
    }, [setIsFocused])

    const _handleBlur = useCallback(() => {
        setIsFocused(false)
        if (onBlur) onBlur()
    }, [setIsFocused])

    return (
        <div className={["select-container ", (isInvalid && !isFocused) ? "select-container--invalid" : "", containerClassName].join(" ")}>
            { (label || required) ? (
                <div className={["label-container", labelContainerClassName].join(" ")}>
                    {label ? <label className={["label", labelClassName].join(" ")}>{label}</label> : null}{ required ? <label className={["required-label", requiredLabelClassname].join(" ")}>*</label> : null }
                </div>
            ) : null }
            <AntSelect onBlur={_handleBlur} onFocus={_handleFocus} className={["list", selectClassname].join(" ")} onChange={_handleOnChange} {...props} suffixIcon={<FontAwesomeIcon className="download-icon" icon={faChevronDown}/>} >
                { options.map(({ label: labelText, value }) => <AntOption  key={value} value={value}>{ labelText }</AntOption>) }
            </AntSelect>
            { isInvalid && !isFocused ? <span className={["error", errorClassName].join(" ")}>{ errorMsg }</span> : null }
        </div>
    )
})

Select.propTypes = {
    onChange: PropTypes.func,
    name: PropTypes.string,
    data: PropTypes.any,
    required: PropTypes.bool,
    isInvalid: PropTypes.bool,
    errorMsg: PropTypes.string,
    label: PropTypes.string,
    labelClassName: PropTypes.string,
    requiredLabelClassname: PropTypes.string,
    labelContainerClassName: PropTypes.string,
    containerClassName: PropTypes.string,
    errorClassName: PropTypes.string,
    selectClassname: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    options: PropTypes.array.isRequired
}

export default Select
