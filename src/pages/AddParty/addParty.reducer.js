import * as actions from "./addParty.Action"
const initialState = {
    addPartyIsLoading: false,
    addPartyInitialLoading: true,
    addedParty: {}
}
const AddedParty = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_PARTY_REQUEST:
            return {
                ...state,
                addPartyIsLoading: false,
                addPartyInitialLoading: true,
            }
        case actions.ADD_PARTY_SUCCESS:{
            const { party } = action
            return {
                addPartyIsLoading: false,
                addPartyInitialLoading: false,
                addedParty: party
            }
        }
        case actions.ADD_PARTY_FAILURE:
            return {
                ...state,
                addPartyIsLoading: false,
                addPartyInitialLoading: false,
            }
        default:
            return state
    }

}
export default AddedParty
