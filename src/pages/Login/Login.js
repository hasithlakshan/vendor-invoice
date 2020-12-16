import React, { PureComponent } from "react"
import "./login.stylesheet.scss"
import { fetchToken } from "./login.Action"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { addRedirectPath } from "../../actions/appRoutAction"
const QRCode = require('qrcode.react')

class Login extends PureComponent{
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const { fetchToken } = this.props
        fetchToken()
        setTimeout(this.redirectDashboard, 5000)
    }
    redirectDashboard = () => {
        const { addRedirectPath } = this.props
        addRedirectPath("/dashboard", "dashboard")

    }
    render() {
        const { path } = this.props
        return <div className="login-container">
            <Redirect to={path} />
            <div className="qr-container">
                <QRCode
                    value={JSON.stringify({token: "12345677767677777777"})}
                    className = "qr-code"
                />
            </div>

        </div>
    }

}
const mapStateToProps = ({appRoute}) => ({
    path: appRoute.path
})

const mapDispatchToProps = (dispatch) => ({
    fetchToken: () => dispatch(fetchToken()),
    addRedirectPath: (path, selectedTab) => dispatch(addRedirectPath(path, selectedTab))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)
