/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCinemaAction } from '../../redux/Action/CinemaAction';


export default function Cinema() {
    const { allCinema } = useSelector(state => state.CinemaReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCinemaAction())
    }, [])

    const renderLogoCinema = () => {
        return allCinema.map((cinema, index) => {
            return <li className="nav-item active" key={index}>
                <a href="#" className="nav-link">
                    <img src={cinema.logo} alt />
                </a>
            </li>
        })
    }


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
                    <div id="listCinemas" className="col-md-4 bg-white">
                        <div className="cinemas active">
                            <img className="cinemasImage" src="./img/Cinema/bhd-star-bitexco-16105952137769.png" alt />
                            <div className="wrapInfo">
                                <span className="nameCinema"><span className="colorCinema BHD">BHD Star</span> - Bitexco</span>
                                <span className="infoMovieCinema">L3-Bitexco Icon 68, 2 Hải Triều, Q.1</span>
                                <span className="detailMovieCinema">
                                    <a href="#">[chi tiết]</a>
                                </span>
                            </div>
                        </div>
                        <div className="cinemas">
                            <img className="cinemasImage" src="./img/Cinema/bhd-star-bitexco-16105952137769.png" alt />
                            <div className="wrapInfo">
                                <span className="nameCinema">
                                    <span className="colorCinema BHD">BHD Star</span>
                                        - Vincom Thảo Điền
                                </span>
                                <span className="infoMovieCinema">L5-MegaMall, 159 XL Hà Nội, Q.2</span>
                                <span className="detailMovieCinema">
                                    <a href="#">[chi tiết]</a>
                                </span>
                            </div>
                        </div>
                        <div className="cinemas">
                            <img className="cinemasImage" src="./img/Cinema/bhd-star-vincom-3-2-16105957596860.png" alt />
                            <div className="wrapInfo">
                                <span className="nameCinema"><span className="colorCinema BHD">BHD Star</span> - Vincom 3/2
                                 </span>
                                <span className="infoMovieCinema">L5-Vincom 3/2, 3C Đường 3/2, Q.10</span>
                                <span className="detailMovieCinema">
                                    <a href="#">[chi tiết]</a>
                                </span>
                            </div>
                        </div>
                        <div className="cinemas">
                            <img className="cinemasImage" src="./img/Cinema/bhd-star-pham-hung-16105959230642.png" alt />
                            <div className="wrapInfo">
                                <span className="nameCinema"><span className="colorCinema BHD">BHD Star</span> - Phạm Hùng</span>
                                <span className="infoMovieCinema">L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh</span>
                                <span className="detailMovieCinema">
                                    <a href="#">[chi tiết]</a>
                                </span>
                            </div>
                        </div>
                        <div className="cinemas">
                            <img className="cinemasImage" src="./img/Cinema/bhd-star-vincom-quang-trung-16105960645760.png" alt />
                            <div className="wrapInfo">
                                <span className="nameCinema"><span className="colorCinema BHD">BHD Star</span> - Vincom Quang Trung
            </span>
                                <span className="infoMovieCinema">B1-Vincom QT, 190 Quang Trung, Gò Vấp</span>
                                <span className="detailMovieCinema">
                                    <a href="#">[chi tiết]</a>
                                </span>
                            </div>
                        </div>
                        <div className="cinemas">
                            <img className="cinemasImage" src="./img/Cinema/bhd-star-vincom-le-van-viet-16105962051265.png" alt />
                            <div className="wrapInfo">
                                <span className="nameCinema"><span className="colorCinema BHD">BHD Star</span> - Vincom Lê Văn Việt
            </span>
                                <span className="infoMovieCinema">L4-Vincom Plaza, 50 Lê Văn Việt, Quận 9</span>
                                <span className="detailMovieCinema">
                                    <a href="#">[chi tiết]</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div id="listMovie" className="col-md-7 bg-white">
                        <div className="wrapMovie panel">
                            <div className="movieInfo">
                                <img src="./img/Movie/tom-jerry-16127706651597_60x60.png" className="movieImage" alt />
                                <div className="wrapInfo">
                                    <p>
                                        <span className="ageTag ageTag-general">P</span>
                                        <span className="movieTitle">Tom &amp; Jerry</span>
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
                        <div className="wrapMovie panel">
                            <div className="movieInfo">
                                <img src="./img/Movie/lua-deu-gap-lua-dao-the-con-heartist-c16-16082739589858_60x60.png" className="movieImage" alt />
                                <div className="wrapInfo">
                                    <p>
                                        <span className="ageTag">C16</span>
                                        <span className="movieTitle">Lừa Đểu Gặp Lừa Đảo - The Con-Heartist</span>
                                    </p>
                                    <p>128 phút - TIX 8.8 - IMDb 0</p>
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
                                            <span className="movie-start-time">22:00</span> - 23:40
                </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wrapMovie panel">
                            <div className="movieInfo">
                                <img src="./img/Movie/tazza-than-bip-jack-chot-tazza-one-eyed-jack-c13-16127716280582_60x60.png" className="movieImage" alt />
                                <div className="wrapInfo">
                                    <p>
                                        <span className="ageTag">C13</span>
                                        <span className="movieTitle">Tazza: Thần Bịp Jack Chột - Tazza: One Eyed Jack</span>
                                    </p>
                                    <p>139 phút - TIX 8.3 - IMDb 0</p>
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
                                            <span className="movie-start-time">22:00</span> - 23:40
                </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wrapMovie panel">
                            <div className="movieInfo">
                                <img src="./img/Movie/kieu-16137205526238_60x60.png" className="movieImage" alt />
                                <div className="wrapInfo">
                                    <p>
                                        <span className="ageTag">C18</span>
                                        <span className="movieTitle">Kiều @</span>
                                    </p>
                                    <p>0 phút - TIX 7.5 - IMDb 0</p>
                                </div>
                            </div>
                            <div className="movieSession collapse in">
                                <div className="listTagTime">
                                    <div className="movieVersion">2D Digital</div>
                                    <div className="timeSession">
                                        <a className="movieTimeSession" href="#">
                                            <span className="movie-start-time">17:15</span> -
                </a>
                                        <a className="movieTimeSession" href="#">
                                            <span className="movie-start-time">19:10</span> -
                </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wrapMovie panel">
                            <div className="movieInfo">
                                <img src="./img/Movie/sieu-trom-duong-pho-16139791273302_60x60.png" className="movieImage" alt />
                                <div className="wrapInfo">
                                    <p>
                                        <span className="ageTag">C16</span>
                                        <span className="movieTitle">Siêu Trộm Đường Phố</span>
                                    </p>
                                    <p>90 phút - TIX 5.5 - IMDb 0</p>
                                </div>
                            </div>
                            <div className="movieSession collapse in">
                                <div className="listTagTime">
                                    <div className="movieVersion">2D Digital</div>
                                    <div className="timeSession">
                                        <a className="movieTimeSession" href="#">
                                            <span className="movie-start-time">17:15</span> - 18:55
                </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wrapMovie panel">
                            <div className="movieInfo">
                                <img src="./img/Movie/palm-springs-mo-mat-thay-hom-qua-16142434274044_60x60.jpg" className="movieImage" alt />
                                <div className="wrapInfo">
                                    <p>
                                        <span className="ageTag ageTag-general">P</span>
                                        <span className="movieTitle">PALM SPRINGS: Mở mắt thấy hôm qua</span>
                                    </p>
                                    <p>90 phút - TIX 5.5 - IMDb 0</p>
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
                        </div></div></div></section>
        </div>

    )
}
