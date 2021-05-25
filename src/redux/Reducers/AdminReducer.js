const initialState = {
    allUserPage: [],
    allUser: [],
    adminLoading: true
    // userAdded: {}
}

export const AdminReducer = (state = initialState, action) => {
    switch (action.type) {

        case "GET-ALL-USER-PAGE": {
            return { ...state, allUserPage: action.allUserPage, adminLoading: false }
        }
        case "GET-ALL-USER": {
            return { ...state, allUser: action.allUser, adminLoading: false }
        }
        // case "UPDATE-USER": {
        //     return { ...state, updateUser: action.updateUser }
        // } => Update thành công là được ko cần gửi lên redux
        // case "ADD-USER": {
        //     state.userAdded= [...state.userAdded, action.userAdded]

        //     return { ...state}
        // }
        case "RESET_LOADING": {
            return { ...state, adminLoading: true }
        }
        default:
            return { ...state }
    }
}
