import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Redux/TodoSlice";

export const store = configureStore({
    reducer: todoReducer
});