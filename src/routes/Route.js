import React, { memo } from "react"
import { useSelector } from "react-redux"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"
import { Shared } from "../components"
import { getCurrentPath } from "../utils/domains"

const RouteWrapper = memo(({
    component: Component,
    hasLoader = false,
    ...rest
}) => {

    const isAuthenticated = true  //useSelector(state => state.session.isAuthenticated)

    /**
     * Redirect user to SignIn page if he tries to access a private route
     * without authentication.
     */
    // if (!isAuthenticated) {
    //     const path = getCurrentPath()
    //     const redirectPath = path !== "/" ? `/?destination=${path}` : path
    // }

    /**
     * Redirect user to Main page if he tries to access a non private route
     * (SignIn or SignUp) after being authenticated.
     */
    // if (isAuthenticated) {
    //     redirectPath = "/dashboard"
    // }

    /**
     * If not included on both previous cases, redirect user to the desired route.
     */
    return (
        <Shared.ErrorBoundary>
            {!isAuthenticated && <Redirect to='/' />}
            {/*{ hasLoader ? <NoeShared.Loader /> : null}*/}
            <Route {...rest} component={Component} />
        </Shared.ErrorBoundary>
    )
})

RouteWrapper.propTypes = {
    component: PropTypes.any.isRequired,
    isPrivate: PropTypes.bool,
    hasLoader: PropTypes.bool
}

export default RouteWrapper
