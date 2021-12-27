import axios from 'axios'

export const LoginAPI = (login, password) => {
    axios({
        method: 'post',
        url: 'https://dev-donkey-api.herokuapp.com/api/Accounts/login',
        data: {
            "email": login,
            "password": password
        }
    }).then(data => {
        sessionStorage.setItem('loginToken', data.data.token);
    }).catch(err => console.log(err))
}
