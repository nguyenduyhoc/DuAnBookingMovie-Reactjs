import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { history } from '../../App'

export default function DropDownAdmin(props) {
    const { user } = useSelector(state => state.UsersReducer)
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch({
            type: "LOGOUT"
        })
        localStorage.removeItem('USER_LOGIN')
        localStorage.removeItem('ACCESS_TOKEN')
        alert('Đăng xuất thành công')
        history.push('/');
    }
    return (
        <div className="mr-5">
            <div className="dropdown">
                <button className="btn dropdown-toggle" style={{ background: "transparent" }} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {user.taiKhoan}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {user.maLoaiNguoiDung === "QuanTri" ? <NavLink to="/admin"><button className="dropdown-item">Admin</button></NavLink> : ""}
                    <NavLink to="/UserInformation"><button className="dropdown-item">Thông tin cá nhân</button></NavLink>
                    <button onClick={handleLogOut} className="dropdown-item">Đăng xuất</button>
                </div>
            </div>
        </div>

    )
}
