import { cartAction } from './cart-action-types.js'

export const toggleDropDown = () => ({
  type: cartAction.TOGGLE_CART_DROPDOWN,
})

export const addItem = item => ({
  type: cartAction.ADD_ITEM,
  payload: item
})

export const removeItem = item => ({
  type: cartAction.REMOVE_ITEM,
  payload: item
})

export const clearItemFromCart = item => ({
  type: cartAction.CLEAR_ITEM_FROM_CART,
  payload: item
})

export const clearCart = () => ({
  type: cartAction.CLEAR_CART
})
