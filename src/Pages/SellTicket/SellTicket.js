import React from 'react'
import TicketInformation from './TicketInformation'
import TicketList from './TicketList'

export default function SellTicket() {
    return (
        <div className="bookingMovie">
                <div style={{backgroundColor: 'rgba(0,0,0,0.75)',width:'100%',height:'100%'}}>
                    <div className="row">
                        <div className="col-8">
                            <TicketList />
                        </div>
                        <div className="col-4">
                            <TicketInformation />
                        </div>
                    </div>
                </div>

            </div>
    )
}
