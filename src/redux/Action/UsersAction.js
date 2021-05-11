import axios from 'axios'
import { result } from 'lodash'
import { history } from '../../App'
import { ACCESS_TOKEN, USER_LOGIN } from '../../util/Setting'

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
                type: "LOGIN-SUCCESS",
                user: result.data,
                maLoaiNguoiDung: result.data
            })
            localStorage.setItem(USER_LOGIN, JSON.stringify(result.data))
            localStorage.setItem(ACCESS_TOKEN, result.data.accessToken)

            alert('Đăng nhập thành công!')
            history.push('/');

        }
        catch (errors) {
            console.log('errors', errors.response?.data)
        }
    }
}




