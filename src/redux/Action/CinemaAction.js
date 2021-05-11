import axios from 'axios'

export const getCinemaAction = () => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap',
                method: 'GET'
            })
            dispatch({
                type: 'GET_ALL_CINEMA',
                allCinema: result.data
            })
        } catch (errors) {
            console.log('errors', errors.response?.data)
        }
    }
}