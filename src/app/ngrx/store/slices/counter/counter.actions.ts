import { Action } from "@ngrx/store";

export class IncrementAction implements Action {
  type: "INCREMENT" = "INCREMENT";
}

export class DecrementAction implements Action {
  type:"DECREMENT" = "DECREMENT";
}

export class AddAction implements Action {
  type:"ADD" = "ADD";
  payload: number;

  constructor(payload: number) {
    this.payload = payload;
  }
}

export type CounterActions = IncrementAction | DecrementAction | AddAction;
