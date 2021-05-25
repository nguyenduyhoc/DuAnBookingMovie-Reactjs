import { DAT_GHE, TICKET_INFORMATION, XOA_GHE_DANG_CHON } from "../../util/Setting"

const initialState = {
    ticketInformation: [],
    danhSachGheDangChon: []

}

export const TicketReducer = (state = initialState, action) => {

    switch (action.type) {
        case TICKET_INFORMATION: {
            return { ...state, ticketInformation: action.ticketInformation }
        }
        case DAT_GHE : {
            let danhSachGheCapNhat = [...state.danhSachGheDangChon]
            let index = danhSachGheCapNhat.findIndex(chair => chair.maGhe === action.thongTinGhe.maGhe)
            if (index !== -1) {
                danhSachGheCapNhat.splice(index, 1)
            } else {
                danhSachGheCapNhat.push(action.thongTinGhe)
            }
            return { ...state, danhSachGheDangChon: danhSachGheCapNhat }
        }
        case XOA_GHE_DANG_CHON: {
            return { ...state, danhSachGheDangChon: [] }
        }

        default:
            return { ...state }
    }
}