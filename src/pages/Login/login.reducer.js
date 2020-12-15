import * as actions from "./login.Action"
const initialState = {
    fetchTokenIsLoading: false,
    fetchTokenInitialLoading: true,
    token: null
}
const Login = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_TOKEN_REQUEST:
            return {
                ...state,
                fetchTokenIsLoading: true,
                fetchTokenInitialLoading: true,
            }
        case actions.FETCH_TOKEN_SUCCESS:{
            const { token } = action
            return {
                fetchTokenIsLoading: false,
                fetchTokenInitialLoading: false,
                token
            }
        }
        case actions.FETCH_TOKEN_FAILURE:
            return {
                ...state,
                fetchTokenIsLoading: false,
                fetchTokenInitialLoading: false,
            }
        default:
            return state
    }

}
export default Login
