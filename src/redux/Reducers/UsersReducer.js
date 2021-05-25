import { LOGIN_SUCCESS, LOGOUT_SUCCESS, USER_INFORMATION } from "../../util/Setting";

let user = {};
let taiKhoan = "";

if (localStorage.getItem('USER_LOGIN')) {
    let userLogin = JSON.parse(localStorage.getItem('USER_LOGIN'))
    user = userLogin
    taiKhoan = userLogin.taiKhoan
}

const stateDefault = {
    user: user,
    taiKhoan: taiKhoan,
    allUser: [],
    userInformation: [],
    userLoading: true
}

export const UsersReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            return { ...state, user: action.user, taiKhoan: action.user.taiKhoan,userLoading: false }
        }
        case LOGOUT_SUCCESS: {
            state.user = {};
            state.taiKhoan = '';
            return { ...state, userLoading: false  }
        }
        case USER_INFORMATION: {
            return { ...state, userInformation : action.userInformation ,userLoading: false  }
        }
        case "RESET_LOADING": {
            return { ...state, userLoading: true }
          }
        // case "REGISTER": {
        //     return { ...state, userRegister: action.userRegister }
        // }


        default: return { ...state }
    }
}