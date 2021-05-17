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
            // console.log('result', result.data);
          
        } catch (errors) {
            console.log('errors', errors.response?.data)
        }
    }
}