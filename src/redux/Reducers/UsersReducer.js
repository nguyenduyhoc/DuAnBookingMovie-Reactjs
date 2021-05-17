
let user = {};
let taiKhoan = "";
let userRegister = {}
if (localStorage.getItem('USER_LOGIN')) {
    let userLogin = JSON.parse(localStorage.getItem('USER_LOGIN'))
    user = userLogin
    taiKhoan = userLogin.taiKhoan
}

const stateDefault = {
    user: user,
    taiKhoan: taiKhoan,
    allUser: []
}

export const UsersReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "LOGIN-SUCCESS": {
            return { ...state, user: action.user, taiKhoan: action.user.taiKhoan }
        }
        case "LOGOUT": {
            state.user = {};
            state.taiKhoan = '';
            return { ...state }
        }
        // case "REGISTER": {
        //     return { ...state, userRegister: action.userRegister }
        // }


        default: return { ...state }
    }
}