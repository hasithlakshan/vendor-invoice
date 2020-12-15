import { fetchPartyDetailsSuccess } from "../Dashboard/dashboard.Action"
export const ADD_PARTY_REQUEST = "ADD_PARTY_REQUEST"
export const ADD_PARTY_SUCCESS = "ADD_PARTY_SUCCESS"
export const ADD_PARTY_FAILURE = "ADD_PARTY_FAILURE"

export const addPartyRequest = () => ({
    type: ADD_PARTY_REQUEST
})
export const addPartySuccess = (party) => ({
    type: ADD_PARTY_SUCCESS,
    party
})
export const addPartyFailure = (e) => ({
    type: ADD_PARTY_FAILURE
})

export const addParty = (party) => async(dispatch, getState) => {
    dispatch(addPartyRequest())
    try {

        dispatch(addPartySuccess(party))
        dispatch(fetchPartyDetailsSuccess(party))

    }
    catch (e) {
        dispatch(addPartyFailure(e))
    }


}
