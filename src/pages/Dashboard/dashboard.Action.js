export const FETCH_PARTY_DETAILS_REQUEST = "FETCH_PARTY_DETAILS_REQUEST"
export const FETCH_PARTY_DETAILS_SUCCESS = "FETCH_PARTY_DETAILS_SUCCESS"
export const FETCH_PARTY_DETAILS_FAILURE = "FETCH_PARTY_DETAILS_FAILURE"

export const fetchPartyDetailsRequest = () => ({
    type: FETCH_PARTY_DETAILS_REQUEST
})
export const fetchPartyDetailsSuccess = (parties) => ({
    type: FETCH_PARTY_DETAILS_SUCCESS,
    parties
})
export const fetchPartyDetailsFailure = (e) => ({
    type: FETCH_PARTY_DETAILS_FAILURE
})

export const fetchParties = (parties) => async(dispatch, getState) => {
    dispatch(fetchPartyDetailsRequest())
    try {

        dispatch(fetchPartyDetailsSuccess(parties))
    }
    catch (e) {
        dispatch(fetchPartyDetailsFailure(e))
    }


}
