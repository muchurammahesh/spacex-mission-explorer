
import React from "react";
import { useLaunchesContext } from "@/context/LaunchesProvider";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

export default function LaunchCard({ launch }) {
  const { favorites, toggleFavorite, rockets } = useLaunchesContext();
  const isFav = favorites.includes(launch.id);

  const rocket = rockets.find((r) => r.id === launch.rocket);

  const handleFavorite = () => {
    toggleFavorite(launch.id);
    console.log("Favorite toggled:", launch.name, "→", !isFav); //  Analytics
  };

  return (
    <div className="w-full max-w-md bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 flex flex-col justify-between text-center">
      {/* Title + Fav Star */}
      <div className="flex justify-between items-start">
        <h3 className="text-2xl font-bold">{launch.name}</h3>
        <button onClick={handleFavorite} className="p-3 rounded-full transition">
          <Star
            size={28}
            className={isFav ? "text-yellow-500 fill-yellow-500" : "text-gray-400"}
          />
        </button>
      </div>

      {/* Date + Rocket */}
      <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
        {new Date(launch.date_utc).toLocaleString()} ·{" "}
        {rocket?.name || "Unknown Rocket"}
      </p>

      {/* Tags */}
      <div className="flex gap-3 mt-5 justify-center flex-wrap">
        <span className="text-base px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800">
          {launch.success === null
            ? "TBD"
            : launch.success
            ? "Success"
            : "Failed"}
        </span>
        <span className="text-base px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800">
          {new Date(launch.date_utc).getFullYear()}
        </span>
      </div>

      {/* Footer */}
      <div className="mt-8">
        <Link
          to={`/launch/${launch.id}`}
          className="px-6 py-3 rounded-lg text-base font-medium bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition"
        >
          View details
        </Link>
      </div>
    </div>
  );
}