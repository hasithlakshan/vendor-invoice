import React from "react"
import { Switch } from "react-router-dom"
import Route from "./Route"
import { Layout } from "antd"
import { Login } from "../pages"
import { MainLayout } from "../Layout"
import appRoutes from "./route-groups/app"
import sidebar from "./route-groups/sidebar"


const routes = appRoutes.concat(
    sidebar
)

export default function Routes() {
    return (
        <MainLayout>
                <Switch>
                    {routes.map((route, index) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            exact={route.exact}
                            component={route.sidebar}
                        />
                    ))}
                </Switch>
                <Layout style={{ width: "100%", display: "flex", flexDirection: "column" }} className="content-layout">
                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={route.path}
                                path={route.path}
                                exact={route.exact}
                                component={route.header}
                            />
                        ))}
                    </Switch>
                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={route.path}
                                path={route.path}
                                exact={route.exact}
                                hasLoader
                                component={route.main}
                            />
                        ))}
                        {/* redirect user to login page if route does not exist and user is not authenticated */}
                        <Route component={Login} />
                    </Switch>
                </Layout>
        </MainLayout>
    )
}
