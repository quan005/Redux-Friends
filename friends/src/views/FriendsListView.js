import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { FriendsList } from '../components/FriendsList'
import { getData } from '../actions'
import Form from '../components/form';




class FriendsListView extends React.Component {

  componentDidMount() {
    this.props.getData();
  }

  logOut = (event) => {
      event.preventDefault();
      localStorage.removeItem('token');
      this.props.history.push('/login');
  }

  render() {
    if (this.props.fetchingFriends) {
      // return something here to indicate that you are fetching data
      return <p>Friends Loading...</p>
    }

    const friendsData = this.state.friends.map(friend =>(
        <FriendsList
           age={friend.age}
           email={friend.email}
           name={friend.name}
           id={friend.id}
           key={friend.id}
           friends={this.state.friends}
           delete={this.deleteFriend}
           friendUpdated={this.friendUpdated}
        />
    ))

    return (
        <div className="container">
            <h1>My Friends List</h1>
            
            <section className="friends-section">
                {friendsData}
            </section>

            <section className="add-friend-section">
                <Form
                    name={this.state.name}
                    age={this.state.age}
                    email={this.state.email}
                    addFriend={this.addFriend}
                    hide={this.state.hide}
                    id={this.state.friends.length + 1}
                />
            </section>

            <div className={this.state.hide === false ? 'hidden' : 'add-btn'}>
                <button className="contact100-form-btn" onClick={this.hide} >
                    Add Friend
                </button>
            </div>
        </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = (state) => {
  return {
    friends: state.friendsReducer.friends,
    fetchingFriends: state.friendsReducer.fetchingFriends
  }
}

const mapDispatchToProps = {
  getData: getData
}

export default withRouter(
    connect(
        /* mapStateToProps goes here */
        mapStateToProps,
        mapDispatchToProps
    )(FriendsListView)
)