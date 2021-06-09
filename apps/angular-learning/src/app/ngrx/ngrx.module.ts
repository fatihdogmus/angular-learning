import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./store/slices/counter/counter.reducer";

@NgModule({
  declarations: [
    StoreComponent
  ],
  exports: [
    StoreComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class NgrxModule { }
