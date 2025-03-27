
import {useState, useEffect} from 'react'
import './Cart.css'
import { PencilIcon, TrashIcon } from '@heroicons/react/solid';

function Cart({ cartItems, setCart }){
   
    const [subtotal, setSubtotal] = useState(0);
    const [totalTax, setTotalTax] = useState(0);

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

      useEffect(() =>{
        let calculatedSubTotal = 0;
        let calculatedTax =0;

        cartItems.forEach((item)=>{
            const itemPrice= parseFloat(item.price["$numberDecimal"])
            const itemQuantity = isNaN(item.quantity) || item.quantity <= 0 ? 1 : item.quantity; 

            console.log(item.price["$numberDecimal"]);
            console.log(itemQuantity);
           
            
            if (!isNaN(itemPrice) && itemQuantity > 0) { 
                const itemTotal = itemPrice * itemQuantity;
                const itemTax = itemTotal * (item.tax/100)

                calculatedSubTotal += itemTotal;
                calculatedTax += itemTax;
            }
        },[cartItems]);

        setSubtotal(calculatedSubTotal);
        setTotalTax(calculatedTax);
      },[cartItems])
   
    return(
      
            <div className ="cart-container">
                <h2 class="text-xl font-semibold  text-blue-900">SHOPPING CART</h2>
                <hr/>
                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center text-center">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l3.6 7.2 1.2 2.4h6.4l1.2-2.4L19 3h2M6 3l3 6h9l3-6m-5 12v2m-1-2H7v2h7m0-2v-2H7v2h7zm1 2v2m0-2h3m0 0l1-3M4 6l1 3m0 0h2m0 0l1-3m7 13v-2H7z" />
                        </svg>
                            <p className="text-sm font-semibold text-gray-600 mt-4">Your cart is empty!</p>
                    </div>
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
                                        <p className="cartprice">Price: ${parseFloat(item.price["$numberDecimal"]).toFixed(2)}</p>
                                        <p className="carttitle">Size: {item.size}</p>
                                    </div>
                                    <div className="cart-item-quantity">
                                        <button className ="quantity-btn" onClick={() => handleSubtract(index)}>-</button>
                                        <input
                                            type="number"
                                            value={item.quantity || 1}  // Directly set the value from state
                                            min="1"
                                            className="quantity-input w-8"
                                            onChange={(e) => {
                                            const updatedCart = [...cartItems];
                                            const newQuantity = parseInt(e.target.value, 10) || 1;  // Ensure valid number
                                            updatedCart[index].quantity = newQuantity;
                                            setCart(updatedCart);                                            
                                            }}
                                        />
                                        <button className ="quantity-btn" onClick={() => handleAdd(index)}>+</button> 
                                        <span className='cartprice'>
                                        
                                            {
                                                 (() => {
                                                    const price = parseFloat(item.price["$numberDecimal"]);
                                                    const quantity = isNaN(item.quantity) || item.quantity <=0 ? 1 : item.quantity;
                                                    const total = isNaN(price) || price <= 0 || !item.price["$numberDecimal"]
                                                      ? '0.00'
                                                      : (price * quantity).toFixed(2);  //quantity * price
                                                    return `$${total}`;
                                                  })()
                                              }
                                        </span> 
                                        <div>
                                            <button onClick={() => handleDelete(index)}>
                                                <TrashIcon className="h-5 w-5 text-yellow-900 hover:text-red-700 cursor-pointer" />
                                            </button>
                                        </div>                                   
                                    </div>
                                                                     
                                    
                                </div>
                                                                
                            </li>
                        ))}
                    </ul>
                )}
                  <div className="cart-summary">
                    <div className='subtotal-container'>
                        <div>
                            <p className='textsubtotal'>Subtotal:</p>
                        </div>
                        <div>
                            <p className='cart-subtotal'>${subtotal.toFixed(2)} USD</p>
                        </div>
                    </div>
                     
                    <p className='carttitle'>Taxes and shipping calculated at checkout</p>
                    <div className="terms-container carttitle">
                        <input type="checkbox" id="terms" />
                        <label htmlFor="terms">I agree with the terms and conditions.</label>
                    </div>
                    <div className='checkout-button-container '>                        
                        <button className="bg-black text-white p-2 rounded-md w-32 h-8 flex items-center justify-center cursor-pointer text-xs">Check Out</button>
                    </div>
                </div>
            </div>        
    );
}

export default Cart;