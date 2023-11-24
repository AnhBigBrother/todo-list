import { legacy_createStore as createStore } from "redux";
import allReducer from '../reducers/allReducer';

const store = createStore(allReducer);

export default store;