import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Slider from "react-slick";
import { getAllMovieAction } from '../../redux/Action/MovieAction.js';
import FindMovieBox from './FindMovieBox.js'
import PlayVideo from './PlayVideo'
import { NavLink } from 'react-router-dom'

export default function Carousel() {
  
    const { allMovie } = useSelector(state => state.MovieReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllMovieAction())
    }, [dispatch])
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
                speed: 1000,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2,
                speed: 1000,
                dots: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                dots: false,
              }
            }
          ]
    };

    const renderCarousel = () => {
        return allMovie.map((movie, index) => {
            return <div key={index} className="imgCarousel">
                <NavLink to={`/detail/${movie.maPhim}`}><img style={{ width: '100%', height: "500px" }} src={movie.hinhAnh} alt={movie.tenPhim} /> </NavLink>
                <div className="text-center">
                    <PlayVideo movie={movie} />
                </div>
            </div>
        })
    }

    return (
        <div className="container-fluid p-5" >
            <Slider {...settings}>
                    {renderCarousel()}
            </Slider>

            <FindMovieBox />
        </div>


    )
}
