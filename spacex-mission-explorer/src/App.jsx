
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LaunchesProvider } from "@/context/LaunchesProvider";
import LaunchesList from "@/pages/LaunchesList";
import LaunchDetails from "@/pages/LaunchDetails";
import ThemeToggle from "@/components/ThemeToggle";

export default function App() {
  return (
    <LaunchesProvider>
      <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<LaunchesList />} />
          <Route path="/launch/:id" element={<LaunchDetails />} />
        </Routes>
      </BrowserRouter>
    </LaunchesProvider>
  );
}