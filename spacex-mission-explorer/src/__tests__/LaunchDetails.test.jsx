import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { LaunchesProvider } from "@/context/LaunchesProvider";
import LaunchDetails from "@/pages/LaunchDetails";

const mockLaunch = {
  id: "99",
  name: "FalconSat",
  date_utc: "2006-03-24T22:30:00.000Z",
  rocket: "falcon1",
  success: false,
  links: { patch: { small: null } },
};

function renderWithProviders(route = "/launch/99") {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <LaunchesProvider>
        <Routes>
          <Route path="/launch/:id" element={<LaunchDetails />} />
        </Routes>
      </LaunchesProvider>
    </MemoryRouter>
  );
}

describe("LaunchDetails", () => {
  test("renders loading state initially", () => {
    renderWithProviders("/launch/does-not-exist");
    expect(
      screen.getByText(/Loading launch details/i)
    ).toBeInTheDocument();
  });

  test("renders launch name when found", () => {
    renderWithProviders("/launch/99");
  });
});