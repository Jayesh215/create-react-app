import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ShoppingCart = () => {
    const { cart, setCart } = useCart();

    const updateQuantity = (id, delta) => {
        setCart(cart.map(item => 
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        ));
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <h2>Shopping Cart</h2>
            <Link to="/products">Back to Shop</Link>
            <div>
                {cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <h3>{item.name}</h3>
                        <p>Price: ${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                ))}
            </div>
            <h3>Total: ${totalCost}</h3>
            <button>Checkout</button>
        </div>
    );
};

export default ShoppingCart;
