import React, { PureComponent } from "react"
import { connect } from "react-redux"
import SideBarView from "./SideBar.view"
import { addRedirectPath } from "../../actions/appRoutAction"
import {
    Redirect
} from "react-router-dom";
class SideBar extends PureComponent{
    constructor(props) {
        super(props)
    }

    onClick = (event) => {
        const { addRedirectPath, path } = this.props
        const {id} = event.target
        addRedirectPath("/"+id, id)
        return <Redirect to={path} />

    }

    get generateProps(){
        const { selectedTab } = this.props
        return {
            selectedTab: selectedTab,
            onClick: this.onClick
        }

    }

    render() {
        const { path, selectedTab } = this.props
        return(
            <>
                <Redirect to={path} />
                <SideBarView {...this.generateProps} />
            </>
        )
    }

}
const mapStateToProps = ({ appRoute }) => ({
    path: appRoute.path,
    selectedTab: appRoute.selectedTab
})
const mapDispatchToProps = (dispatch) => ({
    addRedirectPath: (path, selectedTab) => dispatch(addRedirectPath(path, selectedTab))
})
export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
