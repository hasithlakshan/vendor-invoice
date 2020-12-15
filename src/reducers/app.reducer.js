import { appRoutAction } from "../actions"
const initialState = {
    path: "/dashboard",
    selectedTab: null
}
const appRoute = (state = initialState, action) => {
    switch (action.type) {
        case appRoutAction.SET_REDIRECT_PATH:
            return {
                ...state,
                path: action.path,
                selectedTab:  action.selectedTab,
            }
        default:
           return state
    }

}
export default appRoute
