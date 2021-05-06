import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navBarHeader">
                    <NavLink className="navbar-brand" to="/"><img className="logoWeb" src="./img/logo/logoWeb.png" alt="logoWeb" /></NavLink>
                    <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#collapsingNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                       
                    </button>
                    <div className="collapse navbar-collapse" id="collapsingNavbar">
                        <ul className="navbar-nav mt-2 mt-lg-0 container justify-content-center">
                            <li className="nav-link">
                                <a className="nav-link" href="#movieSchedule">Movie schedule</a>
                            </li>
                            <li className="nav-link">
                                <a className="nav-link" href="#cinema">Cinema</a>
                            </li>
                            <li className="nav-link">
                                <a className="nav-link" href="#news">News</a>
                            </li>
                            <li className="nav-link">
                                <a className="nav-link" href="#application">Application</a>
                            </li>
                        </ul>
                        <ul className=" navbar-nav  collapse" >
                            <li className="nav-link">
                                <NavLink activeClassName="text-danger" activeStyle={{ backgroundColor: 'pink' }} className="nav-link" to="/login">Login</NavLink>
                                
                            </li>
                            <li className="nav-link">
                                <NavLink activeClassName="text-danger" activeStyle={{ backgroundColor: 'pink' }} className="nav-link" to="/register">Register</NavLink>
                            </li>
    
            

                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}
