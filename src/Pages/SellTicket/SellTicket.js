import React from 'react'
import TicketInformation from './TicketInformation'
import TicketList from './TicketList'

export default function SellTicket(props) {
    const maLichChieu = props.match.params.movieid
    // console.log(maLichChieu)
    return (
        <div className="bookingMovie" >
            <div >
                <div className="row" id="responisveSellTicket" >
                    <div className="col-7">
                        <TicketList maLichChieu={maLichChieu} />
                    </div>
                    <div className="col-5">
                        <TicketInformation maLichChieu={maLichChieu} />
                    </div>
                </div>
            </div>
        </div>
    )
}
