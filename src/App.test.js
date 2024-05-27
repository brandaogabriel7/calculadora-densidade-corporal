import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders calculation form", () => {
  render(<App />);
  const calculationForm = screen.getByRole("form");

  expect(calculationForm).toBeInTheDocument();
});
