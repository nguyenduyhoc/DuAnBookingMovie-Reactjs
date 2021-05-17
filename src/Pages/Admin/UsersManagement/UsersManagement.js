import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deletedUser, getAllUser, getAllUserPage } from '../../../redux/Action/AdminAction';
import Pagination from "react-js-pagination";
import AddUser from '../UsersManagement/AddUser';
import UpdateUser from '../UsersManagement/UpdateUser';

export default function UsersManagement() {
    const dispatch = useDispatch();
    // Search User
    const { allUser, allUserPage } = useSelector(state => state.AdminReducer)
    // Search value input
    const [searchValue, setSearchValue] = useState('')
    // Set Update User
    const [addUpdateUser, setAddUpdateUser] = useState(true)
    // Set pagination
    const [pageNumber, setPageNumber] = useState(1);
    // Choose IDs for update
    const [userID, setUserID] = useState("");
    //Paginatiopn
    const [state, setState] = useState({
        activePage: 1
    })
    // Checked handle value
    const handleValue = (e) => {
        setSearchValue(e.target.value)
    }
    // for pagination
    let countAllUser = 0;
    for (let i = 0; i < allUser.length; i++) {
        countAllUser++
    }
    const handlePageChange = (pageNumber) => {
        // console.log(`active page is ${pageNumber}`);
        const newState = { activePage: pageNumber }
        setState(newState);
        setPageNumber(pageNumber)
        dispatch(getAllUserPage(pageNumber))
        console.log(pageNumber)
    }
    // console.log(arrUser)
    const renderSearch = () => {
        let arrItem = allUser.filter(id => (id.taiKhoan?.toLowerCase().includes(searchValue.toLowerCase()) || id.hoTen?.toLowerCase().includes(searchValue.toLowerCase())))
        console.log(arrItem)
        return arrItem.map((item, index) => {
            return <tr key={index}>
                <td>{(pageNumber - 1) * 10 + index + 1} </td>
                <td>{item?.taiKhoan}</td>
                <td>{item?.matKhau}</td>
                <td>{item?.hoTen}</td>
                <td>{item?.sdt}</td>
                <td>{item?.maLoaiNguoiDung}</td>
                <td>{item?.maNhom}</td>
                <td>{item?.email}</td>
                <td><button data-toggle="modal" data-target="#exampleModal" className="btn btn-primary" onClick={() => {
                    setUserID(item)
                    setAddUpdateUser(false)
                    // console.log(item)
                }}>Cập nhật</button></td>
                <td><button className="btn btn-danger" onClick={() => {
                    dispatch(deletedUser(item.taiKhoan))
                }} >Xóa</button></td>
            </tr>
        })

    }
    const renderAllUserPage = () => {
        return allUserPage.items?.map((user, index) => {
            return <tr key={index}>
                <td>{(pageNumber - 1) * 10 + index + 1}</td>
                <td>{user?.taiKhoan}</td>
                <td>{user?.matKhau}</td>
                <td>{user?.hoTen}</td>
                <td>{user?.sdt}</td>
                <td>{user?.maLoaiNguoiDung}</td>
                <td>{user?.maNhom}</td>
                <td>{user?.email}</td>
                <td><button data-toggle="modal" data-target="#exampleModal" className="btn btn-primary" onClick={() => {
                    setUserID(user)
                    setAddUpdateUser(false)
                    // console.log(user)
                }} >Cập nhật</button></td>
                <td><button className="btn btn-danger" onClick={() => {
                    dispatch(deletedUser(user.taiKhoan))
                }}>Xóa</button></td>
            </tr>
        })
    }
    useEffect(() => {
        dispatch(getAllUser())
        dispatch(getAllUserPage(1))
    }, [dispatch])

    return (
        <div>
            <div>
                <nav className="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow navbarAdmin ">
                    <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="/admin">Admin</a>
                    <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>


                </nav>
                <div className="container-fluid">
                    <div className="row">
                        <nav id="sidebarMenu" className="col-md-2 col-lg-2 d-md-block bg-light sidebar collapse">
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
                        <main role="main" className="col-md-10 ml-sm-auto col-lg-10 px-md-4">
                            <nav className="my-3" aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/admin">Admin</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">User Management</li>
                                </ol>
                            </nav>

                            <div>
                                <div className="m-3">
                                    <button data-toggle="modal" data-target="#exampleModal" className="btn btn-warning" onClick={() => {
                                        setAddUpdateUser(true)
                                    }} >Thêm thành viên</button>

                                </div>
                                <div className="row mt-3">
                                    <div className="col-6">
                                        <input
                                            className="form-control form-control-dark w-100"
                                            type="text"
                                            placeholder="Nhập họ tên hoặc tài khoản"
                                            aria-label="Search"
                                            onChange={handleValue}
                                        />
                                    </div>

                                    <div className="col-4">
                                        <Pagination
                                            itemClass="page-item"
                                            linkClass="page-link"
                                            activePage={state.activePage}
                                            itemsCountPerPage={1}
                                            totalItemsCount={countAllUser / 10}
                                            pageRangeDisplayed={5}
                                            onChange={handlePageChange.bind()}
                                        />
                                    </div>
                                </div>

                                <div className="table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>Tài khoản</th>
                                                <th>Mật khẩu</th>
                                                <th>Họ Tên</th>
                                                <th>Sđt</th>
                                                <th>Mã loại người dùng</th>
                                                <th>Mã nhóm</th>
                                                <th>Email</th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {searchValue === "" ? renderAllUserPage() : renderSearch()}
                                        </tbody>
                                    </table>


                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        {addUpdateUser ? <AddUser /> : <UpdateUser user={userID} />}

                    </div>
                </div>
            </div>
        </div>
    )
}
