import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import App from "../App";
import Welcome from "../components/Welcome";

describe("Welcome", () => {
  it("Verifica che il componente Welcome venga montato correttamente", () => {
    render(<Welcome />);
    //screen.debug();
    const montaggioWelcome = screen.getByText(/Welcome!/i);
    expect(montaggioWelcome).toBeInTheDocument();
  });
});
