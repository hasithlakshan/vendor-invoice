import * as actions from "./dashboard.Action"
const initialState = {
    fetchPartiesIsLoading: false,
    fetchPartiesInitialLoading: true,
    parties: []
}
const Dashboard = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_PARTY_DETAILS_REQUEST:
            return {
                ...state,
                fetchPartiesIsLoading: true,
                fetchPartiesInitialLoading: true,
            }
        case actions.FETCH_PARTY_DETAILS_SUCCESS:{
            const { parties } = action
            return {
                fetchPartiesIsLoading: false,
                fetchPartiesInitialLoading: false,
                parties: [
                    ...state.parties,
                    parties
                ]
            }
        }
        case actions.FETCH_PARTY_DETAILS_FAILURE:
            return {
                ...state,
                fetchPartiesIsLoading: false,
                fetchPartiesInitialLoading: false,
            }
        default:
            return state
    }

}
export default Dashboard
