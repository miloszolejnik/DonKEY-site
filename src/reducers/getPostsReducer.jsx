const initialState = {
    isLoading: true,
    post: [null],
}

const getPostsReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'FETCH_POST':
            return {
                isLoading: false,
                post: action.payload.data
            }
            break;

        default:
            return { ...state }
            break;
    }
}

export default getPostsReducer;