import React from "react";
import {
  Router,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./Components/Header/Header"
import Home from "./Components/Home";
import Login from "./Pages/Login/Login";
import './assets/scss/main.scss'
import './assets/scss/Vendor/slick-carousel/slick/slick-theme.css';
import './assets/scss/Vendor/slick-carousel/slick/slick.css';

import { createBrowserHistory} from 'history';
import Detail from "./Pages/Detail/Detail";
import Footer from "./Components/Footer/Footer";
import Admin from "./Pages/Admin/Admin";
import SellTicket from "./Pages/SellTicket/SellTicket";
export const history = createBrowserHistory();




function App(props) {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/home"component={Home} />
        <Route exact path="/login"  component={Login} />
        <Route exact path="/detail" component={Detail}  />
        <Route exact path="/admin"  component={Admin} />
        <Route exact path="/sellticket"  component={SellTicket} />
        <Route exact  path="/"  component={Home} />
        <Route path="*" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
