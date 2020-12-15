import { combineReducers } from "redux"
import appRoute from "./app.reducer"
import { reducer as addParty } from "../pages/AddParty"
import { reducer as Dashboard } from "../pages/Dashboard"
import { reducer as Login } from "../pages/Login"

const rootReducer = combineReducers({
    appRoute,
    addParty,
    Dashboard,
    Login
})

export default rootReducer
