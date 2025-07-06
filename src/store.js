import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { addItem, removeItem, updateQuantity } from './CartSlice';
 const store = configureStore({
    reducer: {
        cart: cartReducer,
        add: addItem,
        remove: removeItem,
        update: updateQuantity,
    },
});
export default store
