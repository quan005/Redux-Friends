import React from 'react'
import { connect } from 'react-redux'
import {updateFriend} from '../actions'

class UpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updateFriend: {
                name: '',
                age: '',
                email: ''
            }
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
        const id = this.props.id
        const {name, age, email} = this.state.updateFriend
        this.props.updateFriend(id, name, age, email)
    }

    render() {

        return (
            <div className={this.props.showUpdate === true ? 'update-form-container' : 'hidden'}>
                <form onSubmit={() => this.updateFriend()}>
                    <div className="wrap-input85 rs1-wrap-input85">
                            <input className="input100" type="text" name="name" value={this.state.updateFriend.name} onChange={this.inputHandler} placeholder="Update Name" />
                            <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input85 rs1-wrap-input85">
                            <input className="input100" type="number" name="age" value={this.state.updateFriend.age} onChange={this.inputHandler} placeholder="Update Age" />
                            <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input85 rs1-wrap-input85">
                            <input className="input100" type="email" name="email" value={this.state.updateFriend.email} onChange={this.inputHandler} placeholder="Update Email Address" />
                            <span className="focus-input100"></span>
                    </div>

                    <div className="button-container">
                        <button className="contact100-form-btn" type="submit">
                            Submit Updated Friend
                        </button>

                        <div className="cancel-btn" onClick={this.props.cancel}>
                            Cancel
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = {
    updateFriend
}

export default connect(
    null,
    mapDispatchToProps
)(UpdateForm)