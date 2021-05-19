import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { updateInformationUser } from '../../../redux/Action/AdminAction'


export default function UpdateUser(props) {


    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            taiKhoan: props.user.taiKhoan,
            matKhau: props.user.matKhau,
            hoTen: props.user.hoTen,
            soDt: props.user.soDt,
            maLoaiNguoiDung: props.user.maLoaiNguoiDung,
            maNhom: 'GP02',
            email: props.user.email
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống'),
            matKhau: Yup.string().min(2, "Mật khẩu tối thiểu 2 ký tự").max(32, "Mật khẩu tối đa 32 ký tự"),
            hoTen: Yup.string().required('Họ tên không được bỏ trống'),
            soDt: Yup.string().required('Số điện thoại không được bỏ trống'),
            maLoaiNguoiDung: Yup.string().required('Mã loại người dùng không được bỏ trống'),
            email: Yup.string().required('Email không được bỏ trống'),
        }),
        enableReinitialize: true
    })

    const handleSubmit = () => {
        if (formik.isValid) {
            dispatch(updateInformationUser(formik.values))
        }
    }

    useEffect(() => {
        console.log(formik.values)
        return formik.values
    }, [formik.values])
    return (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Bảng cập nhật</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">
                <form onSubmit={formik.handleSubmit} enableReinitialize={formik.enableReinitialize}  >
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="taiKhoan">Tài khoản</label>
                            <input type="text" className="form-control" id="taiKhoan" disabled value={formik.values?.taiKhoan} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            <p className="text-danger">{formik.errors.taiKhoan}</p>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="matKhau">Mật khẩu</label>
                            <input type="text" className="form-control" id="matKhau" value={formik.values?.matKhau} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            <p className="text-danger">{formik.errors.matKhau}</p>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="hoTen">Họ Tên</label>
                            <input type="text" className="form-control" id="hoTen" value={formik.values?.hoTen} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            <p className="text-danger">{formik.errors.hoTen}</p>

                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="sdt">Số điện thoại</label>
                            <input type="number" className="form-control" id="soDt" value={formik.values?.soDt} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            <p className="text-danger">{formik.errors.soDt}</p>

                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="maLoaiNguoiDung">Mã loại người dùng </label>
                            <select
                                name="maLoaiNguoiDung"
                                className="custom-select"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <option value="" hidden>Chọn mã</option>
                                <option value="KhachHang">KhachHang</option>
                                <option value="QuanTri">QuanTri</option>
                            </select>
                            <p className="text-danger">{formik.errors.maLoaiNguoiDung}</p>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="maNhom">Mã nhóm</label>
                            <input type="text" className="form-control" id="maNhom" value="GP02" disabled />
                            <p className="text-danger">{formik.errors.maNhom}</p>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" value={formik.initialValues.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            <p className="text-danger">{formik.errors.email}</p>
                        </div>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={handleSubmit}>Cập nhật</button>
            </div>
        </div>
    )
}
