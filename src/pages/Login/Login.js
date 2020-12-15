import React, { PureComponent } from "react"
import "./login.stylesheet.scss"
import { fetchToken } from "./login.Action"
import { connect } from "react-redux"
const QRCode = require('qrcode.react')

class Login extends PureComponent{
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const { fetchToken } = this.props
        fetchToken()
    }

    render() {
        return <div className="login-container">
            <div className="qr-container">
                <QRCode
                    value={JSON.stringify({token: "12345677767677777777"})}
                    className = "qr-code"
                />
            </div>

        </div>
    }

}
const mapStateToProps = ({}) => ({

})

const mapDispatchToProps = (dispatch) => ({
    fetchToken: () => dispatch(fetchToken())
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)
