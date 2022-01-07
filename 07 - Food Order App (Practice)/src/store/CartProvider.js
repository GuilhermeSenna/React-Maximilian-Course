import { useReducer } from "react";

import CartContext from "./cart-context";

// Initial value of state
const defaultCartState = {
    items: [],
    totalAmount: 0
}


// Function to handle the state values
const cartReducer = (state, action) => {

    // Adding a item to the cart
    if (action.type === 'ADD_ITEM') {

        // Sums the last total amount with the new item added and the quantity of that item
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        // Searches the item list for the item that matches the passed ID
        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.item.id
        );

        // Pulls the added item from the list of items
        // If this is the first time this item has been added to the cart it will return undefined
        // If not return the item
        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;

        // If you already have the same item in your cart
        if (existingCartItem) {

            // Keeps the item and updates the total value of that item
            const updateItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };

            // Keep the previous items
            updatedItems = [...state.items];

            // Updates the new quantity of the item added to the item list
            updatedItems[existingCartItemIndex] = updateItem;
        }
        // First time added this item to cart
        else {
            // Added the new item to the item list
            updatedItems = state.items.concat(action.item);
        }

        // Returns the list of items and updated total amount
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    // Removing item from cart
    if (action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.id
        );

        const existingItem = state.items[existingCartItemIndex]
        const updatedTotalAmount = state.totalAmount - existingItem.price;

        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    return defaultCartState;
};

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({ type: 'ADD_ITEM', item: item })
    };

    const removeItemToCartHandler = id => {
        dispatchCartAction({ type: 'REMOVE_ITEM', id: id })
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    };

    return (
        // Passing the context through the App component (which is where it is invoked)
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;