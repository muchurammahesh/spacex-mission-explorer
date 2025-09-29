import React from "react";

export default function LoadingSkeleton({ count = 6 }) {
  return (
    <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          data-testid="loading-skeleton"
          className="w-full max-w-md bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 flex flex-col justify-between animate-pulse"
        >
          {/* Header (title + star) */}
          <div className="flex justify-between items-start">
            <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-7 w-7 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          </div>

          {/* Date + Rocket */}
          <div className="mt-4 h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>

          {/* Tags */}
          <div className="flex gap-3 mt-5 justify-center flex-wrap">
            <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            <div className="h-6 w-12 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
          </div>

          {/* Footer button */}
          <div className="mt-8 h-10 w-28 mx-auto bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
        </div>
      ))}
    </div>
  );
}
