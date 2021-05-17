import axios from 'axios'

export const getCinemaBrandAction = () => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap',
                method: 'GET'
            })
            dispatch({
                type: 'GET_ALL_CINEMA_BRAND',
                allCinemaBrand: result.data
            })
        } catch (errors) {
            console.log('errors', errors.response?.data)
        }
    }
}
export const getCinemaAction = (Brand) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${Brand}`,
        method: "GET",
      });
      dispatch({
        type: "GET_ALL_CINEMA",
        allCinema: result.data,
      });
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};
export const getCinemaScheduleAction = (Brand) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${Brand}&maNhom=GP02`,
        method: "GET",
      });
      dispatch({
        type: "GET_ALL_CINEMA_SCHEDULE",
        allCinemaSchedule: result.data,
      });
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};