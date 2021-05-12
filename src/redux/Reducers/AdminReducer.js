const initialState = {
    allUserPage: [],
    allUser: [],
    // userAdded: {}
}

export const AdminReducer = (state = initialState, action) => {
    switch (action.type) {

        case "GET-ALL-USER-PAGE": {
            return { ...state, allUserPage: action.allUserPage }
        }
        case "GET-ALL-USER": {
            return { ...state, allUser: action.allUser }
        }
        // case "ADD-USER": {
        //     state.userAdded= [...state.userAdded, action.userAdded]
            
        //     return { ...state}
        // }
        default:
            return { ...state }
    }
}
