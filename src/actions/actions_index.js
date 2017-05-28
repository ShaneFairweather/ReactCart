import { ADD_ITEM, REMOVE_ITEM } from './actions_types';

export function addToCart(item) {
    return {
        type: ADD_ITEM,
        payload: item
    }
}

export function removeFromCart(item) {
    return {
        type: REMOVE_ITEM,
        payload: item
    }
}
