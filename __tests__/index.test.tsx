import { render, screen, waitFor } from "@testing-library/react";
import Slider from "@/components/Slider";

describe("Slider", () => {
  it("renders homepage slider", async () => {
    render(<Slider />);

    const slider = await waitFor(() => screen.findByTestId("homepage-slider"));
    expect(slider).toBeTruthy();
  });
});
