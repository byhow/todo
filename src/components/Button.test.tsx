import { Button } from "./Button";
import { render, screen, fireEvent } from "@testing-library/react";
import { expect, it, vi } from "vitest";

it("is clickable", () => {
  const onClick = vi.fn();
  render(<Button onClick={onClick}>Hello World</Button>);

  fireEvent.click(screen.getByText("Hello World"));
  expect(onClick).toHaveBeenCalledTimes(1);
});

it("is not clickable when disabled", () => {
  const onClick = vi.fn();
  render(
    <Button onClick={onClick} disabled={true}>
      Hello World
    </Button>,
  );

  fireEvent.click(screen.getByText("Hello World"));
  expect(onClick).not.toHaveBeenCalled();
});
