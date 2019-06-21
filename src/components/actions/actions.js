import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAILURE = "FETCH_FRIENDS_FAILURE";

export const ADD_FRIEND = "ADD_FRIEND";
export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE";

export const login = creds => dispatch => {
  console.log(creds); //should show object
  // Login stuff goes here! LOGIN STUFF GOES HERE!
  dispatch({ type: LOGIN_START });

  return axios
    .post("http://localhost:5000/api/login", creds) //post takes 3 arguments but were not using 'header'
    .then(res => {
      localStorage
        .setItem("token", res.data.payload)
        .dispatch({ type: LOGIN_SUCCESS });
    }) //console.log(res) first to find the data your looking for
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: true });
    }); //console.log(err)
};
export const fetchFriends = () => dispatch => {
  // We gotta fetch our friends from the server!
};
export const addFriend = newFriend => dispatch => {
  // We need to make some new friends because maybe you and your friends will grow apart or maybe they'll move away!
};
