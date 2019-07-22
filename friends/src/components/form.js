import React from 'react';
import { connect } from 'react-redux'
import {addFriend} from '../actions'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    Friend = event => {
        event.preventDefault();
        const [name, age, email] = [
            this.state.name, 
            Number(this.state.age),
            this.state.email
        ]
        this.props.addFriend({name, age, email});
        this.setState({name: '', age: '', email: ''})
    }

    handleChange = event => {
        event.preventDefault();

        this.setState({ 
            ...this.state, 
            [event.target.name]: event.target.value})
    }

    render() {

        return(
            <div className={this.props.hide === true ? 'hidden' : 'form-container'}>
                <form onSubmit={this.Friend}>
                    <div className="wrap-input100 rs1-wrap-input100">
                        <span className="label-input100">Your Name</span>
                        <input className="input100" type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Enter your name" />
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 rs1-wrap-input100">
                        <span className="label-input100">Your Age</span>
                        <input className="input100" type="number" name="age" value={this.state.age} onChange={this.handleChange} placeholder="Enter your age" />
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 rs1-wrap-input100">
                        <span className="label-input100">Your Email</span>
                        <input className="input100" type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter your email addess" />
                        <span className="focus-input100"></span>
                    </div>

                    <div className="container-contact100-form-btn">
                        <button className="contact100-form-btn" type="submit">
                            Add Friend
                        </button>
                    </div>
                </form>
            </div>
        );
    }
};

const mapDispatchToProps = {
    addFriend
}

const mapStateToProps = state => ({
    friends: state.friendsReducer.friends
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Form)