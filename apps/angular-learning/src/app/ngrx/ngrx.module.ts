import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./store/slices/counter/counter-slice";

@NgModule({
  declarations: [
    StoreComponent
  ],
  exports: [
    StoreComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature("counter", counterReducer)
  ]
})
export class NgrxModule { }
