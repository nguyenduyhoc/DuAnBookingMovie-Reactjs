import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { addUser } from '../../../redux/Action/AdminAction'

export default function AddUser() {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            soDt: '',
            maLoaiNguoiDung: '',
            maNhom: 'GP02',
            email: ''
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống'),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống').min(2, "Mật khẩu tối thiểu 2 ký tự").max(32, "Mật khẩu tối đa 32 ký tự"),
            hoTen: Yup.string().required('Họ tên không được bỏ trống'),
            soDt: Yup.string().required('Số điện thoại không được bỏ trống'),
            maLoaiNguoiDung: Yup.string().required('Mã loại người dùng không được bỏ trống'),
            email: Yup.string().required('Email không được bỏ trống'),
        }),
    })

    const handleSubmit = () => {
        if (formik.isValid) {
            // console.log(formik.values)
            dispatch(addUser(formik.values))
        }
    }

    return (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Thêm thành viên</h5>
            </div>
            <div className="modal-body">
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="taiKhoan">Tài khoản</label>
                            <input type="text" className="form-control" id="taiKhoan" placeholder="Nhập tài khoản" onChange={formik.handleChange} />
                            <p className="text-danger">{formik.errors.taiKhoan}</p>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="matKhau">Mật khẩu</label>
                            <input type="text" className="form-control" id="matKhau" placeholder="Nhập mật khẩu" onChange={formik.handleChange} />
                            <p className="text-danger">{formik.errors.matKhau}</p>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="hoTen">Họ Tên</label>
                            <input type="text" className="form-control" id="hoTen" placeholder="Nhập họ và tên" onChange={formik.handleChange} />
                            <p className="text-danger">{formik.errors.hoTen}</p>

                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="sdt">Số điện thoại</label>
                            <input type="number" className="form-control" id="soDt" placeholder="Nhập số điện thoại" onChange={formik.handleChange} />
                            <p className="text-danger">{formik.errors.sdt}</p>

                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="maLoaiNguoiDung">Mã loại người dùng </label>
                            <select
                                name="maLoaiNguoiDung"
                                className="custom-select"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}>
                                <option value="" hidden>Chọn mã</option>
                                <option value="KhachHang">KhachHang</option>
                                <option value="QuanTri">QuanTri</option>
                            </select>
                            <p className="text-danger">{formik.errors.maLoaiNguoiDung}</p>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="maNhom">Mã nhóm</label>
                            <input type="text" className="form-control" id="maNhom" placeholder="GP02" disabled />
                            <p className="text-danger">{formik.errors.maNhom}</p>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Nhập email" onChange={formik.handleChange} />
                            <p className="text-danger">{formik.errors.email}</p>
                        </div>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" id="btnThemThanhVien" className="btn btn-warning" onClick={handleSubmit}>Thêm thành viên</button>
            </div>
        </div>
    )
}

