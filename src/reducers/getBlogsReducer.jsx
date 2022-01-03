const initialState = {
    names: [null],
}

const getBlogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_BLOGS":
            return {
                names: action.payload.items,
            }
            break
        default:
            return { ...state }
            break
    }
}

export default getBlogsReducer;