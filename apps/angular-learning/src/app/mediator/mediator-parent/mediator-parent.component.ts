import { Component, ViewChild } from "@angular/core";
import { ChildAComponent } from "./child-a/child-a.component";

@Component({
  selector: "mediator-parent",
  templateUrl: "./mediator-parent.component.html",
})
export class MediatorParentComponent {
  @ViewChild("childA") childA: ChildAComponent;
  childAName = "";

  constructor() {
    const nameChanged = this.childA.nameChanged;
  }

  childANameChanged(name: string) {
    this.childAName = name;
  }
}
