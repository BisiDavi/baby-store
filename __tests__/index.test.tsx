import { render, screen, waitFor } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders homepage slider", async () => {
    render(<Home />);

    const slider = await waitFor(() => screen.findByTestId("homepage-slider"));
    expect(slider).toBeTruthy();
  });
});
