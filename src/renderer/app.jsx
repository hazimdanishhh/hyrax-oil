// src/renderer/app.jsx
import React from "react";
import useHydrated from "../functions/useHydrated.js";
import "./styles/main.scss";

export default function App({ children }) {
  const hydrated = useHydrated();
  if (!hydrated) return null;

  return <>{children}</>;
}
