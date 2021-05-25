

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {history} from '../../App'
import { orderTicket } from '../../redux/Action/TicketAction'
import { DAT_GHE, XOA_GHE_DANG_CHON } from '../../util/Setting'

export default function TicketInformation(props) {
    const { danhSachGheDangChon } = useSelector(state => state.TicketReducer)
    const { taiKhoan } = useSelector(state => state.UsersReducer)
    const dispacth = useDispatch()


    let ticketOrderList = danhSachGheDangChon.map((item, index) => {
        return { maGhe: item.maGhe, giaVe: item.giaVe }
    })

    const renderTicketInfomation = () => {
        return danhSachGheDangChon?.map((item, index) => {

            return <tr key={index} className="text-white text-light">
                <td >{item.tenGhe}  </td>
                <td >{item.loaiGhe} </td>
                <td >{item.giaVe} </td>
                <td><button className="btn btn-danger" onClick={() => dispacth({
                    type: DAT_GHE,
                    thongTinGhe: item
                })}>Xóa</button></td>
            </tr>
        })
    }

    return (
        <div>
            <div className="text-white titleInformation">
                <h3 >Danh sách ghế đang đặt</h3>
                <div>
                    <button className="ghe"></button>Ghế thường
                 </div>
                <div>
                    <button className="gheVip"></button>Ghế Vip
                 </div>
                <div>
                    <button className="gheDangChon"></button>Ghế đang đặt
                 </div>
                <div>
                    <button className="gheDuocChon"></button>Ghế đã đặt
                 </div>


                <table className="table">
                    <thead>
                        <tr className="text-white text-light">
                            <th>Số ghế</th>
                            <th>Loại ghế</th>
                            <th>Giá</th>
                            {danhSachGheDangChon.toString() !== "" ? <th><button className="btn btn-danger" onClick={() => dispacth({
                                type: XOA_GHE_DANG_CHON,
                            })}>Xóa tất cả</button></th> : ""}
                        </tr>
                    </thead>
                    <tbody>
                        {renderTicketInfomation()}
                    </tbody>
                    <tfoot >
                        {danhSachGheDangChon.toString() !== "" ? <tr className="text-white text-light">
                            <th>Tổng cộng</th>
                            <th>{`${danhSachGheDangChon.length} vé`}</th>
                            <th>{danhSachGheDangChon.reduce((tong, item, index) => {
                                return tong += item.giaVe
                            }, 0).toLocaleString()} VNĐ</th>
                            {taiKhoan === '' ? <th><button className="btn btn-success" onClick={() => {
                                alert("Vui lòng đăng nhập để đặt vé")
                                history.push('/login')
                            }}>Đặt vé</button></th> : <th><button className="btn btn-success" onClick={() => {
                                dispacth(orderTicket({
                                    maLichChieu: props.maLichChieu,
                                    danhSachVe: ticketOrderList,
                                    taiKhoanNguoiDung: taiKhoan

                                }))
                            }}>Đặt vé</button></th>}

                        </tr> : ''}
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
