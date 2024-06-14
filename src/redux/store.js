import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "@/redux/counterSlice";

const store = configureStore({
    reducer : rootReducer
});

export default store;