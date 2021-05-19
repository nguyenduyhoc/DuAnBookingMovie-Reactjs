import axios from 'axios'
import {  } from '../../util/Setting'


export const orderTicket = (maLichChieu = '16153') => { // Tai khoan va mat khau
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
                method: 'GET',
            })
            dispatch({
                type: "ORDER_TICKET",
                ticket: result.data
            })
        } catch (errors) {
            console.log('errors', errors.response?.data)
        }
    }
}