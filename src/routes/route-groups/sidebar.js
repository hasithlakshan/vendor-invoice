import React from "react"
import { Dashboard, Login } from "../../pages"
import { SideBar, Header } from "../../Layout"

export default [
    {
        path: "/dashboard",
        exact: true,
        sidebar: (props) => <SideBar {...props} />,
        main: (props) => <Dashboard {...props} />,
        header: (props) => <Header {...props} />,
    }
]
