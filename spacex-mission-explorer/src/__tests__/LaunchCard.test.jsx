import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { LaunchesProvider } from "@/context/LaunchesProvider";
import LaunchCard from "@/components/LaunchCard";

const mockLaunch = {
  id: "1",
  name: "DemoSat",
  date_utc: "2007-03-21T01:10:00.000Z",
  rocket: "falcon1",
  success: false,
  links: { patch: { small: null } },
};

function renderWithProviders(ui) {
  return render(
    <MemoryRouter>
      <LaunchesProvider>{ui}</LaunchesProvider>
    </MemoryRouter>
  );
}

describe("LaunchCard", () => {
  test("renders mission name", () => {
    renderWithProviders(<LaunchCard launch={mockLaunch} />);
    expect(screen.getByText(/DemoSat/i)).toBeInTheDocument();
  });

  test("renders fallback rocket text", () => {
    renderWithProviders(<LaunchCard launch={mockLaunch} />);
    expect(screen.getByText(/Unknown Rocket/i)).toBeInTheDocument();
  });

  test("toggles favorites", () => {
    renderWithProviders(<LaunchCard launch={mockLaunch} />);
    const button = screen.getAllByRole("button")[0]; // the star button
    fireEvent.click(button);
    fireEvent.click(button);
  });
});