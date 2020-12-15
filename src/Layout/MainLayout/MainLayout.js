import React, { PureComponent } from "react"
import { Layout } from "antd"
import { connect } from "react-redux"

class MainLayout extends PureComponent {
    render() {
        return (
            <Layout style={{ minHeight: "100vh", display: "flex", flexDirection: "row" }} className="app-layout">
                { this.props.children }
            </Layout>
        )
    }
}
const mapStateToProps = () => ({

})
const mapDispatchToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)
