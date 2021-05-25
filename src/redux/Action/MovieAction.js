import axios from "axios";
import { GET_ALL_MOVIE, ACCESS_TOKEN, GET_DETAIL_MOVIE, GET_ALL_MOVIE_PAGE } from "../../util/Setting";

export const getAllMovieAction = (maNhom = "GP02") => {
  // Tai khoan va mat khau
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
        method: "GET",
      });
      dispatch({
        type: GET_ALL_MOVIE,
        allMovie: result.data,
      });
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};

export const getDetailMovieAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
        method: "GET",
      });
      dispatch({
        type: GET_DETAIL_MOVIE,
        detailMovie: result.data,
      });
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};

export const getAllMoviePage = (page) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP02&soTrang=${page}&soPhanTuTrenTrang=10`,
        method: "GET",
      });
      dispatch({
        type: GET_ALL_MOVIE_PAGE,
        allMoviePage: result.data,
      });
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};
export const addMovieAction = (movie) => {
  // Tai khoan va mat khau
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim",
        method: "POST",
        data: movie,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
        },
      });
      if (movie.picture) {
        let frm = new FormData();
        frm.append('file', movie.picture)
        frm.append('tenPhim', result.data.tenPhim)
        frm.append('maNhom', 'GP02')
        let result1 = await axios({
          url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim`,
          method: "POST",
          data: frm,
          headers: {
            Authorization: `Bearer` + localStorage.getItem(ACCESS_TOKEN),
          },
        });
      
        console.log(result1.data);
      }
      console.log(result.data);
      alert("Thêm phim thành công !!");
    } catch (errors) {
      alert("Thêm phim không thành công !!");
      console.log("errors", errors.response?.data);
    }
  };
};

export const deleteMovieAction = (maPhim) => {
  // Tai khoan va mat khau
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
        },
      });
      dispatch(getAllMoviePage());
      dispatch(getAllMovieAction());
      alert("Xóa phim thành công !!");
    } catch (errors) {
      alert("Xóa phim không thành công !!");
      console.log("errors", errors.response?.data);
    }
  };
};

export const updateMovieAction = (updateMovie) => {
  // Tai khoan va mat khau
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim`,
        method: "POST",
        data: updateMovie,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
        },
      });
      if (updateMovie.picture) {
        let frm = new FormData();
        frm.append('file', updateMovie.picture)
        frm.append('tenPhim', result.data.tenPhim)
        frm.append('maNhom', 'GP02')
        let result1 = await axios({
          url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim`,
          method: "POST",
          data: frm,
          headers: {
            Authorization: `Bearer` + localStorage.getItem(ACCESS_TOKEN),
          },
        });
      
        // console.log(result1.data);
      }
      // console.log(result.data);

      dispatch(getAllMoviePage());
      dispatch(getAllMovieAction());
      alert("Cập nhật phim thành công !!");
    } catch (errors) {
      alert("Cập nhật phim không thành công !!");
      console.log("errors", errors.response?.data);
    }
  };
};
