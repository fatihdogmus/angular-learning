import { Action, createAction, props } from "@ngrx/store";

export class IncrementAction implements Action {
  readonly type = "INCREMENT";
}

export class DecrementAction implements Action {
  readonly type = "DECREMENT";
}

export class AddAction implements Action {
  readonly type = "ADD";

  constructor(public payload: number) {}
}

export type CounterActions = IncrementAction | DecrementAction | AddAction;

export const inrementCounter = createAction("[Counter] Increment counter");

export const addCounter = createAction("[Counter] Add value to counter", props<{ value: number }>());

addCounter({ value: 45 });
