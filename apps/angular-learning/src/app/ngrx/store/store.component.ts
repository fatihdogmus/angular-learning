import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
  counterDecremented,
  counterIncremented,
  selectCounterValue,
  counterAdded,
  CounterState,
  counterFeatureSelector, selectSpecilized
} from "./slices/counter/counter-slice";

@Component({
  selector: "store",
  templateUrl: "./store.component.html",
})
export class StoreComponent implements OnInit {
  counter$: Observable<CounterState>;

  constructor(private readonly store: Store<any>) {}

  ngOnInit(): void {
    const value$ = this.store.select(selectSpecilized);
  }

  increment() {
    this.store.dispatch(counterIncremented());
  }

  decrement() {
    this.store.dispatch(counterDecremented());
  }

  addValue() {
    this.store.dispatch(counterAdded({value: 5}));
  }
}
