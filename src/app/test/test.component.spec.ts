import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TestComponent } from "./test.component";
import { render, screen } from "@testing-library/angular";

describe("TestComponent", () => {
  it("should change the text", async () => {
    const renderResult = await render(TestComponent);
    expect(screen.getByText("Original text content")).toBeInTheDocument();

  });
});
