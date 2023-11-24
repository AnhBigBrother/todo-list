import addOrEditBtnReducer from './addOrEditBtnReducer';
import inputReducer from './inputReducer';
import listReducer from './listReducer';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    input: inputReducer,
    list: listReducer,
    addOrEditBtn: addOrEditBtnReducer
})

export default allReducer;