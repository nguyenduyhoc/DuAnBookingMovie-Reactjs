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
        <div id="wrapLoginApp">
            <div id="loginApp">
                <div className="modal-dialog">
                    <div className="modal-content" >
                        <form className="container" onSubmit={formik.handleSubmit}   >
                            <h3>Login</h3>
                            <div className="form-group">
                                <p>User Name: </p>
                                <input className="form-control" type="text" name="taiKhoan" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                <p className="text-danger">{formik.errors.taiKhoan}</p>
                            </div>
                            <div className="form-group">
                                <p>Password: </p>
                                <input type="password" className="form-control" name="matKhau" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                <p className="text-danger">{formik.errors.matKhau}</p>
                            </div>

                            {/* Modal footer */}
                            <div className="modal-footer">
                                <NavLink to="/"><button type="button" className="btn btn-danger" data-dismiss="modal">Close</button></NavLink>
                                <button type="button" className="btn btn-success" onClick={formik.handleSubmit}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
