import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice"

const Store = configureStore({
    reducer:{
        ui:uiSlice.reducer
    }
})
export default Store;