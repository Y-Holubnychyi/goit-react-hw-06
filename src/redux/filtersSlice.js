import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  filters: {
    name: "",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducers: {
    setFilter: (state, action) => {
      state.filters.name = action.payload;
    },
  },
});

export const selectFilter = (state) => state.filter.filters.name;
export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
