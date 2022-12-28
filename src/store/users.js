import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER");
export const updateUser = createAction("UPDATE_USER");

const initialState = {
  id: null,
  name: null,
  lastName: null,
  email: null,
};

const reducer = createReducer(initialState, {
  [setUser]: (state, action) => action.payload,
  [updateUser]: (state, action) => ({ ...state, ...action.payload }),
});

export default reducer;
