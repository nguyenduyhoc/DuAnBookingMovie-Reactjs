import axios from 'axios'
import { method } from 'lodash'
import { GET_ALL_MOVIE } from '../../util/Setting'


export const getAllMovieAction = () => { // Tai khoan va mat khau
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02',
                method: 'GET',
            })
            dispatch({
                type: GET_ALL_MOVIE,
                allMovie: result.data
            })
        } catch (errors) {
            console.log('errors', errors.response?.data)
        }
    }
}

export const getDetailMovieAction = (maPhim) => {
    return async (dispacth) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method: 'GET'
            })
            dispacth({
                type: 'GET_DETAIL_MOVIE',
                detailMovie: result.data
            })

        } catch (errors) {
            console.log('errors', errors.response?.data)
        }
    }
}

export const getAllMoviePage = (page) => {
    return async (dispacth) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP02&soTrang=${page}&soPhanTuTrenTrang=10`,
                method: 'GET'
            })
            dispacth({
                type: "GET-ALL-MOVIE-PAGE",
                allMoviePage: result.data
            })

        } catch (errors) {
            console.log('errors', errors.response?.data)
        }
    }
}