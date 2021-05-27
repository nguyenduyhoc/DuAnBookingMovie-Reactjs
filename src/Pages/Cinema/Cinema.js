/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Cinema() {
  const [allCinemaBrand, setallCinemaBrand] = useState([]);
  const [allCinemaSchedule, setallCinemaSchedule] = useState("");
  const [cinemaBrandId, setCinemaBrandId] = useState("");
  const [cinemaId, setCinemaId] = useState("");

  const getCinemaBrand = async () => {
    try {
      const result = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
        method: "GET",
      });
      setallCinemaBrand(result.data);
      setCinemaBrandId(result.data[0]?.maHeThongRap);
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };

  const getCinemaSchedule = async (Brand) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${Brand}&maNhom=GP02`,
        method: "GET",
      });
      setallCinemaSchedule(result.data);
      setCinemaId(result.data[0]?.lstCumRap[0].maCumRap);
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };

  useEffect(() => {
    getCinemaBrand();
    getCinemaSchedule(cinemaBrandId);
  }, []);

  const renderLogoCinema = () => {
    return allCinemaBrand?.map((cinema, index) => {
      return (
        <li className="nav-item active" key={index}>
          <a
            className="nav-link"
            onClick={() => {
              getCinemaSchedule(cinema.maHeThongRap);
            }}
          >
            <img src={cinema.logo} alt={cinema.maHeThongRap} />
          </a>
        </li>
      );
    });
  };
  const renderCinema = () => {
    return allCinemaSchedule[0]?.lstCumRap.map((cinema, index) => {
      return (
        <div
          className="cinemas active"
          key={index}
          onClick={() => {
            setCinemaId(cinema.maCumRap);
          }}
        >
          <img
            className="cinemasImage"
            src="./img/Cinema/bhd-star-bitexco-16105952137769.png"
            alt
          />
          <div className="wrapInfo">
            <span className="nameCinema">
              <span className="colorCinema BHD"></span>
              {cinema.tenCumRap}
            </span>
            <span className="infoMovieCinema">{cinema.diaChi}</span>
            <span className="detailMovieCinema">
              <a href="#">[chi tiết]</a>
            </span>
          </div>
        </div>
      );
    });
  };
  const renderCinemaSchedule = () => {
    let danhSachPhim = allCinemaSchedule[0]?.lstCumRap.find(
      (item) => item.maCumRap === cinemaId
    );
    return danhSachPhim?.danhSachPhim.map((item, index) => {
      return (
        <div className="wrapMovie panel" key={index}>
          <Link
            to={`/detail/${item.maPhim}`}
            style={{ textDecoration: "none" }}
          >
            <div className="movieInfo">
              <img src={item.hinhAnh} className="movieImage" alt />
              <div className="wrapInfo">
                <p>
                  <span className="ageTag ageTag-general">P</span>
                  <span className="movieTitle">{item.tenPhim}</span>
                </p>
                <p>100 phút - TIX 7.7 - IMDb 0</p>
              </div>
            </div>
            <div className="movieSession collapse in">
              <div className="listTagTime">
                <div className="movieVersion">2D Digital</div>
                <div className="timeSession">
                  {/* <a className="movieTimeSession" href="#">
                  <span className="movie-start-time">17:15</span> - 18:55
                </a>
                <a className="movieTimeSession" href="#">
                  <span className="movie-start-time">19:10</span> - 20:50
                </a>
                <a className="movieTimeSession" href="#">
                  <span className="movie-start-time">20:45</span> - 22:25
                </a>
                <a className="movieTimeSession" href="#">
                  <span className="movie-start-time">22:00</span> - 23:40
                </a> */}
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  };

  return (
    <div id="cinema">
      <section className="container">
        <div id="homeCinemaHeadBackground">
          <img src="./img/Movie/back-news.png" alt />
        </div>
        <div id="homeCinemaComplex" className="row session-main">
          <ul className="col-md-1 nav nav-tabs listPCinemas">
            {renderLogoCinema()}
          </ul>
          <div
            id="listCinemas"
            className="col-md-4 bg-white"
            style={{ overflowY: "scroll" }}
          >
            {renderCinema()}
          </div>
          <div id="listMovie" className="col-md-7 bg-white">
            {renderCinemaSchedule()}
          </div>
        </div>
      </section>
    </div>
  );
}
