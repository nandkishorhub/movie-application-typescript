import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { renderWithProviders } from "../../utils/test.utils";

test("Rendering default movie/shows", () => {
  renderWithProviders(<Home />);
});
