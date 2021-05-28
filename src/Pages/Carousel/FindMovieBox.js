import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

export default function FindMovieBox() {
  const [chosenMovie, setchosenMovie] = useState("");
  const [chosenCinemaBrand, setchosenCinemaBrand] = useState("");
  const [chosenCinema, setchosenCinema] = useState("");
  const [chosenDate, setchosenDate] = useState("");
  const [chosenTime, setchosenTime] = useState("");
  const [chosenmaLichChieu, setchosenmaLichChieu] = useState("");
  const { allMovie } = useSelector((state) => state.MovieReducer);
  const [buttonForSellTikcet, setbuttonForSellTikcet] = useState(true)

  function removeDuplicates(array) {
    let a = [];
    array?.map((x, index) => {
      if (!a.includes(x)) {
        a.push(x);
      }
    });
    return a;
  }

  useEffect(() => {
    setchosenmaLichChieu(chosenCinema?.lichChieuPhim?.find(item => item.ngayChieuGioChieu === `${chosenDate}T${chosenTime}`)?.maLichChieu)
  }, [chosenTime])


  const getDetailMovie = async (maPhim) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
        method: "GET",
      });
      setchosenMovie(result.data);
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };

  const renderChooseMovie = () => {
    return allMovie.map((movie, index) => {
      return (
        <option value={movie.maPhim} key={index}>
          {movie.tenPhim}
        </option>
      );
    });
  };
  const renderChooseCinemaBrand = () => {
    return chosenMovie.heThongRapChieu?.map((cinemaBrand, index) => {
      return (
        <option value={cinemaBrand.maHeThongRap} key={index}>
          {cinemaBrand.tenHeThongRap}
        </option>
      );
    });
  };
  const renderChooseCinema = () => {
    return chosenCinemaBrand.cumRapChieu?.map((cinema, index) => {
      return (
        <option value={cinema.maCumRap} key={index}>
          {cinema.tenCumRap}
        </option>
      );
    });
  };
  const renderChooseDate = () => {
    let DateTimeArr = chosenCinema.lichChieuPhim?.map((item, index) => {
      return item.ngayChieuGioChieu.split("T")[0];
    });
    let DateArr = removeDuplicates(DateTimeArr);
    return DateArr.map((item, index) => {
      return (
        <option value={item} key={index}>
          {item}
        </option>
      );
    });
  };
  const renderChooseTime = () => {
    let DateTimeArr = chosenCinema.lichChieuPhim?.map((item, index) => {
      return item.ngayChieuGioChieu.split("T");
    });
    return DateTimeArr?.filter((item) => item[0] === chosenDate).map(
      (item, index) => {
        return (
          <option value={item[1]} key={index}>
            {item[1]}
          </option>
        );
      }
    );
  };
  return (
    <div className="container">
      <div
        style={{ width: "100%" }}
        class="form-group d-flex "
        id="findMovieTools"
      >
        <div className="findMovieBox">
          <select class="form-control form-control-lg " name="findBoxChooseMovie"
            onChange={(e) => {
              getDetailMovie(e.target.value);
              setbuttonForSellTikcet(true)

            }}
          >
            <option value="" hidden>
              Tên phim
            </option>
            {renderChooseMovie()}
          </select>

          <select class="form-control form-control-lg " name="findBoxChooseMovie"
            onChange={(e) => {
              setchosenCinemaBrand(
                chosenMovie.heThongRapChieu.find(
                  (item) => item.maHeThongRap === e.target.value
                )
              );
              setbuttonForSellTikcet(true)

            }}
          >
            <option value="" hidden>
              Tên Rạp
            </option>
            {renderChooseCinemaBrand()}
          </select>
          <select
            class="form-control form-control-lg"
            name="findBoxChooseCinema"
            onChange={(e) => {
              setchosenCinema(
                chosenCinemaBrand.cumRapChieu.find(
                  (item) => item.maCumRap === e.target.value
                )
              );
              setbuttonForSellTikcet(true)

            }}
          >
            <option value="" hidden>
              Địa chỉ
            </option>
            {renderChooseCinema()}
          </select>
          <select
            class="form-control form-control-lg"
            name="findBoxChooseDate"
            onChange={(e) => {
              setchosenDate(e.target.value);
              setbuttonForSellTikcet(true)
            }}
          >
            <option value="" hidden>
              Ngày tháng
            </option>
            {renderChooseDate()}
          </select>
          <select class="form-control form-control-lg" name="findBoxChooseWhen" onChange={(e) => {
            setchosenTime(e.target.value);
            setbuttonForSellTikcet(false)
          }}>
            <option value="" hidden>
              Thời gian
            </option>
            {renderChooseTime()}
          </select>
        </div>
        {buttonForSellTikcet ? <button className="btn btn-danger" onClick={() => { alert("Vui lòng chọn đầy đủ thông tin") }}>Mua vé</button> : <Link className="btn btn-danger" to={`/sellticket/${chosenmaLichChieu}`} >Mua vé</Link>}
      </div>
    </div>
  );
}
