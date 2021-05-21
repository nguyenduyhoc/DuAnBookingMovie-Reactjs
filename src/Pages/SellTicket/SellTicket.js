import React from 'react'
import TicketInformation from './TicketInformation'
import TicketList from './TicketList'

export default function SellTicket(props) {
    const maLichChieu = props.match.params.movieid
    // console.log(maLichChieu)
    return (
        <div className="bookingMovie">
                <div style={{backgroundColor: 'rgba(0,0,0,0.75)',width:'100%',height:'100%'}}>
                    <div className="row">
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
