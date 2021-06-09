import { Component } from "@angular/core";
import { MediatorService } from "../mediator.service";

@Component({
  selector: "first",
  templateUrl: "./first.component.html",
})
export class FirstComponent {
  constructor(private readonly mediatorService: MediatorService) {}

  onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.mediatorService.name = target.value;
  }
}
