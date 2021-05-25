import { GET_ALL_CINEMA, GET_ALL_CINEMA_BRAND, GET_ALL_CINEMA_SCHEDULE } from "../../util/Setting";

const initialState = {
  allCinemaBrand: [],
  allCinema: [],
  allCinemaSchedule:[],
};

export const CinemaReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_CINEMA_BRAND: {
        return { ...state, allCinemaBrand: action.allCinemaBrand };
      }
      case GET_ALL_CINEMA: {
        return { ...state, allCinema: action.allCinema };
      }
      case GET_ALL_CINEMA_SCHEDULE: {
        return { ...state, allCinemaSchedule: action.allCinemaSchedule };
      }

      default:
        return { ...state };
    }
}
