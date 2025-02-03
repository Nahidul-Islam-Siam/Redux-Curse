import { configureStore } from "@reduxjs/toolkit"; // step-1 - Import configureStore from @reduxjs/toolkit
import myCounter from './CounterSlice';
const store = configureStore({
    reducer:{
counter: myCounter
    }
})


export default store; // step 2 - store exported