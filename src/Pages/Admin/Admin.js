import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Admin() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow navbarAdmin ">
                <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="/admin">Admin</a>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
            </nav>
            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="sidebar-sticky pt-3">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" to='/admin/UsersManagement' >
                                        Quản lý người dùng <span className="sr-only">(current)</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/admin/MovieManagement">
                                        Quản lý phim
              </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/admin/CalendarMovieManagement">
                                        Quản lý lịch chiếu
              </NavLink>
                                </li>

                            </ul>
                        </div>
                    </nav>

                </div>
            </div>
        </div>

    )
}

