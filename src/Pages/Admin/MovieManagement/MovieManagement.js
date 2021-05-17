import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteMovieAction, getAllMovieAction, getAllMoviePage } from '../../../redux/Action/MovieAction'
import Pagination from "react-js-pagination";
import AddMovie from './AddMovie';
import UpdateMovie from './UpdateMovie';

export default function MovieManagement() {
    // searchMovie:
    const { allMovie, allMoviePage } = useSelector(state => state.MovieReducer)
    // console.log(allMovie)
    const dispatch = useDispatch();
    // search value for movie 
    const [searchValue, setSearchValue] = useState('')
    //Pagination:
    const [state, setState] = useState({
        activePage: 1
    })
    // Update Movie
    const [updateMovie, setUpdateMovie] = useState(true)
    // Choose IDs for update
    const [movieID, setMovieID] = useState("");

    // searchValue
    const handleValue = (e) => {
        setSearchValue(e.target.value)
    }
    // pagination
    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        const newState = { activePage: pageNumber }
        setState(newState);
        dispatch(getAllMoviePage(pageNumber))
    }
    // console.log(allMoviePage)
    let countAllMovie = 0;
    for (let i = 0; i < allMovie.length; i++) {
        countAllMovie++
    }
    // console.log(countAllMovie)
    const renderMovieSearch = () => {
        let arrayItem = allMovie.filter(id => id.tenPhim?.toLowerCase().includes(searchValue.toLowerCase()))
        return arrayItem.map((movie, index) => {
            return <tr key={index}>
                <td>{index += 1}</td>
                <td>{movie?.maPhim}</td>
                <td>{movie?.tenPhim}</td>
                <td>{movie?.biDanh}</td>
                <td>{movie?.trailer}</td>
                <td>{movie?.ngayKhoiChieu}</td>
                <td>{movie?.maNhom}</td>
                <img style={{ width: 100 }} src={movie?.hinhAnh} alt={movie?.tenPhim}></img>
                <td>{movie?.moTa}</td>
                <td><button className="btn btn-primary"
                    data-toggle="modal" data-target="#exampleModal"
                    onClick={() => {
                        setMovieID(movie)
                        setUpdateMovie(false)
                    }}
                >Cập nhật</button></td>
                <td><button className="btn btn-danger" onClick={() => {
                    dispatch(deleteMovieAction(movie?.maPhim))
                }}>Xóa</button></td>
            </tr>
        })
    }

    const renderAllMoviePage = () => {
        return allMoviePage.items?.map((movie, index) => {
            return <tr key={index}>
                <td>{index += 1}</td>
                <td>{movie?.maPhim}</td>
                <td>{movie?.tenPhim}</td>
                <td>{movie?.biDanh}</td>
                <td>{movie?.trailer}</td>
                <td>{movie?.ngayKhoiChieu}</td>
                <td>{movie?.maNhom}</td>
                <img style={{ width: 100 }} src={movie?.hinhAnh} alt={movie?.tenPhim}></img>
                <td>{movie?.moTa}</td>
                <td><button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
                    onClick={() => {
                        setMovieID(movie)
                        setUpdateMovie(false)
                    }}>Cập nhật</button></td>
                <td><button className="btn btn-danger" onClick={() => {
                    dispatch(deleteMovieAction(movie?.maPhim))
                }}>Xóa</button></td>
            </tr>
        })
    }

    useEffect(() => {
        dispatch(getAllMoviePage(1))
        dispatch(getAllMovieAction())
    }, [])
    return (
        <div>
            <div>
                <nav className="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow navbarAdmin ">
                    <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="/admin">Admin</a>
                    <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <input className="form-control form-control-dark w-100" type="text" placeholder="Nhập tên phim" aria-label="Search" onChange={handleValue} />
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
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                            <nav className="my-3" aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/admin">Admin</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Movie Management</li>
                                </ol>
                            </nav>
                            <div className="row">
                                <div className="m-3">
                                    {/* Button trigger modal */}
                                    <button className="btn btn-warning" data-toggle="modal" data-target="#exampleModal"
                                        onClick={() => {
                                            setUpdateMovie(true)
                                        }} >
                                        Thêm phim
  </button>

                                </div>
                                <div className="col-md-12">
                                    <div className="col-4">
                                        <Pagination
                                            itemClass="page-item"
                                            linkClass="page-link"
                                            activePage={state.activePage}
                                            itemsCountPerPage={1}
                                            totalItemsCount={countAllMovie / 10}
                                            pageRangeDisplayed={5}
                                            onChange={handlePageChange.bind()}
                                        />
                                    </div>
                                    <div className="table">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>STT</th>
                                                    <th>Mã phim</th>
                                                    <th>Tên phim</th>
                                                    <th>Bí danh</th>
                                                    <th>Link trailer</th>
                                                    <th>Ngày khởi chiếu</th>
                                                    <th>Mã nhóm</th>
                                                    <th>Hình Ảnh</th>
                                                    <th>Mô tả</th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>

                                            </thead>
                                            <tbody>
                                                {searchValue === '' ? renderAllMoviePage() : renderMovieSearch()}
                                            </tbody>
                                        </table>

                                    </div>

                                </div>

                            </div>
                        </main>
                    </div>
                </div>
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        {updateMovie ? <AddMovie /> : <UpdateMovie movie={movieID} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

