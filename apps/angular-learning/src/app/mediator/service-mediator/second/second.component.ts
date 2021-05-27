import { Component } from "@angular/core";
import { MediatorService } from "../mediator.service";

@Component({
  selector: "second",
  templateUrl: "./second.component.html",
})
export class SecondComponent {
  name = "";

  constructor(private readonly mediatorService: MediatorService) {
    this.mediatorService.name$.subscribe((name) => (this.name = name));
  }
}
