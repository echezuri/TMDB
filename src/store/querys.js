import { createAction, createReducer } from "@reduxjs/toolkit";

export const setQuery = createAction("SET_QUERY");
export const updateQuery = createAction("UPDATE_QUERY");

const initialState = {
  query:null
};

const reducer = createReducer(initialState, {
  [setQuery]: (state, action) => action.payload,
  [updateQuery]: (state, action) => ({ ...state, ...action.payload }),
});

export default reducer;