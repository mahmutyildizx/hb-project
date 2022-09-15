import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import preloadAll from "jest-next-dynamic";
import Cart from "./Cart";

afterEach(cleanup);

beforeAll(async () => {
  await preloadAll();
});



