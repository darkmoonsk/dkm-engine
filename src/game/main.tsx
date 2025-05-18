// src/main.tsx
import { createRoot } from "react-dom/client";
import { GameCanvas } from "../components/GameCanvas";

const container = document.getElementById("root");
if (!container) throw new Error("div#root não encontrada");

const root = createRoot(container);
root.render(<GameCanvas />);
