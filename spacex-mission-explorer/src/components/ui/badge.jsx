// src/components/ui/badge.jsx
import React from "react";
import clsx from "clsx";

export default function Badge({ children, variant = "default", className }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full",
        variant === "success" && "bg-green-100 text-green-800",
        variant === "destructive" && "bg-red-100 text-red-800",
        variant === "default" && "bg-gray-100 text-gray-800",
        className
      )}
    >
      {children}
    </span>
  );
}
