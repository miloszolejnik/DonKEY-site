import axios from "axios";

export const getBlogsAction = () => async (dispatch) => {

    const token = sessionStorage.getItem('loginToken')

    let blogsFetch = await axios({
        method: 'get',
        url: 'https://dev-donkey-api.herokuapp.com/api/Blogs',
        headers: {
            Authorization: 'bearer ' + token
        }
    })
    dispatch({
        type: "FETCH_BLOGS",
        payload: blogsFetch,
    })
}