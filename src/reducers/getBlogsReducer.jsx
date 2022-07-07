const initialState = {
    names: [null],
    isLoading: true,
}

const getBlogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case "FETCH_BLOGS":
            return {
                names: action.payload.data.items,
                isLoading: false
            }
            break

        default:
            return { ...state }
            break
    }
}

export default getBlogsReducer;