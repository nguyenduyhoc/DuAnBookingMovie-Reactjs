import React from 'react'
import TableAdmin from './TableAdmin'

export default function Admin() {
    return (
        <div className="container">
            <div className="card text-white bg-dark mt-5">
                <div className="card-header">Movie Information</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <p>Mã Movie</p>
                                <input className="form-control" name="maSinhVien" />
                                <p className="text text-danger"></p>
                            </div>
                            <div className="form-group">
                                <p>Tên Movie</p>
                                <input className="form-control" name="soDienThoai" />
                                <p className="text text-danger"></p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <p>Đạo diễn</p>
                                <input className="form-control" name="tenSinhVien" />
                                <p className="text text-danger"></p>
                            </div>
                            <div className="form-group">
                                <p>Diễn viên</p>
                                <input typeProps="email" className="form-control" name="email" />
                                <p className="text text-danger"></p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <p>Hình ảnh</p>
                                <input className="form-control" name="tenSinhVien" />
                                <p className="text text-danger"></p>
                            </div>
                            <div className="form-group">
                                <p>Định dạng</p>
                                <input typeProps="email" className="form-control" name="email" />
                                <p className="text text-danger"></p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <p>Nội dung</p>
                                <input className="form-control" name="tenSinhVien" />
                                <p className="text text-danger"></p>
                            </div>
                            <div className="form-group">
                                <p>Quốc gia SX</p>
                                <input typeProps="email" className="form-control" name="email" />
                                <p className="text text-danger"></p>
                            </div>
                        </div>
                        <div className="col-8">
                            <button className="btn btn-success"  >Add Movie</button>
                            <button type="button" className="btn btn-primary ml-2"

                            >Updated Movie</button>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <TableAdmin />
            </div>
        </div>

    )
}
