import axios from "axios";

export const getPostsAction = (blogName) => async (dispatch) => {

    const token = sessionStorage.getItem('loginToken')

    let postsFetch = await axios({
        method: 'get',
        url: `https://dev-donkey-api.herokuapp.com/api/blogs/${blogName}/posts`,
        headers: {
            Authorization: 'bearer ' + token
        }
    })
    dispatch({
        type: 'FETCH_POST',
        payload: postsFetch,
    })
}
