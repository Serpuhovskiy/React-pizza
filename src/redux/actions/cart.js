export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj,
});
export const clearCart = () => ({
    type: 'CLEAR_CART',
});
export const removeCartItem = (id) => ({
    type: 'DELETE_CART_ITEM',
    payload: id
});
export const removePizzaFromCart = (id) => ({
    type: 'REMOVE_PIZZA_CART',
    payload: id
});
