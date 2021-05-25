import axios from 'axios'
import { ACCESS_TOKEN } from '../../util/Setting'


export const ticketInformationAction = (maLichChieu) => { // Tai khoan va mat khau
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
                method: 'GET',
            })
            dispatch({
                type: "TICKET-INFORMATION",
                ticketInformation: result.data
            })
        } catch (errors) {
            console.log('errors', errors.response?.data)
        }
    }
}

export const orderTicket = (ticket) => { // Tai khoan va mat khau
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`,
                method: 'POST',
                data: ticket,
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN) }
            })
            dispatch(ticketInformationAction(ticket.maLichChieu))
            dispatch({
                type: 'XOA_GHE_DANG_CHON'
            })
            alert('Đặt vé thành công')
        } catch (errors) {
            alert(`Đặt vé thất bại`)
            console.log('errors', errors.response?.data)
        }
    }
}