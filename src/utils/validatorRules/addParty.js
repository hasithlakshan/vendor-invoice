const addParty = {
    addPartyEnterParticulars: {
        presence: {
            allowEmpty: false,
            message: "^Please enter the particulars"
        }
    },
    addPartyAmount: {
        presence: {
            allowEmpty: false,
            message: "^Please enter the amount"
        },
        format: {
            pattern: /^\d+(\.\d{1,2})?$/,
            flags: "i",
            message: "^Please enter the valid amount"
        }
    },
    addPartyDate: {
        presence: {
            allowEmpty: false,
            message: "^Please enter the Date"
        }
    },
    addPartySelectedParty: {
        presence: {
            allowEmpty: false,
            message: "^Please select Party"
        }
    },
    addPartySelectedEntryCategory: {
        presence: {
            allowEmpty: false,
            message: "^Please select the Category"
        }
    }
}

export default addParty
