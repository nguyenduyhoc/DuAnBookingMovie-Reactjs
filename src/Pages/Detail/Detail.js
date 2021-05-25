import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getDetailMovieAction } from '../../redux/Action/MovieAction'



export default function Detail(props) {
    // console.log(props)
    const [chosenCinemaBrand, setchosenCinemaBrand] = useState("");
    const [chosenCinema, setchosenCinema] = useState("");
    const [chosenDate, setchosenDate] = useState("");
    const [chosenTime, setchosenTime] = useState("");
    const [chosenmaLichChieu, setchosenmaLichChieu] = useState("");
    const { detailMovie } = useSelector(state => state.MovieReducer)
    // console.log(detailMovie?.ngayKhoiChieu)
    const dispatch = useDispatch()
    const id = props.match.params.id
    const [buttonForSellTikcet, setbuttonForSellTikcet] = useState(true)


    useEffect(() => {
        dispatch(getDetailMovieAction(id))
    }, [])
    useEffect(() => {
        // console.log(`${chosenDate}T${chosenTime}`)
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
    const resetCinemaOption = (id) => {
        document.getElementById(id).value = ""
    }


    return (
        <div className="detail" style={{backgroundImage: `url(${detailMovie.hinhAnh})`}}>
            <div className="container" id="responsiveDetail">
                <div className="row mt-5" id="imgDetail">
                    <div className="col-4 container-fluid mt-5" >

                        <img  style={{ marginTop: '20px', width: '100%' }} src={detailMovie.hinhAnh} alt="hinhAnh" />
                    </div>
                    <div className="col-8 contentDetail text-white">
                        <h3>Ngày công chiếu</h3>
                        <span>{detailMovie?.ngayKhoiChieu?.split("T")[0]}</span>
                        <h3>Tên Phim</h3>
                        <span>{detailMovie.tenPhim}</span>
                        <div >
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1 " className="text-white"></label>
                                    <div className="w-100" id="findMovieBoxDetail">
                                        <select className="form-control selectBox" id="chooseCinemaBrand"
                                            onChange={(e) => {
                                                setchosenCinemaBrand(
                                                    detailMovie?.heThongRapChieu.find(item => item.maHeThongRap === e.target.value)
                                                )
                                                setbuttonForSellTikcet(true)
                                                resetCinemaOption("chooseCinema")
                                                resetCinemaOption("chosenDate")
                                                resetCinemaOption("chosenTinme")
                                                
                                            }}>
                                            <option value="" hidden>Choose Cinema Brand</option>
                                            {renderChooseCinemaBrand()}
                                        </select>
                                        <select className="form-control selectBox" id="chooseCinema"
                                            onChange={(e) => {

                                                setchosenCinema(
                                                    chosenCinemaBrand?.cumRapChieu.find(
                                                        (item) => item.maCumRap === e.target.value
                                                    )
                                                );
                                                setbuttonForSellTikcet(true)
                                                resetCinemaOption("chosenDate")
                                                resetCinemaOption("chosenTinme")
                                            }}
                                        >
                                            <option value="" hidden>Choose Cinema</option>
                                            {renderChooseCinema()}
                                        </select>
                                        <select className="form-control selectBox" id="chosenDate"
                                            onChange={(e) => {
                                                setchosenDate(
                                                    e.target.value
                                                )
                                                setbuttonForSellTikcet(true)
                                                resetCinemaOption("chosenTinme")
                                            }}
                                        >
                                            <option value="" hidden>Date </option>
                                            {renderChooseDate()}
                                        </select>
                                        <select className="form-control selectBox" id="chosenTinme"
                                            onChange={(e) => {
                                                setchosenTime(
                                                    e.target.value
                                                )
                                                setbuttonForSellTikcet(false)
                                            }
                                            }>
                                            <option value="" hidden>Time </option>
                                            {renderChooseTime()}
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {buttonForSellTikcet ? <button className="btn btn-danger" onClick={() => { alert("Vui lòng chọn đầy đủ thông tin") }}>Mua vé</button> : <Link className="btn btn-danger" to={`/sellticket/${chosenmaLichChieu}`} type="button" >Mua vé</Link>}

                    </div>
                </div>
                <div className="row container text-white detailContentResponsive mt-5">
                    <div className="col-3">
                        <h5>Giờ công chiếu</h5>
                        <p>{detailMovie?.ngayKhoiChieu?.split("T")[1]}</p>
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
