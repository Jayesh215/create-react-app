import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductListing = () => {
    const { cart, setCart } = useCart();
    const products = [
        { id: 1, name: 'Aloe Vera', price: 10, description: 'Air Purifying' },
        { id: 2, name: 'Lavender', price: 15, description: 'Aromatic' }
    ];

    const addToCart = (product) => {
        if (!cart.find(item => item.id === product.id)) {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    return (
        <div>
            <h2>Our Plants</h2>
            <Link to="/cart">Cart ({cart.length})</Link>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <button 
                            onClick={() => addToCart(product)}
                            disabled={cart.some(item => item.id === product.id)}>
                            {cart.some(item => item.id === product.id) ? 'Added to Cart' : 'Add to Cart'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListing;
