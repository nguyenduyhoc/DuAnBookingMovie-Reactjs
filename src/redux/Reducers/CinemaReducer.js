const initialState = {
    allCinema: []
}

export const CinemaReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_CINEMA': {
            return { ...state, allCinema: action.allCinema }
        }

        default:
            return { ...state }
    }
}
