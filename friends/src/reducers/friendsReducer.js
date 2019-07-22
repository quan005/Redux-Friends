import {
    LOGGING_IN,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    GET_DATA_START,
    GET_DATA_SUCCESS,
    GET_DATA_FAILED,
    ADDING_FRIEND,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_FAILED,
    UPDATING_FRIEND,
    UPDATE_FRIEND_SUCCESS,
    UPDATE_FRIEND_FAILED,
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
              friends: action.payload
            }
        }

        case GET_DATA_FAILED: {
            return {
              ...state,
              fetchingFriends: false,
              error: action.payload
            }
        }

        case ADDING_FRIEND: {
            return {
              ...state,
              addingFriend: true
            }
        }

        case ADD_FRIEND_SUCCESS: {
            return {
              ...state,
              addingFriend: false,
              friends: action.payload
            }
        }

        case ADD_FRIEND_FAILED: {
            return {
              ...state,
              addingFriend: false,
              error: action.payload
            }
        }

        case UPDATING_FRIEND: {
          return {
            ...state,
            updatingFriend: true
          }
      }

        case UPDATE_FRIEND_SUCCESS: {
            return {
              ...state,
              updatingFriend: false,
              friends: action.payload,
              error: null,
            }
        }

        case UPDATE_FRIEND_FAILED: {
            return {
              ...state,
              updatingFriend: false,
              error: action.payload
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
  