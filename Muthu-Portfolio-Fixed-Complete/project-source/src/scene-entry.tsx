import React from "react";
import { createRoot } from "react-dom/client";
import { TempleNightScene } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";
export function Scene() {
  return <div className="shader-frame"><TempleNightScene variant="temple-night" /></div>;
}
const host = document.getElementById("temple-scene-root");
if (host) createRoot(host).render(<Scene />);
