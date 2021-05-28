import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-test",
  templateUrl: "test.component.html",
})
export class TestComponent {
  constructor(private router: Router) {}

  onClik() {
    this.router.navigate(["/product", 3], { queryParams: { name: "fatih" } });
  }
}
