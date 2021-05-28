import { Component, Input } from "@angular/core";

@Component({
  selector: "child-b",
  templateUrl: "./child-b.component.html",
})
export class ChildBComponent {
  @Input() childAName = "";
}
