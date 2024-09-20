import { persistReducer, persistStore } from "redux-persist";
import MySliceReducer from './Slice';
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";

// Persist configuration
const persistConfig = {
  key: "root",
  storage
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, MySliceReducer);

// Configure store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer  // Pass the persistedReducer, not persistReducer
});

// Configure persistor
export const persistor = persistStore(store);
