"use client";
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: { color: '#000000' },
        particles: {
          number: { value: 40, density: { enable: true, area: 800 } },
          color: { value: '#c8c8c8' },
          opacity: { value: 0.7, random: false },
          size: { value: 2.5, random: { enable: true, minimumValue: 1.5 } },
          links: {
            enable: true,
            color: '#969696',
            opacity: 0.5,
            width: 1.2,
            distance: 150,
            triangles: {
              enable: true,
              color: '#646464',
              opacity: 0.25
            }
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: 'none',
            outModes: { default: 'out' },
            attract: { enable: false },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            resize: true,
          },
          modes: {
            repulse: { distance: 80, duration: 0.3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
} 