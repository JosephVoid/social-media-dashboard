import { configureStore } from "@reduxjs/toolkit";
import socialReducer from "./social-slice";
import socialApi from "./rtk-query/social-service";

export const store = configureStore({
  reducer: {
    socials: socialReducer,
    [socialApi.reducerPath]: socialApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(socialApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
