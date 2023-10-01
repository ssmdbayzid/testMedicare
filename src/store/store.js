import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import {api} from '../state/api'

const store = configureStore({
    reducer: {
        theme: themeReducer,
        [api.reducerPath]: api.reducer,        
    },
    middleware: (getDefault)=> getDefault().concat(api.middleware),
})


export  default store;
