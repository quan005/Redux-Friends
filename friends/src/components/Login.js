import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logIn } from '../actions'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = event => {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        console.log(this.state)
        const {username, password} = this.state
        this.props.logIn(username, password)
            .then(() => {
                this.props.history.push('/')
            })
            .catch(err => {
                throw new Error(err)
            })
        
    }

    render() {
        const {username, password} = this.state
        const {loggingIn, error} = this.props

        return (
            <form onSubmit={this.handleSubmit}>
                {error && <p className="error">{error}</p>}

                <input type="text" name="username" placeholder="Enter Username" value={username} onChange={this.handleChange} />
                <br />
                <input type="password" name="password" placeholder="Enter Password" value={password} onChange={this.handleChange} />
                <br />

                {loggingIn ? <p>Logging In...</p> : <button type="submit">Login</button>}
            </form>
        )
    }
}

const mapDispatchToProps = {
    logIn
}

const mapStateToProps = state => ({
    loggingIn: state.loggingIn,
    error: state.error
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
) (Login))