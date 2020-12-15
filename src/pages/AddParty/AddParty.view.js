import React, { memo } from "react"
import "./addParty.stylesheet.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import fontawesome from "@fortawesome/fontawesome"
import faArrowDown from "@fortawesome/fontawesome-free-solid/faArrowDown"
import { Shared } from "../../components"
import { DatePicker, Button } from 'antd'
import moment from "moment"
fontawesome.library.add(
    faArrowDown
)


const AddPartyView = memo(({userTitleOptions, onChange, handleOnSelect, onDateChange, fields, onToggleChange, handleOnSubmit, cancel}) =>(
    <div className="add-party-main-container">

        <div className="selected-party-container">
            <div className="form-group">
                <Shared.Select
                    containerClassName=""
                    label="Select Part"
                    options={userTitleOptions}
                    isInvalid={fields.addPartySelectedParty.error}
                    errorMsg={fields.addPartySelectedParty.error}
                    name="addPartySelectedParty"
                    onChange={handleOnSelect}
                    required
                    defaultValue="Select Party"
                />
            </div>
            <div className="form-group">
                <Shared.Select
                    containerClassName=""
                    label="Select Entry Category"
                    options={userTitleOptions}
                    isInvalid={fields.addPartySelectedEntryCategory.error}
                    errorMsg={fields.addPartySelectedEntryCategory.error}
                    name="addPartySelectedEntryCategory"
                    onChange={handleOnSelect}
                    required
                    defaultValue="Select Account Type"
                />
            </div>

        </div>
        <div className="selected-party-container">
            <div className="form-group">
                <Shared.TextInput
                    name="addPartyEnterParticulars"
                    label=""
                    inputClassname="user-create-container__content__fields-column__input"
                    isInvalid={fields.addPartyEnterParticulars.error}
                    errorMsg={fields.addPartyEnterParticulars.error}
                    onChange={onChange}
                    // required
                    placeholder="Enter Particulars"
                    value={fields.addPartyEnterParticulars.value}
                />
            </div>
            <div className="form-group">
                <Shared.TextInput
                    name="addPartyAmount"
                    label=""
                    inputClassname="user-create-container__content__fields-column__input"
                    isInvalid={fields.addPartyAmount.error}
                    errorMsg={fields.addPartyAmount.error}
                    onChange={onChange}
                    // required
                    placeholder="Enter amount*"
                    value={fields.addPartyAmount.value}
                />
            </div>
            <div className="add-party-selected-container">
                <div className="calender-wrapper">
                    <DatePicker
                        className={"calender-component"}
                        onChange={onDateChange}
                        name="addPartyDate"
                        value={fields.addPartyDate.value ? moment(fields.addPartyDate.value) : ""}
                    />
                    <span className={"error-calender"}>{fields.addPartyDate.error}</span>
                </div>
                <Shared.ToggleSwitch
                    checked={fields.addPartyAmountType.value}
                    checkedChild="Credit"
                    disabled={false}
                    label=""
                    onChange={onToggleChange}
                    uncheckedChild="Debit"
                    name="addPartyAmountType"
                />
            </div>
        </div>
        <div className="button-group">
            <Button className="cancel" onClick={cancel}>Cancel</Button>
            <Button className="save" onClick={handleOnSubmit}>Save</Button>
        </div>
    </div>
))
export default AddPartyView
