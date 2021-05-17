/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCinemaBrandAction,
  getCinemaAction,
  getCinemaScheduleAction,
} from "../../redux/Action/CinemaAction";

export default function Cinema() {
  const [cinemaBrandId, setCinemaBrandId] = useState("");
  const [cinemaId, setCinemaId] = useState("");
  const { allCinemaBrand, allCinema, allCinemaSchedule } = useSelector(
    (state) => state.CinemaReducer
  );

  const dispatch = useDispatch();
  console.log("He thong", allCinemaBrand);
  console.log("Rap", allCinema);

  useEffect(() => {
    dispatch(getCinemaBrandAction());
    setCinemaBrandId(allCinemaBrand[0]?.maHeThongRap);
    dispatch(getCinemaScheduleAction(cinemaBrandId));
    setCinemaId(allCinemaSchedule[0]?.lstCumRap[0].maCumRap);
  }, []);

  const renderLogoCinema = () => {
    return allCinemaBrand?.map((cinema, index) => {
      return (
        <li className="nav-item active" key={index}>
          <a
            className="nav-link"
            onClick={() => {
              setCinemaBrandId(cinema.maHeThongRap);
              dispatch(getCinemaScheduleAction(cinema.maHeThongRap));
              setCinemaId(allCinemaSchedule[0]?.lstCumRap[0].maCumRap);
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
                <a className="movieTimeSession" href="#">
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
                </a>
              </div>
            </div>
          </div>
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
