
import React from "react";
import { useLaunchesContext } from "@/context/LaunchesProvider";
import Navbar from "@/components/Navbar";
import LaunchCard from "@/components/LaunchCard";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import EmptyState from "@/components/EmptyState";
import Pagination from "@/components/Pagination";

export default function LaunchesList() {
  const { launches, loading, filters, favorites } = useLaunchesContext();

  // Filtering
  const filtered = launches.filter((l) => {
    const year = new Date(l.date_utc).getFullYear().toString();
    if (filters.search && !l.name.toLowerCase().includes(filters.search.toLowerCase())) return false;
    if (filters.year && filters.year !== year) return false;
    if (filters.successOnly && !l.success) return false;
    if (filters.favoritesOnly && !favorites.includes(l.id)) return false;
    return true;
  });

  // Pagination
  const [page, setPage] = React.useState(1);
  const perPage = 12;
  const totalPages = Math.ceil(filtered.length / perPage) || 1;
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-8xl mx-auto w-full px-6 py-8 space-y-8">
        {loading ? (
          <LoadingSkeleton count={8} />
        ) : filtered.length === 0 ? (
          <EmptyState message="No launches found. Try adjusting filters." />
        ) : (
          <>
            {/* Grid layout */}
            <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              {paginated.map((launch) => (
                <LaunchCard key={launch.id} launch={launch} />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              page={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </>
        )}
      </main>
    </div>
  );
}