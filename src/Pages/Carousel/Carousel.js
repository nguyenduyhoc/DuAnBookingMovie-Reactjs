import React from "react";
import Slider from "react-slick";
import FindMovieBox from './FindMovieBox.js'
import PlayVideoCarousel from './PlayVideoCarousel.js'

export default function Carousel() {

    return (
        <div>
            <div id="demo" className="carousel slide " data-ride="carousel">
                <ul className="carousel-indicators">
                    <li style={{marginBottom: '40px'}} data-target="#demo" data-slide-to={0} className="active" />
                    <li style={{marginBottom: '40px'}} data-target="#demo" data-slide-to={1} />
                    <li style={{marginBottom: '40px'}} data-target="#demo" data-slide-to={2} />
                </ul>
                <div className="carousel-inner">       
                    <PlayVideoCarousel />           
                </div>

                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon" />
                </a>
            </div>

            <FindMovieBox />
        </div>


    )
}
