import { GET_ALL_MOVIE, GET_ALL_MOVIE_PAGE, GET_DETAIL_MOVIE } from "../../util/Setting";

const initialState = {
  allMovie: [],
  detailMovie: {},
  allMoviePage: [],
  movieLoading: true
};

export const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MOVIE: {
      // console.log(action.allMovie);
      return { ...state, allMovie: action.allMovie, movieLoading: false };
    }
    case GET_DETAIL_MOVIE: {
      // console.log(action.detailMovie);
      return { ...state, detailMovie: action.detailMovie, movieLoading: false };
    }
    case GET_ALL_MOVIE_PAGE: {
      return { ...state, allMoviePage: action.allMoviePage, movieLoading: false };
    }
    case "RESET_LOADING": {
      return { ...state, movieLoading: true }
    }

    default:
      return { ...state };
  }
};
