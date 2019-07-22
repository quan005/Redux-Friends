import React from 'react'
import './App.css'
import {Route} from 'react-router-dom'

import FriendsListView from './views/FriendsListView'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'




class App extends React.Component {
    render() {
        return (
            <div className="app">
                <PrivateRoute exact path="/" component={FriendsListView} />
                <Route exact path="/login" component={Login} />
            </div>
        )
    }
}

export default App