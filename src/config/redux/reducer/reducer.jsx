import { combineReducers } from "redux";
import homereducer from '../reducer/homereducer';
import globalreducer from '../reducer/globalreducer';

const reducer = combineReducers({globalreducer,homereducer});

export default reducer;