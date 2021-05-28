import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 15,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremented(state) {
      state.value++;
    },
    decremented(state) {
      state.value--;
    },
    added(state, { payload }: PayloadAction<number>) {
      state.value += payload;
    },
  },
});
//Actions
export const { incremented, added, decremented } = counterSlice.actions;
//The reducer
export const counterReducer = counterSlice.reducer;
//Name of the slice
export const name = counterSlice.name;
//Selector
const counterFeatureSelector = createFeatureSelector<ReturnType<typeof counterReducer>>(name);
export const counterSelector = createSelector(counterFeatureSelector, (state) => state);
