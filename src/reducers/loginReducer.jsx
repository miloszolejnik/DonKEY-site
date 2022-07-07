const initialState = {
    loginToken: null,
    isLoged: false,
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                loginToken: action.payload,
                isLoged: true
            }
            break
        default:
            return { ...state }
            break
    }
}

export default loginReducer;