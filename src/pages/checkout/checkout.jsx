import React from 'react'

import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selector.js'

import CheckOutItem from '../../components/checkout-item/checkout-item.jsx'

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.jsx'

import './checkout.scss'

const CheckOutPage = ({ cartItems, totalPrice }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ${totalPrice}</div>

      <StripeCheckoutButton price={totalPrice} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage)
