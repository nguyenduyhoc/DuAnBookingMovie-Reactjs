import axios from "axios"
import { ACCESS_TOKEN } from '../../util/Setting'

export const getCalendarMovieAction = (calendarMovie) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu`,
                method: 'POST',
                data: calendarMovie,
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN) }
            })
            alert("Tạo lịch chiếu thành công")
            // console.log('result', result.data);
          
        } catch (errors) {
            alert("Tạo lịch chiếu thất bại")
            console.log('errors', errors.response?.data)
        }
    }
}