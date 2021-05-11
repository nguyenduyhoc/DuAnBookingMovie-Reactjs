import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Register() {
    return (
        <div>
            <div className="register">
                <div className="card bg-light">
                    <article className="card-body mx-auto" style={{ maxWidth: 400 }}>
                        <h4 className="card-title mt-3 text-center">Create Account</h4>
                        <p className="text-center">Get started with your free account</p>
                        <p>
                            <a href className="btn btn-block btn-twitter"> <i className="fab fa-twitter" /> &nbsp; Login via Twitter</a>
                            <a href className="btn btn-block btn-facebook"> <i className="fab fa-facebook-f" /> &nbsp; Login via facebook</a>
                        </p>
                        <p className="divider-text">
                            <span className="bg-light">OR</span>
                        </p>
                        <form>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-user" /> </span>
                                </div>
                                <input name className="form-control" placeholder="Tài khoản" id="taiKhoan" type="text" />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                                </div>
                                <input className="form-control" placeholder="Create password" id="matkhau" type="password" />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                                </div>
                                <input className="form-control" placeholder="Repeat password" id="matkhau" type="password" />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-user" /> </span>
                                </div>
                                <input name className="form-control" placeholder="Họ và tên" id="hoVaTen" type="text" />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                                </div>
                                <input name className="form-control" placeholder="Email" type="email" />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-phone" /> </span>
                                </div>
                                <input name className="form-control" placeholder="Phone number" type="text" />
                            </div>
                        
                        
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block"> Create Account</button>
                            </div>
                            <p className="text-center">Have an account?  <NavLink activeClassName="text-danger" to="/login">Login</NavLink> </p>
                        </form>
                    </article>
                </div>
            </div>

        </div>
    )
}
