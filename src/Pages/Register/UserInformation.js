/* eslint-disable no-sequences */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateInformationUser, userInformationAction } from '../../redux/Action/UsersAction'
import * as Yup from 'yup'
import { useFormik } from 'formik'

export default function UserInformation() {
    const dispatch = useDispatch()
    const { user, userInformation } = useSelector(state => state.UsersReducer)
    // console.log(user.taiKhoan)
    const formik = useFormik({
        initialValues: {
            taiKhoan: user.taiKhoan,
            matKhau: '',
            hoTen: user.hoTen,
            soDT: user.soDT,
            maLoaiNguoiDung: user.maLoaiNguoiDung,
            maNhom: 'GP02',
            email: user.email
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống'),
            matKhau: Yup.string().min(2, "Mật khẩu tối thiểu 2 ký tự").max(32, "Mật khẩu tối đa 32 ký tự"),
            hoTen: Yup.string().required('Họ tên không được bỏ trống'),
            soDt: Yup.string().required('Số điện thoại không được bỏ trống'),
            maLoaiNguoiDung: Yup.string().required('Mã loại người dùng không được bỏ trống'),
            email: Yup.string().required('Email không được bỏ trống'),
        }),

    })
    // console.log(formik.values)
    const handleSubmit = () => {
        // console.log(formik.isValid)
        // console.log(formik.values)
        dispatch(updateInformationUser(formik.values))
    }
    useEffect(() => {
        dispatch(userInformationAction(user))
    }, [dispatch, user])


    console.log(userInformation?.thongTinDatVe)
    const renderTableUser = () => {
        return userInformation?.thongTinDatVe?.map((item, index) => {
            return item.danhSachGhe.map((chair, index1) => {
                return <tr key={index,index1}>
                    <td>{item.tenPhim}</td>
                    <td>{(item.ngayDat).split('T')[0]}</td>
                    <td>{(item.ngayDat).split('T')[1]}</td>
                    <td>{chair.tenHeThongRap} </td>
                    <td>{chair.tenGhe}</td>
                    <td>{item.giaVe} </td>
                </tr>
            })
        })
    }

    return (
        <div>
            <div className="container rounded bg-white mt-5 mb-5">
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                      
                        <div className="col-md-5 border-right">
                            <div className="p-3 py-5" >
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="text-right">Cập nhật người dùng</h4>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label className="labels">Họ và Tên</label>
                                        <input name="hoTen" type="text" className="form-control" defaultValue={user.hoTen} onChange={formik.handleChange} />
                                        <p className="text-danger">{formik.errors.hoTen}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">Mật khẩu</label>
                                        <input name="matKhau" type="text" className="form-control" defaultValue={user.matKhau} onChange={formik.handleChange} />
                                        <p className="text-danger">{formik.errors.matKhau}</p>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <label className="labels">Số điện thoại</label>
                                        <input name="soDT" type="text" className="form-control" defaultValue={user.soDT} onChange={formik.handleChange} />
                                        <p className="text-danger">{formik.errors.soDT}</p>
                                    </div>
                                    <div className="col-md-12"><label className="labels">Mã nhóm</label><input type="text" className="form-control" defaultValue={user.maNhom} disabled /></div>
                                    <div className="col-md-12"><label className="labels">Mã loại người dùng</label><input type="text" className="form-control" defaultValue={user.maLoaiNguoiDung} disabled /></div>
                                </div>
                                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={handleSubmit}>Cập nhật</button></div>
                            </div>
                        </div>
                    </div>
                </form>
                <div>
                    <h3>Lịch sử đặt vé:</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Tên Phim</th>
                                <th>Ngày dặt</th>
                                <th>Giờ đặt</th>
                                <th>Địa điểm</th>
                                <th>Só ghế</th>
                                <th>Giá vé</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTableUser()}
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    )
}
