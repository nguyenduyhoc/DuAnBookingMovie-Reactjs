import React from 'react';
import Slider from "react-slick";
import PlayVideoMovieShowTime from './PlayVideoMovieShowingTime';
import { useDispatch, useSelector } from 'react-redux'



export default function MovieShowtime(props) {

    const { allMovie } = useSelector(state => state.MovieReducer)
    // console.log(allMovie)
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        rows: 1,
        slidesPerRow: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1.5,
                    slidesPerRow: 2,
                    row: 1,
                }
            },
            {
                breakpoint: 719,
                settings: {
                    slidesToShow: 1.5,
                    slidesPerRow: 1,
                    row: 1,

                }
            }
        ]
    };


    const renderPlayVideoMovieShowTime = () => {
        return allMovie.map((movie, index) => {

            return <div className="d-block" key={index}>
                <PlayVideoMovieShowTime movie={movie} />
            </div>

        })
    }


    return (
        <div>
            <div id="movieSchedule" className="container">

                <ul class="nav nav-pills mb-3 justify-content-center mt-5" id="pills-tab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link tabPanel active" id="pills-home-tab" data-toggle="pill" href="#showing" role="tab" aria-controls="pills-home" aria-selected="true">Showing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link tabPanel " id="pills-profile-tab" data-toggle="pill" href="#soon" role="tab" aria-controls="pills-profile" aria-selected="false">Soon</a>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="showing" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="container movieSlider">
                            <Slider {...settings}>
                                {renderPlayVideoMovieShowTime()}
                            </Slider>

                        </div>
                    </div>
                    <div class="tab-pane fade" id="soon" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div className="container movieSlider" >
                            <Slider {...settings}>
                                {renderPlayVideoMovieShowTime()}
                            </Slider>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
