import {
    LOGGING_IN,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    GET_DATA_START,
    GET_DATA_SUCCESS,
    GET_DATA_FAILED,
    ADD_FRIEND,
    UPDATE_FRIEND,
    DELETE_FRIEND,
    INPUT_HANDLER,
    CLEAR_INPUT
} from "../actions";

const initialState = {
    friends: [],
    inputText: '',
    deletingFriend: false,
    fetchingFriends: false,
    loggingIn: false,
    addingFriend: false,
    updatingFriend: false,
    error: null,
    updatedFriend: {
        id: null,
        name: '',
        age: '',
        email: ''
    }
};

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOGGING_IN: {
            return {
              ...state,
              loggingIn: true,
            }
        }

        case LOGIN_SUCCESS: {
            return {
              ...state,
              loggingIn: false,
              error: null,
            }
        }

        case LOGIN_FAILED: {
            return {
              ...state,
              loggingIn: false,
              error: action.payload.message,
            }
        }

        case GET_DATA_START: {
            return {
              ...state,
              fetchingFriends: true
            }
        }

        case GET_DATA_SUCCESS: {
            return {
              ...state,
              fetchingFriends: false,
              friends: action.payload,
              error: null,
            }
        }

        case GET_DATA_FAILED: {
            return {
              ...state,
              fetchingFriends: false,
              error: action.payload
            }
        }

        case ADD_FRIEND: {
            const newFriend = state.friends;
            return {
              ...state,
              fetchingFriends: false,
              error: null,
              friends: newFriend.push(action.payload)
            }
        }

        case UPDATE_FRIEND: {
            return {
              ...state,
              friends: action.payload,
              fetchingFriends: false,
              error: null,
            }
        }

        case DELETE_FRIEND: {
            return {
              ...state,
              fetchingFriends: false,
              error: null,
            }
        }

        case INPUT_HANDLER: {
            return {
              ...state,
              inputText: action.inputText
            }
        }

        case CLEAR_INPUT: {
            return {
              ...state,
              inputText: ''
            }
        }
  
        default:
            return state;
    }
};
  