/**
 * @jest-environment jsdom
 */

import { fireEvent, render } from "@testing-library/react";
import Home from "src/pages";

describe("Home page", () => {
  it("clicking button triggers alert", () => {
    const { getByText } = render(<Home />, {});
    window.alert = jest.fn();
    fireEvent.click(getByText("Click me!"));
    expect(window.alert).toHaveBeenCalledWith("Hello, World!");
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Home />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
