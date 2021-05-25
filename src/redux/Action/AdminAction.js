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

export const getAllUser = (maNhom = "GP02") => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}`,
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
            alert("Thêm người dùng thành công !!")

        } catch (errors) {
            alert("Thêm người dùng không thành công")
            console.log('errors', errors)
        }
    }
}

export const deletedUser = (taiKhoan) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
                method: 'DELETE',
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN) }

            })
            dispatch(getAllUserPage())
            dispatch(getAllUser())
            alert("Xóa người dùng thành công !!")

        } catch (errors) {
            alert("Xóa người dùng không thành công")
            console.log('errors', errors)
        }
    }
}

// <---- Check function -->
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
            dispatch(getAllUserPage())
            dispatch(getAllUser())
            alert("Cập nhật thành công")
        } catch (errors) {
            // Checked
            alert("Cập nhật không thành công")
            console.log('errors', errors.response?.data)
        }
    }
}

