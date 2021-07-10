import { FETCH_NAMES } from '../actions/types';

const initialState = {
    names: [],
    error: null
};

const red =  (state=initialState, action) => {
    switch(action.type){
        case FETCH_NAMES:
            return {
                ...state,
                names: action.payload.data,
                error: action.payload.error
            };
        default:
            return state;
    };
}

export default red;