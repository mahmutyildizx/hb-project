import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import preloadAll from "jest-next-dynamic";
import Basket from "./Basket";

afterEach(cleanup);

beforeAll(async () => {
  await preloadAll();
});

test("should render", () => {
  const { container } = render(<Basket />);
  expect(container.firstChild).toHaveClass("basketContainer");
});

test("should match snapshot", () => {
  const { container } = render(<Basket />);
  expect(container).toMatchSnapshot();
});

test("Basket label rendered as text", () => {
  render(<Basket totalQuantity="5" />);
  expect(screen.getByText("5")).toBeInTheDocument();
});
