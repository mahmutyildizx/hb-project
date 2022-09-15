import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import preloadAll from "jest-next-dynamic";
import Filter from "./Filter";

afterEach(cleanup);

beforeAll(async () => {
  await preloadAll();
});

test("should match snapshot", () => {
  const { container } = render(<Filter />);
  expect(container).toMatchSnapshot();
});

// test("should render", () => {
//   const { container } = render(<Filter />);
//   expect(container.firstChild).toHaveClass("filterContainer");
// });

// test("should filter title rendered as text", () => {
//   render(<Filter title="Sırala" />);
//   expect(screen.getByText("Sırala")).toBeInTheDocument();
// });
