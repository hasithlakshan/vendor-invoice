export const SET_REDIRECT_PATH = "SET_REDIRECT_PATH"
export const addRedirectPath = (path, selectedTab) => ({
    type: SET_REDIRECT_PATH,
    path,
    selectedTab
})
