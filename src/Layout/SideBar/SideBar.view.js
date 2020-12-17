import React, { PureComponent, memo } from "react"
import "./sideBar.stylesheet.scss"
import SideBarItemView from "./SideBarItem.view"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import fontawesome from "@fortawesome/fontawesome"
import faAngleDoubleLeft from "@fortawesome/fontawesome-free-solid/faAngleDoubleLeft"
import faAngleDoubleRight from "@fortawesome/fontawesome-free-solid/faAngleDoubleRight"
import faHome from "@fortawesome/fontawesome-free-solid/faHome"
import faPlusSquare from "@fortawesome/fontawesome-free-solid/faPlusSquare"
fontawesome.library.add(
    faAngleDoubleLeft,
    faHome,
    faAngleDoubleRight
)

const SideBarView = memo(({ selectedTab, onClick, sideBarWrap, isWrapSideBar }) => (
            <div className={ isWrapSideBar ? "sidebar-main-container-close sidebar-main-container" : "sidebar-main-container" }>
                <div className="sidebar-top" />
                <div className="sidebar-header">
                    <div className={ isWrapSideBar ? "close-header" : null } >Sample kitchen</div>
                    <FontAwesomeIcon className="left-angle-arrow" icon={ isWrapSideBar ? faAngleDoubleRight : faAngleDoubleLeft } onClick={sideBarWrap}/>
                </div>
                <SideBarItemView
                    icon={faHome}
                    name="Home"
                    id="dashboard"
                    selectedTab={selectedTab}
                    onClick={onClick}
                    isWrapSideBar={isWrapSideBar}
                />
                <SideBarItemView
                    icon={faPlusSquare}
                    name="Add Party"
                    id="addParty"
                    selectedTab={selectedTab}
                    onClick={onClick}
                    isWrapSideBar={isWrapSideBar}
                />
            </div>
))
export default SideBarView
