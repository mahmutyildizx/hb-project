import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import preloadAll from "jest-next-dynamic";
import Button from "./Button";

afterEach(cleanup);

beforeAll(async () => {
  await preloadAll();
});

test("should render", () => {
  const { container } = render(<Button />);
  expect(container.firstChild).toHaveClass("buttonContainer");
});

test("should match snapshot", () => {
  const { container } = render(<Button />);
  expect(container).toMatchSnapshot();
});

test("Button label rendered as text", () => {
  render(<Button name="Test Button" />);
  expect(screen.getByText("Test Button")).toBeInTheDocument();
});