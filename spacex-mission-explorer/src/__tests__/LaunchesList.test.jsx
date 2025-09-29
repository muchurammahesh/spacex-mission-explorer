
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { LaunchesProvider } from "@/context/LaunchesProvider";
import LaunchesList from "@/pages/LaunchesList";

function renderWithProviders() {
  return render(
    <MemoryRouter>
      <LaunchesProvider>
        <LaunchesList />
      </LaunchesProvider>
    </MemoryRouter>
  );
}

describe("LaunchesList", () => {
  test("renders loading skeleton state", () => {
    renderWithProviders();

    
    const skeletons = screen.getAllByTestId("loading-skeleton");
    expect(skeletons.length).toBeGreaterThan(0);
  });
});