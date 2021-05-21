import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getDetailMovieAction } from '../../redux/Action/MovieAction'



export default function Detail(props) {
    // console.log(props)
    const [chosenCinemaBrand, setchosenCinemaBrand] = useState("");
    const [chosenCinema, setchosenCinema] = useState("");
    const [chosenDate, setchosenDate] = useState("");
    const [chosenTime ,setchosenTime] =useState("");
    const [chosenmaLichChieu ,setchosenmaLichChieu] =useState("");

    const { detailMovie } = useSelector(state => state.MovieReducer)

    const dispatch = useDispatch()
    const id = props.match.params.id

    useEffect(() => {
        dispatch(getDetailMovieAction(id))
    }, [])
    useEffect(() => {
        console.log(`${chosenDate}T${chosenTime}`)
        setchosenmaLichChieu(chosenCinema?.lichChieuPhim?.find(item => item.ngayChieuGioChieu === `${chosenDate}T${chosenTime}`).maLichChieu)
    }, [chosenTime])
    function removeDuplicates(array) {
        let a = [];
        array?.map((x, index) => {
            if (!a.includes(x)) {
                a.push(x);
            }
        });
        return a;
    }
    const renderChooseCinemaBrand = () => {
        return detailMovie.heThongRapChieu?.map((cinemaBrand, index) => {
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
        <div className="detail ">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-4 container-fluid mt-5 ">

                        <img style={{ marginTop: '20px', width: '80%' }} src={detailMovie.hinhAnh} alt="hinhAnh" />
                    </div>
                    <div className="col-8 contentDetail">
                        <h2>{detailMovie.ngayKhoiChieu}</h2>
                        <h2>{detailMovie.tenPhim}</h2>
                        <div className="mt-5" >
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1 " className="text-white">Chọn rạp, thời gian</label>
                                    <div className="d-flex w-100">
                                        <select className="form-control w-100" id="exampleFormControlSelect1"
                                            onChange={(e) => {
                                                setchosenCinemaBrand(
                                                    detailMovie?.heThongRapChieu.find(item => item.maHeThongRap === e.target.value)
                                                )
                                            }}>
                                            <option value="" hidden>Choose Cinema</option>
                                            {renderChooseCinemaBrand()}
                                        </select>
                                        <select className="form-control" id="exampleFormControlSelect1"
                                            onChange={(e) => {

                                                setchosenCinema(
                                                    chosenCinemaBrand?.cumRapChieu.find(
                                                        (item) => item.maCumRap === e.target.value
                                                    )
                                                );
                                            }}
                                        >
                                            <option value="" hidden>Choose Cinema Branch</option>
                                            {renderChooseCinema()}
                                        </select>
                                        <select className="form-control" id="exampleFormControlSelect1"
                                            onChange={(e) =>
                                                setchosenDate(
                                                    e.target.value
                                                )}
                                        >
                                            <option value="" hidden>Date </option>
                                            {renderChooseDate()}
                                        </select>
                                        <select className="form-control" id="exampleFormControlSelect1"
                                         onChange={(e) => { setchosenTime(
                                                    e.target.value
                                                )
                                            }
                                        }>
                                            <option value="" hidden>Time </option>
                                           {renderChooseTime()}
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <Link className="btn btn-danger" to={`/sellticket/${chosenmaLichChieu}`} as={Link}>Mua vé</Link>
                    </div>

                </div>
                <div className="row container text-white">
                    <div className="col-3">
                        <h5>Ngày công chiếu</h5>
                        <p>{detailMovie.ngayKhoiChieu}</p>
                    </div>
                    <div className="col-3">
                        <h5>Đánh giá</h5>
                        <p>{detailMovie.danhGia}</p>
                    </div>
                    <div className="col-6" >
                        <h5>Nội dung</h5>
                        <p>{detailMovie.moTa}</p>
                    </div>
                </div>


            </div>
        </div>
    )
}
