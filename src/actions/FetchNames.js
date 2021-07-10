import { FETCH_NAMES } from './types';
import DatabaseApi from '../api/DatabaseApi'


export const fetchNames = (classname_content, classname_spinner, setstate) => {
    return async (dispatch) => {
        try {
            //const response = await DatabaseApi.get('/cameras');
            dispatch({
                type: FETCH_NAMES,
                //payload: response.data
                payload: {
                    data: [
                        {
                            id: 1,
                            name: 'Sony 1'
                        },
                        {
                            id: 2,
                            name: 'Sony 2'
                        }
                    ]
                }
            });
            setstate(classname_content, `${classname_spinner} hidden`);
        } catch (error) {
            console.log(error)
            if(error.response){
                dispatch({
                    type: FETCH_NAMES,
                    payload: {
                        error: error.response.data.error
                    }
                });
            }
            else{
                dispatch({
                    type: FETCH_NAMES,
                    payload: {
                        error: error.message
                    }
                });
            }
        }
    }
}