import React, { PureComponent } from "react"
import { connect } from "react-redux"
import SideBarView from "./SideBar.view"
import { addRedirectPath, wrapSideBar } from "../../actions/appRoutAction"
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

    sideBarWrap = () => {
        const { isWrapSideBar, wrapSideBar } = this.props
        wrapSideBar(!isWrapSideBar)
    }

    get generateProps(){
        const { selectedTab, isWrapSideBar } = this.props
        return {
            selectedTab: selectedTab,
            onClick: this.onClick,
            sideBarWrap: this.sideBarWrap,
            isWrapSideBar
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
    selectedTab: appRoute.selectedTab,
    isWrapSideBar: appRoute.isWrapSideBar
})
const mapDispatchToProps = (dispatch) => ({
    addRedirectPath: (path, selectedTab) => dispatch(addRedirectPath(path, selectedTab)),
    wrapSideBar: (isWrapSideBar) => dispatch(wrapSideBar(isWrapSideBar))
})
export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
