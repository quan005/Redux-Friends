import axios from 'axios';

export const LOGGING_IN = 'LOGGING_IN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const GET_DATA_START = 'GET_DATA_START'
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const GET_DATA_FAILED = 'GET_DATA_FAILED'
export const ADDING_FRIEND = 'ADDING_FRIEND'
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS'
export const ADD_FRIEND_FAILED = 'ADD_FRIEND_FAILED'
export const UPDATING_FRIEND = 'UPDATING_FRIEND'
export const UPDATE_FRIEND_SUCCESS = 'UPDATE_FRIEND_SUCCESS'
export const UPDATE_FRIEND_FAILED = 'UPDATE_FRIEND_FAILED'
export const DELETE_FRIEND = 'DELETE_FRIEND'
export const INPUT_HANDLER = 'INPUT_HANDLER'
export const CLEAR_INPUT = 'CLEAR_INPUT'



export function logIn(username, password) {
    return(dispatch) => {
        dispatch({type: LOGGING_IN})

        return axios
            .post("http://localhost:5000/api/login", {username, password})
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.payload)
                dispatch({type: LOGIN_SUCCESS})
            })
            .catch(err => {
                const payload = err.response ? err.response.data : err
                dispatch({ type: LOGIN_FAILED, payload})
            })
    }
}

export function getData() {
    return(dispatch) => {
        dispatch({type: GET_DATA_START})

        const headers = {
            Authorization: localStorage.getItem('token')
        }

        axios
            .get("http://localhost:5000/api/friends", {headers})
            .then(res => {
                dispatch({
                    type: GET_DATA_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_DATA_FAILED,
                    payload: err
                })
            })
    }
}

export function addFriend(newFriend) {
    return(dispatch) => {
        dispatch({type: ADDING_FRIEND})

        const headers = {
            Authorization: localStorage.getItem('token')
        }

        axios
            .post("http://localhost:5000/api/friends", {headers}, (newFriend))
            .then(res => {
                dispatch({
                    type: ADD_FRIEND_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: ADD_FRIEND_FAILED,
                    payload: err
                })
            })
    }
}

export function deleteFriend(event) {
    return(dispatch) => {
        axios
            .post(`http://localhost:5000/api/friends/${event.target.id}`)
            .then(res => {
                dispatch({
                    type: DELETE_FRIEND,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_DATA_FAILED,
                    payload: err
                })
            })
    }
}

export function updateFriend(id, name, age, email) {
    return(dispatch) => {
        dispatch({type: UPDATING_FRIEND})

        const headers = {
            Authorization: localStorage.getItem('token')
        }

        axios
            .put(`http://localhost:5000/api/friends/${id}`, {headers}, {
                name,
                age,
                email
            })
            .then(res => {
                dispatch({
                    type: UPDATE_FRIEND_SUCCESS,
                    payload: res
                })
            })
            .catch(err => {
                dispatch({
                    type: UPDATE_FRIEND_FAILED,
                    payload: err
                })
            })
    }
}

export function inputHandler(event) {
    return {
        type: INPUT_HANDLER,
        inputText: event.target.value
    }
}

export function clearInput() {
    return {
        type: CLEAR_INPUT,
        inputText: ''
    }
}