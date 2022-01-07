import React from 'react';

// Initial Context
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { }
});

export default CartContext;