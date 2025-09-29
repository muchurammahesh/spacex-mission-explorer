
import { useState, useEffect } from "react";
import { useLaunchesContext } from "@/context/LaunchesProvider";
import useDebounce from "@/hooks/useDebounce";

export default function FilterBar() {
  const { filters, setFilters } = useLaunchesContext();
  const [search, setSearch] = useState(filters.search || "");
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    setFilters({ ...filters, search: debouncedSearch });
  }, [debouncedSearch]);

  return (
    <div className="sticky top-[64px] z-40 bg-white dark:bg-gray-900 shadow px-4 py-3 w-full flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Search */}
      <input
        type="text"
        placeholder="Search by mission name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-2 border rounded-lg text-sm bg-gray-50 dark:bg-gray-800 w-full sm:w-1/3"
      />

      {/* Year + Toggles */}
      <div className="flex flex-wrap gap-4 items-center">
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

        {/* Successful only */}
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
              filters.successOnly ? "bg-sky-500" : "bg-gray-300"
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

        {/* Favorites */}
        <label className="flex items-center gap-2 cursor-pointer text-sm">
          <input
            type="checkbox"
            checked={filters.favoritesOnly}
            onChange={() =>
              setFilters({ ...filters, favoritesOnly: !filters.favoritesOnly })
            }
            className="hidden"
          />
          <span
            className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors ${
              filters.favoritesOnly ? "bg-amber-400" : "bg-gray-300"
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
  );
}