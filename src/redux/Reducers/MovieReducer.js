import {GET_ALL_MOVIE} from '../../util/Setting'

const initialState = {
    allMovie: [],
    detailMovie: [],
    allMoviePage:[]


}

export const MovieReducer = (state = initialState, action) => {
    // console.log(action)
    // console.log(action);
    switch (action.type) {
        case GET_ALL_MOVIE: {
            return {...state, allMovie: action.allMovie}
        }
        case 'GET_DETAIL_MOVIE':{
            state.detailMovie = action.detailMovie
            return {...state}
        }
        case "GET-ALL-MOVIE-PAGE" :{
            return   { ...state, allMoviePage: action.allMoviePage }
        }

  

    default:
        return {...state}
    }
}
