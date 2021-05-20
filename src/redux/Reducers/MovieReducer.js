import { GET_ALL_MOVIE } from "../../util/Setting";

const initialState = {
  allMovie: [],
  detailMovie: {},
  allMoviePage: [],
};

export const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MOVIE: {
      console.log(action.allMovie);
      return { ...state, allMovie: action.allMovie };
    }
    case "GET_DETAIL_MOVIE": {
      console.log(action.detailMovie);
      return { ...state, detailMovie: action.detailMovie };
    }
    case "GET-ALL-MOVIE-PAGE": {
      return { ...state, allMoviePage: action.allMoviePage };
    }

    default:
      return { ...state };
  }
};
