import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LogInLogOutButton() {
    return (
        <div className="d-flex">
            <li className="nav-link">
                <NavLink activeClassName="text-danger" activeStyle={{ backgroundColor: 'pink' }} className="nav-link" to="/login" data-toggle="collapse" data-target="#collapsingNavbar" aria-expanded="false">Đăng nhập</NavLink>
            </li>
            <li className="nav-link ml-3">
                <NavLink activeClassName="text-danger" activeStyle={{ backgroundColor: 'pink' }} className="nav-link" to="/register" data-toggle="collapse" data-target="#collapsingNavbar" aria-expanded="false">Đăng ký</NavLink>
            </li>
        </div>
    )
}
