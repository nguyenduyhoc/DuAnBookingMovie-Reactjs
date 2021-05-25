import React from 'react'
import { NavLink, Prompt } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { loginAction } from '../../redux/Action/UsersAction'

export default function Login() {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống'),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống').min(2, "Mật khẩu tối thiểu 2 ký tự").max(32, "Mật khẩu tối đa 32 ký tự")
        }),
        onSubmit: values => {
            const action = loginAction(values);
            dispatch(action)
            // console.log(values)
        }
    })

    return (
        <div id="wrapLoginApp"  >
            <div id="loginApp">
                <div className="signin__wrapper">
                    <div>
                        <form className="container" onSubmit={formik.handleSubmit}   >
                            <img className="logoWeb text-center" src={require("../../assets/img/logo/logoWeb.png").default} alt="logoWeb" />
                            <h3>Đăng nhập</h3>
                            
                            <div className="form-group mt-5">
                            <p>Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!</p>
                                <div className="input-group-prepend">
                                    <a class="signin-btn" href="https://www.facebook.com/">
                                        <img class="signin-logo" src={require("../../assets/img/SignIn/download.png").default} alt="facebook" />
                                    </a>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group-prepend">
                                    <a class="signin-btn" href="https://stc.chat.zalo.me/">
                                        <img class="signin-logo" src={require("../../assets/img/SignIn/zaloLogin.png").default} alt="facebook" />
                                    </a>
                                </div>
                            </div>
                            <p style={{fontSize:'10px'}}>Hoặc</p>
                            <div className="form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-user" /> </span>
                                    <input className="form-control" placeholder="Tài khoản" id="taiKhoan" type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                </div>
                                <p className="text-danger">{formik.errors.taiKhoan}</p>
                            </div>
                            <div className="form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                                    <input className="form-control" placeholder="Mật khẩu" id="matKhau" type="password" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                </div>
                                <p className="text-danger">{formik.errors.matKhau}</p>
                            </div>
                            <p className="text-center">Bạn chưa có tài khoản ?  <NavLink className="text-danger" to="/register">Đăng ký</NavLink> </p>
                            {/* Modal footer */}
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-success" onClick={formik.handleSubmit}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
