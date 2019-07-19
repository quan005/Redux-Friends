import React from 'react'
import {Route, Redirect} from 'react-router-dom'

export default function(props) {
    const {component: Component, ...rest} = props
    return(
        <Route {...rest} render={() => {
            const token = localStorage.getItem('token')
            
            return token ? <component /> : <Redirect to="/login" />
        }} />
    )
}