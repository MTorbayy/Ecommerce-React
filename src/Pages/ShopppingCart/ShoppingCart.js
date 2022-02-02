import React, {useState, useEffect} from 'react'
import "./ShoppingCart.css"
import {useSelector, useDispatch} from 'react-redux'

export default function ShoppingCart() {

    const storeState = useSelector(state => state)

    const dispatch = useDispatch()

    const handleChange = (e, id) => {
      
      const indexItem = storeState.cart.findIndex(obj => obj.id === id)

      const objUpdated = {
        ...storeState.cart[indexItem],
        quantity: Number(e.target.value)
      }

      dispatch({
        type: "UPDATEITEM",
        payload: objUpdated
      })

    }

    let totalPrice = 0
    if(storeState.cart.length !== 0) {
      for (const item of storeState.cart) {
        const itemPrice = item.price * item.quantity
        totalPrice += itemPrice
      }
    }

    return (
    <div className='global-container'>
      <p className="heading-cart">Votre panier :</p>
      <ul className="cart-list">
        {storeState.cart.map((item) => {
          return (
            <li key={item.id}>
                <img src={process.env.PUBLIC_URL + `/images/${item.img}.png`} alt="image mug" />
                <div className="bloc-cart-infos">
                  <h4>{item.title}</h4>
                  <p>Prix : {item.price} €</p>
                </div>
                <div className="bloc-input">
                  <label htmlFor="quatityInput">Quantité</label>
                  <input 
                  onChange={e => handleChange(e, item.id)}
                  id="quantityInput"
                  type="number" 
                  value={item.quantity}
                  />
                </div>
            </li>
          )
        })}
      </ul>
      <p className="total-price">Total : {totalPrice.toFixed(2)} €</p>
      <button className="btn-cart">Procéder au paiement</button>
    </div>
    )
  }
