export const SET_REDIRECT_PATH = "SET_REDIRECT_PATH"
export const WRAP_SIDE_BAR = "WRAP_SIDE_BAR"
export const addRedirectPath = (path, selectedTab) => ({
    type: SET_REDIRECT_PATH,
    path,
    selectedTab
})

export const wrapSideBar = (isWrapSideBar) => ({
    type: WRAP_SIDE_BAR,
    isWrapSideBar
})
