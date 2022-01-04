import axios from "axios";

export const loginAction = (login, password) => async (dispatch) => {

    let loginFetch = await axios({
        method: 'post',
        url: "https://dev-donkey-api.herokuapp.com/api/Accounts/login",
        data: {
            "email": login,
            "password": password
        }
    })
    dispatch({
        type: "LOGIN",
        payload: loginFetch.data.token,
    })
    sessionStorage.setItem('loginToken', loginFetch.data.token);
};