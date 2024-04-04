import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authSlice from "./slices/authSlice";

const persistConfig = {
  key: "myRootKey",
  version: 1,
  storage: AsyncStorage,
  whitelist: ["user", "token", "isLoggedIn", "showGetStarted"],
};

const roortReducer = combineReducers({
  auth: persistReducer(persistConfig, authSlice),
});

const store = configureStore({
  reducer: roortReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

export { store, persistor };
