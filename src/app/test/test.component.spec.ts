import { TestComponent } from "./test.component";
import { render, screen } from "@testing-library/angular";
import userEvent from "@testing-library/user-event";

describe("TestComponent", () => {
  it("should change the text", async () => {
    await render(TestComponent);
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
  });
});

describe("TestComponent", () => {
  it("should render", async () => {
    await render(TestComponent);
    expect(screen.queryByText("Submit")).not.toBeNull();
  });
});

describe("TestComponent", () => {
  it("should render", async () => {
    await render(TestComponent);
    expect(await screen.findByText("User successfully registerd")).toBeInTheDocument();
  });
});

describe("TestComponent", () => {
  it("should click", async () => {
    await render(TestComponent);
    userEvent.click(screen.getByText("Button"));
  });
});

describe("TestComponent", () => {
  it("should type", async () => {
    await render(TestComponent);
    userEvent.type(screen.getByLabelText("Username"), "Fatih");
  });
});

describe("TestComponent", () => {
  it("should upload", async () => {
    await render(TestComponent);
    userEvent.upload(screen.getByLabelText("CV"), new File([""],"file.txt"));
  });
});

describe("TestComponent", () => {
  it("should clear", async () => {
    await render(TestComponent);
    userEvent.clear(screen.getByLabelText("Username"));
  });
});

describe("TestComponent", () => {
  it("should select option", async () => {
    await render(TestComponent);
    userEvent.selectOptions(screen.getByLabelText("Gender"), "Male");
  });
});

describe("TestComponent", () => {
  it("should paste", async () => {
    await render(TestComponent);
    userEvent.paste(screen.getByLabelText("Telephone number"), "0513484131");
  });
});

describe("TestComponent", () => {
  it("should blur", async () => {
    await render(TestComponent);
    screen.getByLabelText("Username").blur();
  });
});
