import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "child-a",
  templateUrl: "./child-a.component.html",
})
export class ChildAComponent {
  @Output() nameChanged = new EventEmitter<string>();

  onInputChange({ target }: Event) {
    const name = (target as HTMLInputElement).value;
    this.nameChanged.emit(name);
  }
}
