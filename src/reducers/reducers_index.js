import { combineReducers } from 'redux';
import ItemReducer from './reducer_items';

const rootReducer = combineReducers({
    items: ItemReducer
});

export default rootReducer;
