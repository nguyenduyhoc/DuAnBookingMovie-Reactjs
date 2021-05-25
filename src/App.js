import React, { useEffect, useState } from "react";
import {
  Router,
  Route,
  Switch
} from "react-router-dom";
import Header from "./Components/Header/Header"
import Home from "./Components/Home";
import Login from "./Pages/Login/Login";
import './assets/scss/main.scss'
import './assets/scss/Vendor/slick-carousel/slick/slick-theme.css';
import './assets/scss/Vendor/slick-carousel/slick/slick.css';

import { createBrowserHistory } from 'history';
import Detail from "./Pages/Detail/Detail";
import Admin from "./Pages/Admin/Admin";
import SellTicket from "./Pages/SellTicket/SellTicket";
import Register from "./Pages/Register/Register";
import UsersManagement from "./Pages/Admin/UsersManagement/UsersManagement";
import MovieManagement from "./Pages/Admin/MovieManagement/MovieManagement";
import CalendarMovieManagement from "./Pages/Admin/CalendarManagement/CalendarMovieManagement";
import UserInformation from "./Pages/Register/UserInformation";
import Lottie from 'react-lottie';
import * as location from '../src/movieGif.json'
import * as success from '../src/success.json'

export const history = createBrowserHistory();


function App() {

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
          console.log(json);
          setData(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 1000);
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
          <Router history={history}>
            <Header />
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/UserInformation" component={UserInformation} />
              <Route exact path="/detail/:id" component={Detail} />
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/admin/UsersManagement" component={UsersManagement} />
              <Route exact path="/admin/MovieManagement" component={MovieManagement} />
              <Route exact path="/admin/CalendarMovieManagement" component={CalendarMovieManagement} />
              <Route exact path="/sellticket/:movieid" component={SellTicket} />
              <Route exact path="/" component={Home} />
              <Route path="*" component={Home} />
            </Switch>
          </Router>
        )}
    </>
  );
}

export default App;
