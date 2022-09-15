import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import preloadAll from "jest-next-dynamic";
import SortingDropdown from "./SortingDropdown";

afterEach(cleanup);

beforeAll(async () => {
  await preloadAll();
});

test("should match snapshot", () => {
  const { container } = render(<SortingDropdown />);
  expect(container).toMatchSnapshot();
});
