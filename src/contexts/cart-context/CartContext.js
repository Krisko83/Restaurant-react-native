import { createContext } from "react";

export const CartContext = createContext({
    cartItems: [],
    addToCart(item) { },
    decrementQty() { },
    removeFromCart() { },
    incrementQty() { },
    totalOrderPrice() { }
})