import React from 'react'

export default function TicketInformation() {
    return (
        <div>
            <div className="text-white titleInformation">
                <h3 className="text-center ">Danh sách ghế đang đặt</h3>
                <div>
                    <button className="gheDangChon"></button>Ghế đang đặt
                 </div>
                <div>
                    <button className="ghe"></button>Ghế chưa đặt
                 </div>
                <div>
                    <button className="gheDuocChon"></button>Ghế đã đặt
                 </div>

                <table className="table">
                    <thead>
                        <tr className="text-white text-light">
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    )
}
