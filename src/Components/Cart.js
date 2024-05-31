import React, { useState, useEffect } from 'react';
import './Cart.css';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = ({ cart, setCart, onRemoveEvent }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.charges), 0));
  }, [cart]);

  return (
    <>
      <div style={{ marginLeft: '9rem' }}>
        <h1 style={{ fontFamily: 'Times New Roman', textAlign: 'center', marginRight: '55px' }}>
          My cart
        </h1>

        {cart.length === 0 ? (
          <p style={{ textAlign: 'center', height:'35vh', marginRight: '55px' }}>
            Your Cart is empty.
          </p>
        ) : (
          cart.map((event) => (
            <div key={event.id}>
              <div className="cart-item">
                <div className="cart-item-content">
                  <img src={event.img} alt={event.title} className="cart-item-image" />
                  <div className="cart-item-details">
                    <p><strong>{event.title}</strong></p>
                    <p><strong>{event.charges.toLocaleString('en-US', { style: 'currency', currency: 'INR' })}</strong></p>
                  </div>
                </div>
                <DeleteIcon className='remove-button' style={{height:'6vh', width:'5vw',  marginLeft: '33rem'}} 
                onClick={() => onRemoveEvent(event.id)}/>
              </div>
            </div>
          ))
        )}

        <p style={{ textAlign: 'center' }}>
          <div class="total" style={{display:'flex',marginLeft:'22rem',fontFamily:'17px'}}>
            <h3><strong>Total:</strong></h3>
            <h3 style={{marginLeft:'12rem'}}>₹{total}</h3>
          </div>
        </p>
      </div>

      <button class="btn-go-checkout">
        <i class="fas fa-lock"></i>
        <span style={{marginLeft:'24rem',fontFamily:'25px'}}>Go to Checkout</span>
      </button>
    </>
  );
};

export default Cart;