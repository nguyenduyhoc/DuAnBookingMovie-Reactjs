import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { addMovieAction } from '../../../redux/Action/MovieAction'
import { formatDate } from '../../../util/GetDateFormatted'

export default function AddMovie() {
    // Get date
    // var today = new Date();
    // var dd = String(today.getDate()).padStart(2, '0');
    // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    // var yyyy = today.getFullYear();

    // today = dd + '/' + mm + '/' + yyyy;
    // const [day, setDay] = useState('')
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            maPhim: 0,
            tenPhim: "",
            biDanh: "",
            trailer: "",
            hinhAnh: "",
            moTa: "",
            maNhom: "GP02",
            ngayKhoiChieuValue: "",
            danhGia: 0
        },
        validationSchema: Yup.object().shape({
            maPhim: Yup.string().required('Mã phim không được bỏ trống'),
            tenPhim: Yup.string().required('tên phim không được bỏ trống'),
            biDanh: Yup.string().required('Bí danh không được bỏ trống'),
            trailer: Yup.string().required('Trailer không được bỏ trống'),
            hinhAnh: Yup.string().required('Hình ảnh người dùng không được bỏ trống'),
            moTa: Yup.string().required('Mô tả không được bỏ trống'),
            danhGia: Yup.string().required('Đánh giá không được bỏ trống')
        }),
    })

    console.log(formik.values)
    const handleSubmit = () => {
        const ngayKhoiChieu = formatDate(formik.values.ngayKhoiChieuValue)
        const finalData = {...formik.values, ngayKhoiChieu } 
        // console.log(finalData)
        if (formik.isValid) {
            dispatch(addMovieAction(finalData))
        }
    }
    return (
        <div>
            <div className="card-body">
                <form className="needs-validation" id="foodForm" onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="maPhim">Mã phim</label>
                            <input type="text" className="form-control" id="maPhim" placeholder="Nhập mã phim" onChange={formik.handleChange} />
                            <p className="text-danger">{formik.errors.maPhim}</p>

                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="tenPhim">Tên phim</label>
                            <input type="text" className="form-control" id="tenPhim" placeholder="Nhập tên phim" onChange={formik.handleChange} />
                            <p className="text-danger">{formik.errors.tenPhim}</p>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="biDanh">Bí danh</label>
                            <input type="text" className="form-control" id="biDanh" placeholder="Nhập bí danh" onChange={formik.handleChange} />
                            <p className="text-danger">{formik.errors.biDanh}</p>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="trailer">Link trailer</label>
                            <input type="text" className="form-control" id="trailer" placeholder="Nhập link" onChange={formik.handleChange} />
                            <p className="text-danger">{formik.errors.trailer}</p>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="ngayKhoichieu">Ngày khởi chiếu</label>
                            <input type="date" className="form-control" id="ngayKhoiChieuValue"
                                onChange={formik.handleChange} />
                            <p className="text-danger">{formik.errors.ngayKhoiChieu}</p>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="danhGia">Đánh giá</label>
                            <input type="nummber" className="form-control" id="danhGia" placeholder="Đánh giá" onChange={formik.handleChange} />
                            <p className="text-danger">{formik.errors.danhGia}</p>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="form-group">

                            <label htmlFor="hinhAnh">Hình Ảnh</label>
                            <input type="file" className="form-control" id="hinhAnh" placeholder="" onChange={formik.handleChange} />
                            <p className="text-danger">{formik.errors.hinhAnh}</p>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="moTa">Mô Tả</label>
                        <textarea className="form-control" id="moTa" rows={3} defaultValue={""} onChange={formik.handleChange} />
                        <p className="text-danger">{formik.errors.moTa}</p>
                        <div id="invalidMoTa" className="invalid-form">
                        </div>
                    </div>


                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button id="btnThemMon" className="btn btn-warning" type="submit" onClick={handleSubmit}>Thêm phim</button>
            </div>
        </div>
    )
}
