import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  // totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // 1. Add to cart
    addToCart(state, action) {
      state.totalAmount += action.payload.price * action.payload.quantity;
      const itemIsExist = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });
      // case item is exist
      if (itemIsExist) {
        itemIsExist.quantity += action.payload.quantity;
      } else {
        // case item isn't exist
        state.cartItems.push(action.payload);
      }
    },

    // 2. Increase item
    increaseItem(state, action) {
      // Select which product to update
      const targetProduct = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      const productIndex = state.cartItems.findIndex(
        (item) => item.id === targetProduct.id
      );
      // Update quantity
      targetProduct.quantity += 1;
      // Update product in the list
      state.cartItems[productIndex] = targetProduct;
      // Update Total amount
      state.totalAmount += targetProduct.price * 1;
    },

    // Decrese Item
    decreaseItem(state, action) {
      // Select which product to update
      const targetProduct = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      const productIndex = state.cartItems.findIndex(
        (item) => item.id === targetProduct.id
      );
      // Update quantity
      if (targetProduct.quantity > 1) {
        targetProduct.quantity -= 1;
        state.totalAmount -= targetProduct.price * 1;
        state.cartItems[productIndex] = targetProduct;
      } else {
        // targetProduct.quantity = 0;
        state.totalAmount -= targetProduct.price;
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== targetProduct.id
        );
      }
    },

    // Remove specific item from cart
    removeItem(state, action) {
      const targetItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      state.cartItems = state.cartItems.filter(
        (item) => item.id !== targetItem.id
      );
      state.totalAmount -= targetItem.price * targetItem.quantity;
    },

    // Remove all items from cart
    clearCart(state) {
      state.cartItems = [];
      state.totalAmount = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
