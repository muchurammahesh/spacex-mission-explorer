
import { useEffect, useRef, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { LaunchesContext } from "@/context/LaunchesProvider";

export default function LaunchDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { launches, rockets } = useContext(LaunchesContext);

  const [launch, setLaunch] = useState(null);
  const modalRef = useRef(null);

  // Find launch by ID
  useEffect(() => {
    const found = launches.find((l) => l.id === id);
    if (found) {
      const rocket = rockets.find((r) => r.id === found.rocket);
      setLaunch({ ...found, rocketName: rocket?.name });
    }
  }, [id, launches, rockets]);

  if (!launch) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        Loading launch details...
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div
        ref={modalRef}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg
                   w-full max-w-3xl
                   max-h-[85vh] overflow-y-auto p-6 relative"
      >
        {/* Close button */}
        <button
          onClick={() => navigate("/")}
          aria-label="Close details"
          className="absolute top-4 right-4 p-2 rounded-full 
                     bg-gray-200 hover:bg-gray-300 
                     dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <X className="h-5 w-5 text-gray-800 dark:text-gray-200" />
        </button>

        {/* Content */}
        <div className="text-center space-y-4">
          {launch.links.patch.small && (
            <img
              src={launch.links.patch.small}
              alt={`${launch.name} mission patch`}
              className="w-24 h-24 mx-auto object-contain"
            />
          )}
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            {launch.name}{" "}
            <span className="text-gray-500 text-sm">
              ({new Date(launch.date_utc).toLocaleDateString()})
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">{launch.rocketName}</p>
          {launch.details && (
            <p className="text-gray-700 dark:text-gray-300">{launch.details}</p>
          )}

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-3">
            {launch.links.wikipedia && (
              <a
                href={launch.links.wikipedia}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 rounded text-sm 
                           bg-gray-200 hover:bg-gray-300 
                           dark:bg-gray-800 dark:hover:bg-gray-700 
                           text-gray-900 dark:text-gray-100"
              >
                Wikipedia
              </a>
            )}
            {launch.links.webcast && (
              <a
                href={launch.links.webcast}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 rounded text-sm 
                           bg-gray-200 hover:bg-gray-300 
                           dark:bg-gray-800 dark:hover:bg-gray-700 
                           text-gray-900 dark:text-gray-100"
              >
                Watch Webcast
              </a>
            )}
          </div>
<button
  onClick={() => navigate("/")}
  aria-label="Close details"
  className="absolute top-4 right-4 p-2 rounded-full 
             bg-sky-100 dark:bg-sky-700
             hover:bg-sky-200 dark:hover:bg-sky-600"
>
  <X className="h-5 w-5 text-sky-900 dark:text-white" />
</button>

{/* Back button */}
<button
  onClick={() => navigate("/")}
  className="px-4 py-1 rounded text-sm font-medium
             bg-sky-100 dark:bg-sky-700
             hover:bg-sky-200 dark:hover:bg-sky-600
             text-sky-900 dark:text-white"
>
  Back to Launches
</button>
        </div>
      </div>
    </div>
  );
}