import React, { useEffect, useState } from "react";
import Carousel from '../Pages/Carousel/Carousel'
import MovieShowtime from '../Pages/MovieShowtime/MovieShowtime'
import Cinema from '../Pages/Cinema/Cinema'
import News from '../Pages/News/News'
import Footer from './Footer/Footer'
import Application from '../Pages/Application/Application'
import Header from './Header/Header'
import Lottie from 'react-lottie';
import * as location from '../movieGif.json'
import * as success from '../success.json'



export default function Home() {

  // Loading Page
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: location.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: success.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          // console.log(json);
          setData(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 500);
        });
    }, 2000);
  }, []);
  return (
    <>
      {!completed ? (
        <>
          <div style={{ marginTop: 330 }}>
            {!loading ? (
              <Lottie options={defaultOptions1} height={200} width={200} />
            ) : (
              <Lottie options={defaultOptions2} height={100} width={100} />
            )}
          </div>
        </>
      )
        : (
          <div>
            <Carousel />
            <MovieShowtime />
            <Cinema />
            <News />
            <Application />
            <Footer />
          </div>
        )}
    </>
  );
}