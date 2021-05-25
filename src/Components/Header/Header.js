
import React from 'react'
import { useSelector } from 'react-redux'
import DropDownAdmin from '../../Pages/Login/DropDownAdmin'
import LogInLogOutButton from '../../Pages/Login/LogInLogOutButton'

export default function Header() {
    const { taiKhoan } = useSelector(state => state.UsersReducer)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navBarHeader">
                <a className="navbar-brand" href="/"><img className="logoWeb" src={require("../../assets/img/logo/logoWeb.png").default} alt="logoWeb" /></a>
                <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#collapsingNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>

                </button>
                <div className="collapse navbar-collapse" id="collapsingNavbar">
                    <ul className="navbar-nav mt-2 mt-lg-0 container justify-content-center">
                        <li className="nav-link">
                            <a className="btnHeader" href="/#movieSchedule" >Lịch chiếu</a>
                        </li>
                        <li className="nav-link">
                            <a className="btnHeader" href="/#cinema" >Cụm rạp</a>
                        </li>
                        <li className="nav-link">
                            <a className="btnHeader" href="/#news" >Tin tức</a>
                        </li>
                        <li className="nav-link">
                            <a className="btnHeader" href="/#application" >Ứng dụng</a>
                        </li>
                    </ul>
                    <ul className=" navbar-nav  collapse" >
                        <li className="nav-link">
                            {taiKhoan.trim() !== '' ? <DropDownAdmin /> : <LogInLogOutButton />}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
