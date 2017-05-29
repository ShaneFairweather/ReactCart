import { ADD_ITEM, REMOVE_ITEM } from '../actions/actions_types';

const initialUserState = {
    data:[]
}

export default function(state = initialUserState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case REMOVE_ITEM:
            return {
                data: [...state.data.slice(0, state.data.indexOf(action.payload)),
                ...state.data.slice(state.data.indexOf(action.payload) + 1)]
            }
    }
    return state;
}