import React, { PureComponent, memo } from "react"
import "./sideBar.stylesheet.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const SideBarItemView = memo(({name, icon, selectedTab, id, onClick, isWrapSideBar}) =>(
    <div id={id} className={selectedTab === id ? "sidebar-item-main-container selected-tab" : "sidebar-item-main-container"} onClick={onClick}>
        <FontAwesomeIcon className="icon" icon={icon} onClick={onClick} id={id}/>
        <div className="name" onClick={onClick} id={id}>{isWrapSideBar ? "" : name}</div>
    </div>
))
export default SideBarItemView
