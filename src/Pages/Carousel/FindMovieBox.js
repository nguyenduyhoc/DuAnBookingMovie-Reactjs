import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function FindMovieBox() {
    const { allMovie } = useSelector(state => state.MovieReducer)

   
    return (
        <div className="container">
            <div style={{ width: '100%' }} class="form-group d-flex " id="findMovieTools">
                <div className="findMovieBox">
                    <select class="form-control form-control-lg " id="exampleFormControlSelect1"  >
                        <option value="" hidden >Choose Movie</option>
                     
                    </select>
                    <select class="form-control form-control-lg" id="exampleFormControlSelect1">
                        <option value="" hidden >Cinema</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <select class="form-control form-control-lg" id="exampleFormControlSelect1">
                        <option value="" hidden >Date</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <select class="form-control form-control-lg" id="exampleFormControlSelect1">
                        <option value="" hidden >When</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>

                <button className="btn btn-secondary">Buy Ticket</button>
            </div>
        </div>




    )
}
