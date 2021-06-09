import { CounterActions } from "./counter.actions";

export function counterReducer(state = 0, action: CounterActions) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "ADD":
      return state + action.payload
    default:
      return state;
  }
}
