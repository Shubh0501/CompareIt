import { FETCH_ONE_DATA } from '../actions/types';

const initialState = {
    camera: {},
    searchNumber: null,
    error: null
};

const red =  (state=initialState, action) => {
    switch(action.type){
        case FETCH_ONE_DATA:
            return {
                ...state,
                camera: action.payload.camera,
                searchNumber: action.payload.searchNumber,
                error: action.payload.error
            };
        default:
            return state;
    };
}

export default red;