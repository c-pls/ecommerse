export const addItemToCart = (cartItems, addedItem) => {
  const isItemAlreadyExisted = cartItems.find(item => item.id === addedItem.id)

  if (isItemAlreadyExisted) {
    return cartItems.map(item =>
      item.id === addedItem.id
        ? { ...item, quantity: item.quantity + 1 } :
        item
    )
  }
  addedItem.quantity = 1
  return [...cartItems, { ...addedItem, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, removeItem) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === removeItem.id
  )
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== removeItem.id)
  }
  return cartItems.map(
    cartItem => cartItem.id === removeItem.id ?
      { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}
