import { appRoutAction } from "../actions"
const initialState = {
    path: "/",
    selectedTab: null,
    isWrapSideBar: false
}
const appRoute = (state = initialState, action) => {
    switch (action.type) {
        case appRoutAction.SET_REDIRECT_PATH:
            return {
                ...state,
                path: action.path,
                selectedTab:  action.selectedTab,
            }
        case appRoutAction.WRAP_SIDE_BAR:
            return {
                ...state,
                isWrapSideBar: action.isWrapSideBar
            }
        default:
           return state
    }

}
export default appRoute
