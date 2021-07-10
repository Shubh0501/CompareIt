import { combineReducers } from 'redux';
import FetchNamesReducer from './FetchNamesReducer';
import FetchOneDataReducer from './FetchOneDataReducer';

export default combineReducers({
    trial: () => "hello",
    nameList: FetchNamesReducer,
    cameraData: FetchOneDataReducer
});