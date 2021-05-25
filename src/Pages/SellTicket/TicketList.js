import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ticketInformationAction } from '../../redux/Action/TicketAction'

export default function TicketList(props) {
    // console.log(props.maLichChieu)
    const { ticketInformation, danhSachGheDangChon } = useSelector(state => state.TicketReducer)
    const dispacth = useDispatch()
    // console.log(ticketInformation)

    useEffect(() => {
        dispacth(ticketInformationAction(props.maLichChieu))
    }, [])

    const renderDanhSachGhe = () => {
        return ticketInformation.danhSachGhe?.map((ghe, index) => {
            let ticketClass = "";
            let ticketDisable = false;

            if (ghe.daDat) {
                ticketClass = 'gheDuocChon';
                ticketDisable = true;
            } else if (danhSachGheDangChon?.findIndex(item => item === ghe) !== -1) {
                ticketClass = 'gheDangChon';
            } else if (ghe.loaiGhe === "Vip") {
                ticketClass = 'gheVip';
            } else {
                ticketClass = 'ghe';
            }
            return <div  id="listChair" style={{display:"inline-block", flexGrow:1, width:'6.25%' }}><button onClick={() => {
                orderChair(ghe)
            }} className={`${ticketClass}  mt-3`} disabled={ticketDisable} >{ghe.tenGhe} </button></div>
        })
    }
    const orderChair = (thongTinGhe) => {
        dispacth({
            type: "DAT-GHE",
            thongTinGhe: thongTinGhe
        })
    }
    return (
        <div>
            <div className="container-fluid titleTicket text-white">
                <div className="text-center text-light">
                    Monitor
                </div>
                <div className="screen"></div>
                <div className="d-flex w-100" style={{ marginTop: 50, flexWrap:"wrap", }}>
                    {renderDanhSachGhe()}
                </div>

            </div>
        </div>
    )
}

