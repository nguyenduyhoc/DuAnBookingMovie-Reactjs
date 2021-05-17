import axios from 'axios'
import { GET_ALL_MOVIE,  ACCESS_TOKEN } from '../../util/Setting'


export const getAllMovieAction = (maNhom = 'GP02') => { // Tai khoan va mat khau
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
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
export const addMovieAction = (movie) => { // Tai khoan va mat khau
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim',
                method: 'POST',
                data: movie,
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN) }
            })
            alert('Thêm phim thành công !!')
        } catch (errors) {
            alert('Thêm phim không thành công !!')
            console.log('errors', errors.response?.data)
        }
    }
}

export const deleteMovieAction = (maPhim) => { // Tai khoan va mat khau
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
                method: 'DELETE',
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN) }
            })
            getAllMoviePage()
            getAllMovieAction()
            alert('Xóa phim thành công !!')
        } catch (errors) {
            alert('Xóa phim không thành công !!')
            console.log('errors', errors.response?.data)
        }
    }
}

export const updateMovieAction = (updateMovie) => { // Tai khoan va mat khau
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim`,
                method: 'POST',
                data: updateMovie,
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN) }
            })
            getAllMoviePage()
            getAllMovieAction()
            alert('Cập nhật phim thành công !!')
        } catch (errors) {
            alert('Cập nhật phim không thành công !!')
            console.log('errors', errors.response?.data)
        }
    }
}