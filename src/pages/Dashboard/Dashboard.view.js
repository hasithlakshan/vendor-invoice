import React, { PureComponent, memo } from "react"
import "./dashboard.stylesheet.scss"
import {Button, Row} from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import fontawesome from "@fortawesome/fontawesome"
import faDownload from "@fortawesome/fontawesome-free-solid/faDownload"
import faPaperclip from "@fortawesome/fontawesome-free-solid/faPaperclip"
import faThumbsUp from "@fortawesome/fontawesome-free-solid/faThumbsUp"
import { Shared } from "../../components"
fontawesome.library.add(
    faDownload,
    faPaperclip,
    faThumbsUp
)
const DashboardView = memo(({data, columns, printRecept}) =>(
    <div className="main-container">
        <Row className="title-bar">
            <div className="title">Amount details</div>
            <div className="icon-section">
                <FontAwesomeIcon className="download-icon" icon={faDownload}/>
                <FontAwesomeIcon className="attach-icon" icon={faPaperclip}/>
            </div>
        </Row>
        <Row>
            <Shared.Table data={data} columns={columns} className="table"/>
        </Row>
        <Row className="button-section" onClick={printRecept}>

            <span className="pdf-button"><FontAwesomeIcon className="like-icon" icon={faThumbsUp}/>PDF</span>
        </Row>
    </div>
))
export default DashboardView
