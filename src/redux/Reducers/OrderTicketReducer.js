const initialState = {
    ticket: [],

}

export const OrderTicketReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ORDER_TICKET":{
            
            return {...state, ticket:action.ticket}
        }

        default:
            return { ...state }
    }
}