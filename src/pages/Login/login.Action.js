import loginService from "../../Services/Login.service"
export const FETCH_TOKEN_REQUEST = "FETCH_TOKEN_REQUEST"
export const FETCH_TOKEN_SUCCESS = "FETCH_TOKEN_SUCCESS"
export const FETCH_TOKEN_FAILURE = "FETCH_TOKEN_FAILURE"

export const fetchTokenRequest = () => ({
    type: FETCH_TOKEN_REQUEST
})
export const fetchTokenSuccess = (token) => ({
    type: FETCH_TOKEN_SUCCESS,
    token
})
export const fetchTokenFailure = (e) => ({
    type: FETCH_TOKEN_FAILURE
})

export const fetchToken = () => async(dispatch, getState) => {
    dispatch(fetchTokenRequest())
    console.log("https://plappsupportfunctions.azurewebsites.net/api/getcodeforplweb?code=HKNdUaDMVFrM1ItIGz2vArxEXVHhSczqXpDvnJC7kHk2oOMXaNt5ew==>>>>>>")
    try {
        const data = loginService.getToken()
        console.log("data>>>>>>", data)
        dispatch(fetchTokenSuccess("token"))
    }
    catch (e) {
        console.log("filure>>>>>>>>>>>>>>>>")
        dispatch(fetchTokenFailure(e))
    }


}
