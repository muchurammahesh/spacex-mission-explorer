
import { Star } from "lucide-react";

export default function FavoriteButton({ isFavorite, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-pressed={isFavorite}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      className="p-2 rounded-full transition 
                 hover:bg-sky-100 dark:hover:bg-sky-800"
    >
      <Star
        className={`w-6 h-6 ${
          isFavorite
            ? "fill-amber-400 stroke-amber-500"
            : "stroke-gray-600 dark:stroke-gray-300"
        }`}
      />
    </button>
  );
}