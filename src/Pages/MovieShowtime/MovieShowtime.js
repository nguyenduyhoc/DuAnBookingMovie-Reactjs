import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import PlayVideoMovieShowTime from './PlayVideoMovieShowingTime';



export default function MovieShowtime(props) {
    const ref = useRef({});

    const settings = {
        className: 'section-outstanding__slider',
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
        infinite: false,
        row: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    row: 2,
                }
            },
            {
                breakpoint: 719,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    row: 1,

                }
            }
        ]
    };

    return (
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
                        <Slider ref={ref} {...settings}>
                            <div>
                                <div >
                                    <PlayVideoMovieShowTime />
                                </div>
                                <div>
                                    <PlayVideoMovieShowTime />
                                </div>

                            </div>
                            <div>
                                <div>
                                    <PlayVideoMovieShowTime />
                                </div>
                                <div>
                                    <PlayVideoMovieShowTime />
                                </div>

                            </div>
                            <div>
                                <div>
                                    <PlayVideoMovieShowTime />
                                </div>
                                <div>
                                    <PlayVideoMovieShowTime />
                                </div>

                            </div>
                            <div>
                                <div>
                                    <PlayVideoMovieShowTime />
                                </div>
                                <div>
                                    <PlayVideoMovieShowTime />
                                </div>

                            </div>
                            <div>
                                <div>
                                    <PlayVideoMovieShowTime />
                                </div>
                                <div>
                                    <PlayVideoMovieShowTime />
                                </div>

                            </div>
                            <div>
                                <div>
                                    <PlayVideoMovieShowTime />
                                </div>
                                <div>
                                    <PlayVideoMovieShowTime />
                                </div>

                            </div>
                        </Slider>

                    </div>
                </div>
                <div class="tab-pane fade" id="soon" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div className="container movieSlider" >
                        <Slider ref={ref} {...settings}>
                            <div>
                                <div>
                                    <PlayVideoMovieShowTime />
                                </div>
                                <div>
                                    <PlayVideoMovieShowTime />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <PlayVideoMovieShowTime />
                                </div>
                                <div>
                                    <PlayVideoMovieShowTime />
                                </div>

                            </div>
                            <div>
                                <div>
                                    <PlayVideoMovieShowTime />
                                </div>
                                <div>
                                    <PlayVideoMovieShowTime />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <PlayVideoMovieShowTime />
                                </div>
                                <div>
                                    <PlayVideoMovieShowTime />
                                </div>

                            </div>
                            <div>
                                <div>
                                    <PlayVideoMovieShowTime />
                                </div>
                                <div>
                                    <PlayVideoMovieShowTime />
                                </div>

                            </div>

                        </Slider>

                    </div>
                </div>

            </div>


        </div>
    )
}
