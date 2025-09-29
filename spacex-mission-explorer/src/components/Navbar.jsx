
import React from "react";
import { useLaunchesContext } from "@/context/LaunchesProvider";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const { filters, setFilters } = useLaunchesContext();

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
        {/* Title + tagline + ThemeToggle on right */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">
              Atmosly ·{" "}
              <span className="text-blue-600">SpaceX Mission Explorer</span>
            </h1>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400">
              Fetch real data from the SpaceX public API. Filter, explore, and favorite launches.
            </p>
          </div>

          {/*  Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Search + filters inline */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Search */}
          <input
            type="text"
            placeholder="Search by mission name..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="px-4 py-2 border rounded-lg text-sm bg-gray-50 dark:bg-gray-800 w-full lg:w-1/3"
          />

          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center">
            {/* Year dropdown */}
            <select
              value={filters.year}
              onChange={(e) => setFilters({ ...filters, year: e.target.value })}
              className="px-4 py-2 border rounded-lg text-sm bg-gray-50 dark:bg-gray-800"
            >
              <option value="">All years</option>
              {Array.from({ length: 20 }, (_, i) => 2006 + i).map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>

            {/* Successful only toggle */}
            <label className="flex items-center gap-2 cursor-pointer text-sm">
              <input
                type="checkbox"
                checked={filters.successOnly}
                onChange={() =>
                  setFilters({ ...filters, successOnly: !filters.successOnly })
                }
                className="hidden"
              />
              <span
                className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors ${
                  filters.successOnly ? "bg-blue-500" : "bg-gray-300"
                }`}
              >
                <span
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                    filters.successOnly ? "translate-x-5" : ""
                  }`}
                />
              </span>
              Successful only
            </label>

            {/* Favorites toggle */}
            <label className="flex items-center gap-2 cursor-pointer text-sm">
              <input
                type="checkbox"
                checked={filters.favoritesOnly}
                onChange={() =>
                  setFilters({
                    ...filters,
                    favoritesOnly: !filters.favoritesOnly,
                  })
                }
                className="hidden"
              />
              <span
                className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors ${
                  filters.favoritesOnly ? "bg-yellow-400" : "bg-gray-300"
                }`}
              >
                <span
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                    filters.favoritesOnly ? "translate-x-5" : ""
                  }`}
                />
              </span>
              Favorites
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}
