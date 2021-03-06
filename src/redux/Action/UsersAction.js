import axios from 'axios'
import { history } from '../../App'
import { ACCESS_TOKEN, LOGIN_SUCCESS, USER_INFORMATION, USER_LOGIN } from '../../util/Setting'

export const loginAction = (userLogin) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
                method: 'POST',
                data: userLogin
            })
            // console.log('result', result.data);
            dispatch({
                type: LOGIN_SUCCESS,
                user: result.data,
                maLoaiNguoiDung: result.data
            })
            localStorage.setItem(USER_LOGIN, JSON.stringify(result.data))
            localStorage.setItem(ACCESS_TOKEN, result.data.accessToken)

            alert('Đăng nhập thành công!')
            history.push('/');

        }

        catch (errors) {
            alert('Tài khoản không tồn tại!')
            console.log('errors', errors.response?.data)
        }
    }
}

export const updateInformationUser = (updateUser) => {
    console.log('updateuser', updateUser)
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
                method: 'PUT',
                data: updateUser,
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN) }
            })
            // Checked
            dispatch({ type: "LOGOUT" })
            localStorage.removeItem('USER_LOGIN')
            localStorage.removeItem('ACCESS_TOKEN')
            history.push('/login')
            alert("Cập nhật thành công ,vui lòng đăng nhập lại để tiếp tục")
        } catch (errors) {
            // Checked
            alert("Cập nhật không thành công")
            console.log('errors', errors.response?.data)
        }
    }
}

export const userInformationAction = (userID) => {

    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
                method: 'POST',
                data: userID,
            })
            dispatch({
                type: USER_INFORMATION,
                userInformation: result.data
            })
           

        } catch (errors) {
            console.log('errors', errors.response?.data)
        }
    }
}

export const registerAction = (userRegister) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
                method: 'POST',
                data: userRegister
            })
            console.log('result', result.data)
            alert('Đăng ký thành công!')
            history.push('/login');

        }

        catch (errors) {
            alert('Đăng ký không thành công')
            console.log('errors', errors.response?.data, errors.response?.status)
        }
    }
}





