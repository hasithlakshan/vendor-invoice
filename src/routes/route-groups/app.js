import React from "react"
import { Dashboard, Login, AddParty } from "../../pages"
import {Header, SideBar} from "../../Layout"
import '../../designSystem.less'
import 'antd/dist/antd.css'
export default [
    {
        path: "/",
        exact: true,
        sidebar: (props) => null,
        main: (props) => <Login  {...props}/>,
        footer: () => null,
        header: () => null,
    },
    {
        path: "/dashboard",
        exact: true,
        sidebar: (props) => <SideBar {...props} />,
        main: (props) => <Dashboard {...props} />,
        header: (props) => <Header {...props} />,
    },
    {
        path: "/addParty",
        exact: true,
        sidebar: (props) => <SideBar {...props} />,
        main: (props) => <AddParty {...props} />,
        header: (props) => <Header {...props} />,
    },
]
