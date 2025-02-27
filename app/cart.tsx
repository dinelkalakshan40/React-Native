import React, { useContext, useState } from 'react';

const CartContext = React.createContext<any>([]);

export const useCart = () => useContext(CartContext);

export const Cart = ({ children }: any) => {
    const [cart, setCart] = useState<any[]>([]);

    const addToCart = (item: any) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    const removeFromCart = (id: string) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
