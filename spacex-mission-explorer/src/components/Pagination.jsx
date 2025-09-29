
import React from "react";

export default function Pagination({ page, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="px-3 py-1 rounded text-sm bg-white hover:bg-gray-100 disabled:opacity-50"
      >
        Prev
      </button>

      <span className="text-sm">
        Page {page} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className="px-3 py-1 rounded text-sm bg-white hover:bg-gray-100 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
