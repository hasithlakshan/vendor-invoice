import React, { PureComponent, memo } from "react"
import "./sideBar.stylesheet.scss"
import SideBarItemView from "./SideBarItem.view"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import fontawesome from "@fortawesome/fontawesome"
import faAngleDoubleLeft from "@fortawesome/fontawesome-free-solid/faAngleDoubleLeft"
import faHome from "@fortawesome/fontawesome-free-solid/faHome"
import faPlusSquare from "@fortawesome/fontawesome-free-solid/faPlusSquare"
fontawesome.library.add(
    faAngleDoubleLeft,
    faHome
)

const SideBarView = memo(({ selectedTab, onClick }) => (
            <div className="sidebar-main-container">
                <div className="sidebar-top" />
                <div className="sidebar-header">
                    <div>Sample kitchen</div>
                    <FontAwesomeIcon className="left-angle-arrow" icon={faAngleDoubleLeft} />
                </div>
                <SideBarItemView
                    icon={faHome}
                    name="Home"
                    id="dashboard"
                    selectedTab={selectedTab}
                    onClick={onClick}
                />
                <SideBarItemView
                    icon={faPlusSquare}
                    name="Add Party"
                    id="addParty"
                    selectedTab={selectedTab}
                    onClick={onClick}
                />
            </div>
))
export default SideBarView
