import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import preloadAll from "jest-next-dynamic";
import Modal from "./Modal";

afterEach(cleanup);

beforeAll(async () => {
  await preloadAll();
});

test("should match snapshot", () => {
  const { container } = render(<Modal />);
  expect(container).toMatchSnapshot();
});

// test("should render", () => {
//   const { container } = render(<Modal />);
//   expect(container.firstChild).toHaveClass("modalContainer");
// });

// test("should modal title rendered as text", () => {
//   render(<Modal title="Sırala" />);
//   expect(screen.getByText("Sırala")).toBeInTheDocument();
// });
