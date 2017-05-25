import { ADD_ITEM, REMOVE_ITEM } from '../actions/actions_types';

export default function(state = {}, action) {
    switch (action.type) {
        case ADD_ITEM:
            console.log(action.payload.data);
        case REMOVE_ITEM:
            console.log(action.payload.data);
        default:
            return state;
    }
}