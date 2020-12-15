import React, { PureComponent } from "react"
import HeaderView from "./Header.view"

class Header extends PureComponent{
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <HeaderView />
        )
    }

}
export default Header
