import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { added, counterSelector, CounterState, decremented, incremented } from "../../store/counter-slice";

@Component({
  selector: "counter",
  templateUrl: "./counter.component.html",
})
export class CounterComponent implements OnInit {
  count = 0;

  constructor(private readonly store: Store<CounterState>) {}

  ngOnInit(): void {
    this.store.select(counterSelector).subscribe((state) => (this.count = state.value));
  }

  onIncrement() {
    this.store.dispatch(incremented());
  }

  addFive() {
    this.store.dispatch(added(5));
  }

  onDecrement() {
    this.store.dispatch(decremented());
  }
}
