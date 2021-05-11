import axios from 'axios'
import { ACCESS_TOKEN } from '../../util/Setting'


export const getAllUserPage = (page) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP02&soTrang=${page}&soPhanTuTrenTrang=10`,
                method: 'GET'
            })
            // console.log('result', result.data);
            dispatch({
                type: "GET-ALL-USER-PAGE",
                allUserPage: result.data
            })
        } catch (errors) {
            console.log('errors', errors.response?.data)
        }
    }
}

export const getAllUser = () => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP02`,
                method: 'GET'
            })
            // console.log('result', result.data);
            dispatch({
                type: "GET-ALL-USER",
                allUser: result.data
            })
        } catch (errors) {
            console.log('errors', errors.response?.data)
        }
    }
}

export const addUser = (addUser) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung`,
                method: 'POST',
                data: addUser,
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN) }

            })
           
            // console.log('result', result.data);
            dispatch({
                type: "ADD-USER",
                userAdded: result.data
            })
            alert('Thêm người dùng thành công!')
            
        } catch (errors) {
            console.log('errors', errors.response.data)
        }
    }
}
