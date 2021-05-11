import React from 'react'
import Carousel from '../Pages/Carousel/Carousel'
import MovieShowtime from '../Pages/MovieShowtime/MovieShowtime'
import Cinema from '../Pages/Cinema/Cinema'
import News from '../Pages/News/News'
import Footer from './Footer/Footer'
import Application from '../Pages/Application/Application'


export default function Home(props) {
    return (
        <div>
          <Carousel />
          <MovieShowtime />
          <Cinema />
          <News />
          <Application />
          <Footer />          
        </div>
    )
}
