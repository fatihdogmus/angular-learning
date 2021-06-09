import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientComponent } from './http-client/http-client.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [HttpClientComponent],
  exports: [HttpClientComponent],
  imports: [CommonModule, HttpClientModule],
})
export class HttpModule {}
