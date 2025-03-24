
import {useEffect} from 'react'
import './Cart.css'

function Cart({cart =[]}){
    if (!Array.isArray(cart)) {
        cart = [];  // Ensure cart is always an array
    }
    useEffect(() => {
        console.log(`Cart items -${cart}`); // Logging cart state after each update.
      }, [cart]);
   
    return(
      
            <div className ="cart-container">
                <h2>Your Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty!</p>
                ):(
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                <h3>{item.prodname}</h3>
                                <p>Price: ${item.price["$numberDecimal"]}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>        
    );
}

export default Cart;