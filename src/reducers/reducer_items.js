import { ADD_ITEM, REMOVE_ITEM } from '../actions/actions_types';

const initialUserState = {
    items:[]
}

export default function(state = initialUserState, action) {
    switch (action.type) {
        // case ADD_ITEM:
        //     return action.payload;
        case ADD_ITEM :
            return {
                ...state,
                items: [...state.items, action.payload]
            }
    }
    return state;
}