import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CounterComponent } from "./counter/counter.component";
import { StoreModule } from "@ngrx/store";
import { counterReducer, name as counterFeatureKey } from "../store/counter-slice";

@NgModule({
  declarations: [CounterComponent],
  imports: [CommonModule, StoreModule.forFeature(counterFeatureKey, counterReducer)],
  exports: [CounterComponent],
})
export class CounterModule {}
