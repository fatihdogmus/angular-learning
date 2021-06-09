import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { DecrementAction, IncrementAction } from "./slices/counter/counter.actions";

@Component({
  selector: "store",
  templateUrl: "./store.component.html"
})
export class StoreComponent implements OnInit {
  counter$: Observable<number>;

  constructor(private readonly store: Store<{ counterState: number }>) {
  }

  ngOnInit(): void {
    this.counter$ = this.store.select(state => state.counterState);
  }

  increment() {
    this.store.dispatch(new IncrementAction());
  }

  decrement() {
    this.store.dispatch(new DecrementAction());
  }
}
