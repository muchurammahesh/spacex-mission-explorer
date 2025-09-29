// src/context/LaunchesProvider.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchLaunches, fetchRockets } from "@/api/spacex";

export const LaunchesContext = createContext();

export function LaunchesProvider({ children }) {
  const [launches, setLaunches] = useState([]);
  const [rockets, setRockets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: "",
    year: "",
    successOnly: false,
    favoritesOnly: false,
  });

  // favorites from localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favorites")) || [];
    } catch {
      return [];
    }
  });

  // Sync favorites → localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Toggle favorite
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  // Fetch launches + rockets
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [launchesData, rocketsData] = await Promise.all([
          fetchLaunches(),
          fetchRockets(),
        ]);
        setLaunches(launchesData);
        setRockets(rocketsData);
      } catch (e) {
        console.error("Error fetching data", e);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <LaunchesContext.Provider
      value={{
        launches,
        rockets,
        loading,
        filters,
        setFilters,
        favorites,
        toggleFavorite,
      }}
    >
      {children}
    </LaunchesContext.Provider>
  );
}

export const useLaunchesContext = () => useContext(LaunchesContext);
