import React from 'react'
import { NavLink } from 'react-router-dom'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { registerAction } from '../../redux/Action/UsersAction'

export default function Register() {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: 'GP02',
            maLoaiNguoidung: 'KhachHang',
            hoTen: '',
            matKhauConfirmation: ''
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống'),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống').min(2, "Mật khẩu tối thiểu 2 ký tự").max(32, "Mật khẩu tối đa 32 ký tự"),
            matKhauConfirmation: Yup.string()
                .oneOf([Yup.ref('matKhau'), null], 'Mật khẩu không trùng khớp'),
            hoTen: Yup.string().required('Họ tên không được bỏ trống'),
            soDt: Yup.string().required('Số điện thoại không được bỏ trống'),
            email: Yup.string().required('Email không được bỏ trống'),
        }),
        // // onSubmit: values => {
        // //     console.log(values)
        // //     const action = registerAction(values);
        // //     dispatch(action)

        // },

    })
    const handleSubmit = () => {
        console.log(formik.isValid)
        console.log(formik.values)
        if (formik.isValid) {
            console.log(formik.values)
            dispatch(registerAction(formik.values))
        }
    }
    console.log(formik.values)
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
                                    <input className="form-control" placeholder="Create password" id="matKhau" type="password" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                </div>
                                <p className="text-danger">{formik.errors.matKhau}</p>
                            </div>
                            <div className="form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                                    <input className="form-control" placeholder="Repeat password" id="matKhauConfirmation" type="password" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                </div>
                                <p className="text-danger">{formik.errors.matKhauConfirmation}</p>
                            </div>
                            <div className="form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-user" /> </span>
                                    <input className="form-control" placeholder="Họ và tên" id="hoTen" type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                </div>
                                <p className="text-danger">{formik.errors.hoTen}</p>
                            </div>
                            <div className="form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                                    <input className="form-control" placeholder="Email" type="email" id="email" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                </div>
                                <p className="text-danger">{formik.errors.email}</p>
                            </div>
                            <div className="form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-phone" /> </span>
                                    <input className="form-control" placeholder="Phone number" type="text" id="soDt" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                </div>
                                <p className="text-danger">{formik.errors.soDt}</p>
                            </div>


                            <div className="form-group">
                                <button type="button" className="btn btn-primary btn-block" onClick={handleSubmit}> Create Account</button>
                            </div>
                            <p className="text-center">Have an account?  <NavLink activeClassName="text-danger" to="/login">Login</NavLink> </p>
                        </form>
                    </article>
                </div>
            </div>

        </div>
    )
}
