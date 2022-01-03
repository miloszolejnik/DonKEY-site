import axios from 'axios'

const standardURL = "https://dev-donkey-api.herokuapp.com/api/"

// export const loginURL = standardURL + 'Accounts/login';
// export const getBlogsURL = standardURL + 'Blogs';

const token = sessionStorage.getItem('loginToken');
// export const LoginAPI = (login, password) => {
//     axios({
//         method: 'post',
//         url: standardURL + 'Accounts/login',
//         data: {
//             "email": login,
//             "password": password
//         }
//     })
// }
export const getBlogsApi = () => {
    axios({
        method: 'get',
        url: standardURL + 'Blogs',
        headers: {
            Authorization: 'bearer ' + token
        }
    }).then(data => {
        return data;
    }).catch(err => console.log(err))
}