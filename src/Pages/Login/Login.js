import React from 'react'
import '../../assets/scss/main.scss'
import { NavLink, Prompt } from 'react-router-dom'

export default function Login(props) {
    return (
        <div id="wrapLoginApp">
            <div id="loginApp">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form className="container" >
                            <h3>Login</h3>
                            <div className="form-group">
                                <p>User Name: </p>
                                <input className="form-control" name="taiKhoan" />
                            </div>
                            <div className="form-group">
                                <p>Password: </p>
                                <input type="password" className="form-control" name="matKhau" />
                            </div>
                        </form>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <NavLink to="/"><button type="button" className="btn btn-danger" data-dismiss="modal">Close</button></NavLink>
                            <button className="btn btn-success">Login</button>
                        </div>
                    </div>
                </div>
            </div> 
            {/* <Prompt when={true} message={(location)=>{
                return "Bạn có chắc muốn rời khỏi trang này ?"
            }} /> */}
        </div>
    )
}
