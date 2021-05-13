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
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP08`,
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
            // dispatch({
            //     type: "ADD-USER",
            //     userAdded: result.data
            // })
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
            // getAllUser()
            // getAllUserPage()
            alert("Xóa người dùng thành công !!")

        } catch (errors) {
            alert("Xóa người dùng không thành công")
            console.log('errors', errors)
        }
    }
}

// <---- Check function -->
export const updateInformationUser = (updateUser) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
                method: 'PUT',
                data: updateUser,
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN) }
            })
            // Checked
            getAllUserPage()
            getAllUser()
            alert("Cập nhật thành công")
        } catch (errors) {
            // Checked
            alert("Cập nhật không thành công")
            console.log('errors', errors.response?.data)
        }
    }
}

