import { cartAction } from './cart-action-types.js'
import { addItemToCart, removeItemFromCart } from './cart-utils.js'

const INIT_STATE = {
  hidden: true,
  cartItems: [],
}

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case cartAction.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      }

    case cartAction.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }

    case cartAction.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }

    case cartAction.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      }
    case cartAction.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      }


    default:
      return state
  }
}

export default cartReducer

