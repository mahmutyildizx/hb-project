import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import preloadAll from "jest-next-dynamic";
import SearchInput from "./SearchInput";

afterEach(cleanup);

beforeAll(async () => {
  await preloadAll();
});

test("should match snapshot", () => {
  const { container } = render(<SearchInput />);
  expect(container).toMatchSnapshot();
});
