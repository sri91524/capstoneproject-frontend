
import {useState, useEffect} from 'react'
import './Cart.css'

function Cart({ cartItems, setCart }){
   
      //Handle adding quantity
      const handleAdd = (index) =>{
        const updatedCart =[...cartItems];
        updatedCart[index].quantity = (updatedCart[index].quantity || 1) + 1;
        setCart (updatedCart);       
      }

      const handleSubtract = (index) =>{
        const updatedCart =[...cartItems];
        if(updatedCart[index].quantity >1){
            updatedCart[index].quantity -= 1;
            setCart(updatedCart);            
        }       
        
      }

      const handleDelete = (index) =>{
        const updatedCart= cartItems.filter((items, i) => i !== index);
        setCart(updatedCart);        
      }
   
    return(
      
            <div className ="cart-container">
                <h2>Your Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty!</p>
                ):(
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index} className='cart-item'>
                                <div className='cart-item-image-container'>
                                    <img src={item.image} alt ={item.prodname} className="cart-item-image"/>
                                </div>
                                <div className='cart-item-details-container'>
                                    <div className='cart-item-details'>
                                        <p className="carttitle">{item.prodname}</p>
                                        <p className="cartprice">Price: ${item.price["$numberDecimal"]}</p>
                                        <p className="carttitle">Size: {item.size}</p>
                                    </div>
                                    <div className="cart-item-quantity">
                                        <button className ="quantity-btn" onClick={() => handleSubtract(index)}>-</button>
                                        <input
                                            type="number"
                                            value={item.quantity || 1}  // Directly set the value from state
                                            min="1"
                                            className="quantity-input"
                                            onChange={(e) => {
                                            const updatedCart = [...cartItems];
                                            const newQuantity = parseInt(e.target.value, 10) || 1;  // Ensure valid number
                                            updatedCart[index].quantity = newQuantity;
                                            setCart(updatedCart);                                            
                                            }}
                                        />
                                        <button className ="quantity-btn" onClick={() => handleAdd(index)}>+</button> 
                                        <button className='delete-btn' onClick={() => handleDelete(index)}>Delete</button>
                                    </div>
                                    
                                </div>
                                                                
                            </li>
                        ))}
                    </ul>
                )}
            </div>        
    );
}

export default Cart;