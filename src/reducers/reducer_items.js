import { ADD_ITEM, REMOVE_ITEM } from '../actions/actions_types';

const initialUserState = {
    items:[]
}

export default function(state = initialUserState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case REMOVE_ITEM:
            return {
                items: [...state.items.slice(0, state.items.indexOf(action.payload)),
                ...state.items.slice(state.items.indexOf(action.payload) + 1)]
            }
    }
    return state;
}