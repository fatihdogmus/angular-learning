import { Component } from "@angular/core";

@Component({
  selector: "test",
  template: `
    <span>{{textContent}}</span>
    <button (click)="onClick()">Change text</button>
  `,
})
export class TestComponent {
  textContent: string = "Original text content";

  onClick() {
    this.textContent = "New text content!";
  }
}
