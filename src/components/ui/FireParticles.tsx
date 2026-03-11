"use client";

import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function FireParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="fire-particles"
      init={particlesInit}
      options={{
        fullScreen: false,
        fpsLimit: 60,
        particles: {
          number: {
            value: 40,
            density: {
              enable: true,
            },
          },
          color: {
            value: ["#E85D04", "#F97316", "#DC2626", "#FBBF24"],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: { min: 0.2, max: 0.5 },
            animation: {
              enable: true,
              speed: 0.5,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 4 },
            animation: {
              enable: true,
              speed: 2,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: { min: 0.5, max: 1.5 },
            direction: "top",
            random: true,
            straight: false,
            outModes: {
              default: "out",
              bottom: "out",
              top: "out",
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            repulse: {
              distance: 80,
              duration: 0.4,
            },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-10 pointer-events-auto"
    />
  );
}
