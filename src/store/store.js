import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./users";
import queryReducer from "./querys";

const store = configureStore({
  reducer: {
    user: userReducer,
    query: queryReducer,
  },
});

export default store;
