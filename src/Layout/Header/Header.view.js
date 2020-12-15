import React, { memo } from "react"
import "./header.stylesheet.scss"
import fontawesome from "@fortawesome/fontawesome"
import faPlus from "@fortawesome/fontawesome-free-solid/faPlus"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
fontawesome.library.add(
    faPlus
)
const HeaderView = memo(({ }) => (
    <div className="mainContainer">
        <div className={"search-section"}>

        </div>
        <div className={"setting-section"}>
            <span className={"plus-icon-wrapper"}><FontAwesomeIcon className="plus-icon" icon={faPlus} /></span>
        </div>
    </div>
))
export default HeaderView
