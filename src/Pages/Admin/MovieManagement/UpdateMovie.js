import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { updateMovieAction } from '../../../redux/Action/MovieAction'
import { formatDate } from '../../../util/GetDateFormatted'
import { removeAccents } from '../../../util/RemoveAccents'

export default function UpdateMovie(props) {
    console.log(props.movie)

    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            maPhim: props.movie?.maPhim,
            tenPhim: props.movie?.tenPhim,
            trailer: props.movie?.trailer,
            hinhAnh: props.movie?.hinhAnh,
            moTa: props.movie?.moTa,
            maNhom: "GP02",
            ngayKhoiChieuValue: props.movie?.ngayKhoiChieuValue,
            danhGia: props.movie?.danhGia
        },
        validationSchema: Yup.object().shape({
            tenPhim: Yup.string().required('tên phim không được bỏ trống'),
            trailer: Yup.string().required('Trailer không được bỏ trống'),
            hinhAnh: Yup.string().required('Hình ảnh người dùng không được bỏ trống'),
            moTa: Yup.string().required('Mô tả không được bỏ trống'),
            danhGia: Yup.string().required('Đánh giá không được bỏ trống')
        }),
    })

    console.log(formik.values)
    const handleSubmit = () => {
        const ngayKhoiChieu = formatDate(formik.values.ngayKhoiChieuValue)
        const biDanh = removeAccents(formik.values.tenPhim)
        const finalData = {...formik.values, ngayKhoiChieu, biDanh}
        if (formik.isValid) {
            dispatch(updateMovieAction(finalData))
        }
    }

    return (

        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Bảng cập nhật</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="card-body">
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="tenPhim">Tên phim</label>
                            <input type="text" className="form-control" id="tenPhim" defaultValue={props.movie?.tenPhim} onChange={formik.handleChange} />
                            <p className="text-danger">{formik.errors.tenPhim}</p>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="trailer">Link trailer</label>
                            <input type="text" className="form-control" id="trailer" defaultValue={props.movie?.trailer} onChange={formik.handleChange} />
                            <p className="text-danger">{formik.errors.trailer}</p>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="ngayKhoichieu">Ngày khởi chiếu</label>
                            <input type="date"  className="form-control" id="ngayKhoiChieuValue"
                                placeholder={props.movie?.ngayKhoiChieuValue} onChange={formik.handleChange}
                            />
                            <p className="text-danger">{formik.errors.ngayKhoiChieu}</p>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="danhGia">Đánh giá</label>
                            <input type="nummber" className="form-control" id="danhGia" defaultValue={props.movie?.danhGia} onChange={formik.handleChange} />
                            <p className="text-danger">{formik.errors.danhGia}</p>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="form-group">

                            <label htmlFor="hinhAnh">Hình Ảnh</label>
                            <input type="file" className="form-control" id="hinhAnh" onChange={formik.handleChange} />
                            <p className="text-danger">{formik.errors.hinhAnh}</p>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="moTa">Mô Tả</label>
                        <textarea className="form-control" id="moTa" rows={3} defaultValue={props.movie?.moTa} onChange={formik.handleChange} />
                        <p className="text-danger">{formik.errors.moTa}</p>
                        <div id="invalidMoTa" className="invalid-form">
                        </div>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button id="btnThemMon" className="btn btn-primary" type="submit" onClick={handleSubmit} >Cập nhật </button>
            </div>
        </div>
    )
}
