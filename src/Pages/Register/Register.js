import React from 'react'
import { NavLink } from 'react-router-dom'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { registerAction } from '../../redux/Action/UsersAction'
import { phoneRegex } from '../../util/Setting'

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
            soDt: Yup.string().matches(phoneRegex, 'Số điện thoại không đúng định dạng'),
            email: Yup.string().required('Email không được bỏ trống'),
        }),

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

            <div className="card register">
                <div className="register__wrappe">
                    <article className="card-body" >
                        <img className="logoWeb text-center" src={require("../../assets/img/logo/logoWeb.png").default} alt="logoWeb" />
                        <h4 className="card-title mt-3 text-center">Tạo tài khoản</h4>
                        <form className="mt-5">
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
                            <div className="form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                                    <input className="form-control" placeholder="Nhập lại mật khẩu" id="matKhauConfirmation" type="password" onBlur={formik.handleBlur} onChange={formik.handleChange} />
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
                                <button type="button" className="btn btn-primary btn-block" onClick={handleSubmit}> Tạo tài khoản</button>
                            </div>
                            <p className="text-center">Bạn đã có tài khoản ?  <NavLink className="text-danger" to="/login">Đăng nhập</NavLink> </p>
                        </form>
                    </article>
                </div>
            </div>


        </div>
    )
}
