import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { cloneDeep } from "lodash";

export interface CounterState {
  value: number;
  timesIncremented: number;
  timesDecremented: number;
}

const initialState: CounterState = {
  value: 0,
  timesIncremented: 0,
  timesDecremented: 0,
};

export const counterIncremented = createAction("[Counter] Incremented");
export const counterDecremented = createAction("[Counter] Decremented");
export const counterAdded = createAction("[Counter] Added value", props<{ value: number }>());

export const counterReducer = createReducer(
  initialState,
  on(counterIncremented, (state) => {
    const newState = cloneDeep(state);
    newState.value++;
    return newState;
  }),
  on(counterDecremented, (state) => {
    const newState = cloneDeep(state);
    newState.value--;
    return newState;
  }),
  on(counterAdded, (state, action) => {
    const newState = cloneDeep(state);
    newState.value += action.value;
    return newState;
  })
);

export const counterFeatureSelector = createFeatureSelector<CounterState>("counter");
export const selectCounterValue = createSelector(counterFeatureSelector, (state) => state.value);
export const selectTimesIncremented = createSelector(counterFeatureSelector, state => state.timesIncremented);
export const selectCombined = createSelector(selectCounterValue, selectTimesIncremented,
  (value , timesIncremented) => {
    //do stuff with two values
});
export const selectSpecilized = createSelector(counterFeatureSelector,state => {
  return {
    timesIncremented: state.timesIncremented,
    timesDecremented: state.timesDecremented
  }
});
